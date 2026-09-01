# Happy Birthday, Swamini 🎂

A small birthday page for Swamini, built with React, Vite, Tailwind CSS and Framer Motion.

## Running it

```bash
npm install
npm run dev
```

Then open the URL it prints (usually `http://localhost:5173`).

To build for hosting:

```bash
npm run build
```

The output lands in `dist/`. Drag that folder onto [Netlify](https://www.netlify.com/) for a free public link, or run `vercel` in this directory.

## Sections

The page order is set in `src/App.jsx`:

| Section | Component |
| :--- | :--- |
| Opening card | `IntroAnimation.jsx` |
| Hero with her photo | `Hero.jsx` |
| Two photo cards about her | `HerHeart.jsx` |
| Photo collage | `MemoryGallery.jsx` |
| Typed-out letter | `MessageSection.jsx` |
| The 3 memory photos | `OurMemories.jsx` |
| Why she is special | `Reasons.jsx` |
| Tap-to-reveal photos | `LittleMoments.jsx` |
| Sealed note | `SurpriseLetter.jsx` |
| Closing card | `FinalCelebration.jsx` |
| Floating music button | `MusicPlayer.jsx` |

## Photos

All photos live in `public/images/` and are referenced by these names:

| File | Where it appears |
| :--- | :--- |
| `swamini-main.jpeg` | Intro card, hero circle, gallery, blurred note background |
| `swamini-diwali.jpeg` | `HerHeart` card 1, gallery |
| `swamini-lake.jpeg` | `HerHeart` card 2, gallery |
| `swamini-park.jpeg` | Gallery, photo beside "Why You Are Special" |
| `swamini-cute.jpeg` | Gallery, letter avatar, `LittleMoments` |
| `swamini-mirror.jpeg` | Gallery, `LittleMoments` |
| `memory-1.jpeg` | `OurMemories` 1 |
| `memory-2.jpeg` | `OurMemories` 2 |
| `memory-3.jpeg` | `OurMemories` 3 |
| `memory-4.jpeg` | `LittleMoments`, closing card |

To swap a photo without touching code, drop a replacement into `public/images/` using the same filename.

## Text

- Typed letter: `fullText` at the top of `MessageSection.jsx`
- Memory captions: `memories` array in `OurMemories.jsx`
- Gallery captions: `memories` array in `MemoryGallery.jsx`
- Reasons list: `reasonsList` in `Reasons.jsx`
- Sealed note: the paragraph inside `SurpriseLetter.jsx`

## Music

`public/song.mp3` plays on loop once she taps into the page, and the floating button in the bottom-right corner pauses or resumes it. To change the track, replace that file keeping the name `song.mp3`.
