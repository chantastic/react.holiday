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
- difference between pagination `[page]` and `[...page]`
  - reading thru the docs makes it sound like `[...page]` will also export and index at `/page`. but that's not what it's saying. it's saying that the first paginated link will be at `/page` not `/page/1`
  - we still need to make our own index. which totally makes sense
- `prev/next` don't have additional access to content, which is a bummer. possible that there are other ways to back into this

Here is the boilerplate for pagination:

```astro
---
// pages/whatever/[page].astro
export async function getStaticPaths({ paginate }) {
  let allPosts = await Astro.fetchContent('../2017/*.md');
  allPosts = allPosts.sort((a, b) =>  new Date(a.date).valueOf() - new Date(b.date).valueOf());

  return paginate(allPosts, { pageSize: 1 });
}
const { page } = Astro.props;
---
<h1>Page {page.currentPage}</h1>
<ul>
  {page.data.map(item => <li><a href="#">{item.title}</a></li>)}
</ul>
<div>{page.total}</div>
{
	page.url.prev ?  <a href={page.url.prev}>Prev</a> : null
}
{
	page.url.next ?  <a href={page.url.next}>Next</a> : null
}
```

### Articles opened
- https://docs.astro.build/es/guides/markdown-content/index.html#images-and-videos
- https://docs.astro.build/core-concepts/project-structure/#public
- https://docs.astro.build/guides/pagination/
- https://docs.astro.build/core-concepts/routing/
- https://docs.astro.build/reference/api-reference/#the-pagination-page-prop
- https://docs.astro.build/getting-started/

## Day 3

- `<style lang="scss">`
https://docs.astro.build/es/guides/styling/index.html#-css-preprocessors-sass-stylus-etc
- data fetching: https://docs.astro.build/guides/data-fetching/index.html
- env variables: https://docs.astro.build/guides/environment-variables/index.html
- MUST BE PREFIXED WITH `PUBLIC`
- Astro has a `<Markdown>` component
  - https://docs.astro.build/guides/markdown-content/index.html#astros-markdown-component