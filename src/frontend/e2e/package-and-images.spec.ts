import { expect, test } from '@playwright/test'

/**
 * Package round-trip, checksum enforcement, and image import rules. These run in
 * the browser because they depend on OPFS, crypto.subtle and createImageBitmap.
 */
test('a project package moves between machines and rejects tampering', async ({
  page,
}) => {
  await page.goto('/spike')

  const result = await page.evaluate(async () => {
    const [{ createProject }, { importImageFile }, pkg] = await Promise.all([
      import('/src/core/project/createProject.ts'),
      import('/src/core/images/importImage.ts'),
      import('/src/core/package/projectPackage.ts'),
    ])
    const { attachImage } = await import('/src/core/project/commands.ts')

    // A real PNG, produced in the page rather than shipped as a fixture.
    const canvas = new OffscreenCanvas(64, 48)
    const context = canvas.getContext('2d')!
    context.fillStyle = '#ff8800'
    context.fillRect(0, 0, 64, 48)
    const blob = await canvas.convertToBlob({ type: 'image/png' })
    const file = new File([blob], 'anh-mau.png', { type: 'image/png' })

    const imported = await importImageFile(file)
    if (!imported.ok) return { stage: 'import', error: imported.error.message }

    let project = createProject('Gói mang đi', { id: 'pkg-1' })
    project = attachImage('scene-1', imported.asset).apply(project)

    const exported = await pkg.exportProjectPackage(project)
    const text = await exported.text()

    // "Another machine": the same code path, reading only the file.
    const roundTrip = await pkg.importProjectPackage(text)

    // Tamper with the image bytes but leave the checksum claiming otherwise.
    const body = JSON.parse(text)
    const original = body.assets[0].base64
    body.assets[0].base64 = original.slice(0, -8) + 'AAAAAAAA'
    const tampered = await pkg.importProjectPackage(JSON.stringify(body))

    // A package claiming a future format must be refused, not guessed at.
    const future = await pkg.importProjectPackage(
      JSON.stringify({ ...JSON.parse(text), packageVersion: 99 }),
    )

    const notAPackage = await pkg.importProjectPackage('{"hello":"world"}')

    return {
      stage: 'done',
      fileName: pkg.packageFileName(project),
      roundTripOk: roundTrip.ok,
      roundTripName: roundTrip.ok ? roundTrip.document.name : null,
      roundTripAssets: roundTrip.ok ? roundTrip.document.assets.length : -1,
      tamperedCode: tampered.ok ? 'accepted' : tampered.error.code,
      futureCode: future.ok ? 'accepted' : future.error.code,
      notAPackageCode: notAPackage.ok ? 'accepted' : notAPackage.error.code,
    }
  })

  expect(result.stage).toBe('done')
  expect(result.roundTripOk).toBe(true)
  expect(result.roundTripName).toBe('Gói mang đi')
  expect(result.roundTripAssets).toBe(1)
  expect(result.tamperedCode).toBe('checksum-mismatch')
  expect(result.futureCode).toBe('unsupported-version')
  expect(result.notAPackageCode).toBe('not-a-package')
  expect(result.fileName).toContain('.promptvideo.json')
})

test('image import applies EXIF orientation and refuses bad files', async ({
  page,
}) => {
  await page.goto('/spike')

  const result = await page.evaluate(async () => {
    const { importImageFile, MAX_IMAGE_BYTES } =
      await import('/src/core/images/importImage.ts')

    // A 2x1 JPEG tagged Orientation=6 (rotate 90° clockwise). A decoder that
    // honours EXIF reports it as 1x2; one that ignores EXIF reports 2x1.
    const landscape = new OffscreenCanvas(8, 4)
    const context = landscape.getContext('2d')!
    context.fillStyle = '#3366cc'
    context.fillRect(0, 0, 8, 4)
    context.fillStyle = '#cc3366'
    context.fillRect(0, 0, 4, 4)
    const jpeg = new Uint8Array(
      await (
        await landscape.convertToBlob({ type: 'image/jpeg', quality: 0.9 })
      ).arrayBuffer(),
    )

    // Build an APP1/Exif segment carrying a single Orientation=6 tag.
    const exif = buildExifOrientation(6)
    const withExif = new Uint8Array(jpeg.length + exif.length)
    // SOI is the first two bytes; the APP1 segment goes straight after it.
    withExif.set(jpeg.subarray(0, 2), 0)
    withExif.set(exif, 2)
    withExif.set(jpeg.subarray(2), 2 + exif.length)

    function buildExifOrientation(value: number): Uint8Array {
      const tiff: number[] = []
      // Little-endian TIFF header.
      tiff.push(0x49, 0x49, 0x2a, 0x00, 0x08, 0x00, 0x00, 0x00)
      // One IFD entry.
      tiff.push(0x01, 0x00)
      // Tag 0x0112 (Orientation), type SHORT, count 1, value.
      tiff.push(0x12, 0x01, 0x03, 0x00, 0x01, 0x00, 0x00, 0x00)
      tiff.push(value & 0xff, 0x00, 0x00, 0x00)
      // Next IFD offset = 0.
      tiff.push(0x00, 0x00, 0x00, 0x00)

      const header = [0x45, 0x78, 0x69, 0x66, 0x00, 0x00] // "Exif\0\0"
      const payload = [...header, ...tiff]
      const length = payload.length + 2
      return new Uint8Array([
        0xff,
        0xe1,
        (length >> 8) & 0xff,
        length & 0xff,
        ...payload,
      ])
    }

    const orientedResult = await importImageFile(
      new File([withExif], 'xoay.jpg', { type: 'image/jpeg' }),
    )

    const wrongType = await importImageFile(
      new File([new Uint8Array([1, 2, 3])], 'tai-lieu.pdf', {
        type: 'application/pdf',
      }),
    )

    const corrupt = await importImageFile(
      new File([new Uint8Array([0xff, 0xd8, 0x00, 0x01])], 'hong.jpg', {
        type: 'image/jpeg',
      }),
    )

    const huge = await importImageFile(
      new File([new Uint8Array(MAX_IMAGE_BYTES + 1)], 'to.png', {
        type: 'image/png',
      }),
    )

    return {
      oriented: orientedResult.ok
        ? {
            width: orientedResult.asset.width,
            height: orientedResult.asset.height,
          }
        : { error: orientedResult.error.code },
      wrongTypeCode: wrongType.ok ? 'accepted' : wrongType.error.code,
      corruptCode: corrupt.ok ? 'accepted' : corrupt.error.code,
      hugeCode: huge.ok ? 'accepted' : huge.error.code,
    }
  })

  // The source is 8x4; Orientation=6 means it must be stored as 4x8.
  expect(result.oriented).toEqual({ width: 4, height: 8 })
  expect(result.wrongTypeCode).toBe('unsupported-type')
  expect(result.corruptCode).toBe('decode-failed')
  expect(result.hugeCode).toBe('too-large')
})
