## Next steps

- Fix Image references:
  - problem: http://localhost:3000/2017/6
  - solution: https://docs.astro.build/es/guides/markdown-content/index.html#images-and-videos
- Hook up Fathom for analytics

```html
<!-- The code below should work great for you. If you're having trouble, let us know. -->
<script
  src="https://cdn.usefathom.com/script.js"
  data-site="ZHUODSNX"
  defer
></script>
```

```html
<!-- The code below listens to pushstate / popstate events, and will work nicely in your SPA. -->
<script
  src="https://cdn.usefathom.com/script.js"
  data-spa="auto"
  data-site="ZHUODSNX"
  defer
></script>
```

- Hook up ConvertKit for email
  - JS embed `<script async data-uid="219c16a45b" src="https://chantastic.ck.page/219c16a45b/index.js"></script>`
- Hook up next/previous for posts
  - solution: https://docs.astro.build/guides/pagination/
- Add /rss.xml
  - solution: https://docs.astro.build/guides/rss/index.html

## Day 2

- Next and previous titles
- `/content` directory?

---

## Production notes

### Start with markdown in repo
It sure is a lot easier having this controlled in version controlled first. And — while ConvertKit has a shitty way of interpretting markdown — Convert will interpret the markdown. I have to re-work everything when pulling it the other direction.

---
- links need to have fully qualified urls if they're going to be copy/pasted into emails.
  - if i render emails from the app, it would be nice to have the system build those for me.