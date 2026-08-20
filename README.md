# Slide-to-Video Generator

Turn text and images into MP4 presentation videos. Everything — rendering and encoding — runs in the browser. No server.

**Status: work in progress.** Not usable for real work yet.

*[Tiếng Việt](./README.vi.md)*

---

## The idea

Most AI video tools generate pixels. That is expensive, hard to control, and gives you a different result every run.

This project goes the other way: **describe the video as data, render it with HTML/CSS, and encode it to MP4 on the user's own machine.**

Three consequences:

- No render servers — operating cost is close to zero
- Images and content never leave the user's device
- The same input always produces the same output, regardless of machine speed

---

## How it works

```
Scene JSON  →  Frame-based renderer  →  WebCodecs  →  MP4
```

1. **Scene description** — A video is a JSON structure: a list of scenes, each with a layout, text content, images, duration, and transitions.
2. **Frame-based rendering** — The renderer takes a frame number and returns the exact DOM state for that moment in time.
3. **Encoding** — Each frame is drawn to a canvas and fed to the WebCodecs `VideoEncoder`, then muxed into MP4.

**The key constraint:** every animation is a function of frame number. CSS animations, which run on wall-clock time, are deliberately not used — they drift and stutter when captured frame by frame. This is why the project has its own renderer instead of wrapping an existing animation library.

---

## Scene format

```json
{
  "fps": 30,
  "width": 1920,
  "height": 1080,
  "scenes": [
    {
      "template": "title-center",
      "duration": 90,
      "content": {
        "title": "Q3 Report",
        "subtitle": "Sales Team"
      },
      "transition": { "in": "fade-up", "out": "fade" }
    }
  ]
}
```

This format is the contract between the parts of the system. The editor produces it, the renderer consumes it, the template library defines what values are valid.

---

## Current features

- [ ] Frame-based renderer
- [ ] MP4 export via WebCodecs
- [ ] In-browser preview
- [ ] Template library
- [ ] Form-based content input
- [ ] Save and reload projects

---

## Roadmap

- Full Vietnamese typography — diacritics, line breaking, vertical-frame alignment
- Overlay text and images on existing background video
- Generate scenes automatically from a long block of text
- Subtitle file export
- Vertical formats for social platforms
- Background audio

---

## Known limitations

- Requires WebCodecs support: Chrome 94+, Firefox 130+ on desktop, Safari 26+
- Firefox on Android is not supported
- Safari 16.4 through 18.7 can encode video but not audio
- Memory use grows with video length — not yet optimised past ~2 minutes
- Export speed depends entirely on the user's hardware

---

## Running locally

```bash
npm install
npm run dev
```

---

## Contributing

The project is early and the structure still changes often. Open an issue before sending a pull request so we do not duplicate work.

---

## Background

Started as a coursework project for Software Project Management at the Posts and Telecommunications Institute of Technology.

## License

Apache 2.0
