# Zem Beauty & More

## Languages
- German: `/de/`
- English: `/en/`
- Root `/` is a language chooser.

This version keeps a fully static Next.js export. No server-side locale detection is used. The language switcher preserves the current page where a German/English route exists.

## Run
```bash
npm install
npm run dev
```

## Deploy
```bash
git add .
git commit -m "update v4"
git push
```

The GitHub Pages workflow builds `out/` and deploys it.

## Important
The current image URLs are public reference assets used to reproduce the requested visual direction. Replace them with your own or authorized images before commercial launch.
