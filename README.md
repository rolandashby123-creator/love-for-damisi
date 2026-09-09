# For You — React Love Letter

A small multi-page React experience with:

1. Birthday authentication
2. A personal letter
3. A page celebrating her strength and worth
4. A final page explaining how much you miss her

## Run it

```bash
npm install
npm run dev
```

Then open the local Vite URL.

## Important

Open `src/App.jsx` and change:

```js
const CORRECT_BIRTHDAY = "June 14";
```

to the birthday you actually have in common.

You can also edit the four choices in `birthdayOptions`.

The authentication is intentionally simple: it is a playful gate, not real security. The unlock is stored in `sessionStorage` so the pages cannot be opened directly before the birthday is selected.

## Deploy

This is a normal Vite React app and can be deployed to Vercel, Netlify, GitHub Pages (with suitable SPA configuration), or another static host.
