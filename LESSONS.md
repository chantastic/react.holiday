# Lessons

---

# Day 1

## `npm init astro`

- Can be run inside a directory (which is nice if you have existing git history)
- Selected `blog` (for the basic styles)
- Note that it starts with `preact`

## Component format

- `.astro`
  - `<style>`
  - markup directly in file
  - Uses frontmatter style for `<script>`
- can use `md` directly
  - `md` files can use `layout`
  - `md` files can use `setup`
    setup: |
    import Layout from '../../layouts/BlogPost.astro'
    import Cool from '../../components/Author.astro'
  - components can use frontmatter through `frontmatter.{property}`
  - APIs for fetching data from the file system
    let allPosts = await Astro.fetchContent('./posts/\*.md');
    allPosts = allPosts.sort((a, b) => new Date(b.publishDate).valueOf() - new Date(a.publishDate).valueOf());

## Structure

- `/public`
- `/src/components`
- `/src/layouts`

## Articles opened

- https://docs.astro.build/getting-started/
- https://docs.astro.build/core-concepts/astro-components/
- https://docs.astro.build/core-concepts/component-hydration/
- https://docs.astro.build/guides/markdown-content/#astros-markdown-component
  https://docs.astro.build/core-concepts/component-hydration/#mycomponent-clientload-
- https://docs.astro.build/guides/aliases/
- https://docs.astro.build/es/reference/api-reference/index.html#astrofetchcontent

---

# Day 2

- prefix image paths with `/`