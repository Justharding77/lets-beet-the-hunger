# Let's BEET the Hunger — Clean Rebuild

This version reduces repeated HTML by storing repeated website content in one
`siteData` object inside `script.js`.

## Files

- `index.html` — page structure only
- `style.css` — all design and responsive layout
- `script.js` — website content arrays, card rendering, navigation, forms, and animations
- `images/` — logo and partnership images

## Required images

Add these exact filenames to `images/`:

```text
lets-beet-the-hunger-logo.png
the-van-partnership.jpeg
```

## Why this code is less repetitive

Instead of manually writing every program card, founder card, partnership card,
location, volunteer option, and donation item in HTML, those items are listed
once in `siteData` inside `script.js`.

To change wording or add a new card, edit the matching array:

- `quickFacts`
- `programs`
- `founders`
- `partnerships`
- `locations`
- `volunteerOptions`
- `supportItems`

## Before publishing

Replace these temporary values:

```text
your-email@example.com
(501) 555-1234
+15015551234
```

Also replace the two partnership links currently set to `#`.

## Forms

The forms validate in the browser but do not submit anywhere yet. Connect them
to Formspree, Netlify Forms, Basin, Getform, or your own backend.

## Git commands

```bash
git add .
git commit -m "Add clean nonprofit website rebuild"
git push
```
