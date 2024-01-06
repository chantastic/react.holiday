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

## Things I haven't loved so far

- Lacks polish
  - Default is `preact` which is very *react-like*
  - But unsettling
  - Editor plugins aren't great
    - `.astro` frontmatter/script support doesnt work
- `.astro` files are very strange
  - the frontmatter style is unsettling to me
  - can't do multiple frontmatters like you can do multiple scripts in svelte and othe SCF file-types
- Twitter community isn't there yet. I threw out a a handful of questions and tagged @astrodotbuild to no response, RT, or tag
- The way modules are authored is so strange to me. I find it super confusing that component code is written directly in the module. but then you also export functions like `getStaticPaths`. This makes sense in Next because you're also exporting a default component (where all the page code lives)
  - this is particularly odd feeling with pagination, with the export of getStaticPaths, and then right below it the `let { page } = Astro.props` page code
- People who are super excited about it don't seem to be super knowledgable about it
- Some somewhat irritating customs (if you're familiar with vite)
  - Only `PUBLIC_`-prefixed `.env` vars are "made available to client-side code". I lost some time to this because I don't read docs top-to-bottom. I search and read the part I need. It's not obvious (when using the docs like this) that `PUBLIC_` is required. And honestly, it's not clear even after reading them. Because I'm not exposing a client-side key. I'm using a key that I'm running at build time
  - But that's kinda the problem with Astro is that it's super clever about not having to know about when your component runs. So, you have to — i suppose — assume that everything is client-exposed. That's irritating tho.
- Docs are thorough but not clear. Several times I read something thru, thinking I understood it, but not understanding it at all.

## Things that are great
- Partial hydration
- Noticably fast

## 2021-12-13

- pagination with title: https://github.com/chantastic/react.holiday/commit/24a3df03a07471eac6e9868d643edb468e96ceb0

## 2021-12-14

- Add build options for canonical urls
  - https://docs.astro.build/guides/deploy/index.html#github-pages
  - `01:35 PM [config] Set "buildOptions.site" to generate correct canonical URLs and sitemap`


## 2021-12-25

- pandoc's default 'filter' is from markdown to html
  - `-f markdown -t html`
  - `-s` is for standalone — which will include a bunch of wrapping html and css
- [ebook instructions](https://pandoc.org/epub.html)
- [Pandoc Epub metadata](https://pandoc.org/MANUAL.html#epub-metadata)
