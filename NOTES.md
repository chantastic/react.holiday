- fix date based sorting in tatalogs
- ensure everything has an index
- improve pages a little

# 2022 content

## Why Next.js?

## The awkard teen years | experimental Next 13 features

The first thing you need to know about Next 13 is that it's kinda in an awkward phase.

He headline features of Next.js 13 are all `/app` directory. But the app directory is experimental. Experimental to the point that you have to explicitly opt in via config.

That config looks like this:

```diff
// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
+  experimental: { appDir: true },
};

module.exports = nextConfig;
```

```bash
warn  - You have enabled experimental feature (appDir) in next.config.js.
warn  - Experimental features are not covered by semver, and may cause unexpected or broken application behavior. Use at your own risk.
info  - Thank you for testing `appDir` please leave your feedback at https://nextjs.link/app-feedback
```

Once added, you'll get full access to `/app` directory features, including the new router and data-loadnig strategy.
But beware, even though this is a major version, non of these features are guarantede to hld these APIs long-term.

If you've updated to Next.js 13 and are scratching your head about how to use the `/app` directory, enable this feature.

To keep avoid confusion — caused by conflating Next.js and /app directory features, everything enabled by the experimental flag will be referred to as `/app` director`.

https://beta.nextjs.org/docs/installation

[Beta docs](https://beta.nextjs.org/docs)

## A route by any other name is just a page

Next is brought file-system based routing to React.
It was pretty simple.
Add a module witha default export to `/pages` directory and you have a page!

The `/app` directory adds a completely new routing paradigm.
This new paradigm allows for states and layouts to be represented on the file system as well.
Today, we'll start by adding a simple page.

## Steps

- [beta docs](https://beta.nextjs.org/docs/installation)
- `yarn create next-app --experimental-app`
- app directory has `page`, `layout`, `head` and can include other files like `.css` that dont' turn into pages.
  - only `page` becomes a page
  - maybe screenshot `get started by editing page.tsx`
- let's add a new page. `/about/page.jsx`
  - export your page as the default function

```jsx
import avatar from "./chan-avatar.jpg";

export default function About() {
  return (
    <main>
      <h1>This page appeases my ego.</h1>
    </main>
  );
}
```

- every route director can now hold files specific to that page
  - add an image file
  - import it into the page
  - and present it using next/image
  - i don't have to put this image some globally shared image directory, if it only relates to this page
  - challenge: look around the app and try styling it

```jsx
import avatar from "./chan-avatar.jpg";
import Image from "next/image";

export default function About() {
  return (
    <main>
      <h1>This page appeases my ego.</h1>
      <Image
        src={avatar}
        alt="chantastic's silly face on yellow background"
      />
    </main>
  );
}
```

- styles can be scoped to a page as well
  - note the root `page.module.css` and how its' used inside `/page.module.css`
  - this is CSS modules and it's a really great way to write plain CSS and import them as modules into a JavaScript file
  - when used this way the styles get an additional hash, which limits there scope to the page/component their used in
  - add a `page.module.css` file to style the avatar
  - create a generic classname `.avatar`
  - import it in the about `about/page`
  - check out the resulting dom – guaranteed not to collide with other styles
- Let's link to this page
  - open `/layout.jsx`
  - add a couple anchors to the routes
  - upgrade them to Links.
    - observe how the transitions change. they go from page loads to client-loads which feel much snappier because the browser doesnt have to re-parse the whole dom.
    - pre-fetching? (https://web.dev/route-prefetching-in-nextjs/)
    - maybe touch up with some styles
- the `/app` directory router in Next.js 13 supports nested layouts. These are a godsend and something I wish every framework had.
  - most frameworks treat
- Add dynamic component `/pikachu/[name]/page.jsx` <- still requires `page.jsx`

```jsx
export default function Pokemon({ params }) {
  return (
    <main>
      <h1>Hello {params.name}!</h1>
    </main>
  );
}
```

- fetching data (https://beta.nextjs.org/docs/data-fetching/fetching#asyncawait-in-server-components)
  - `getData`
  - change page to `async`
  - pass name to getData function
  - return json
- You just wrote a server component
  - check network
- Local error handling with `error.js` ()
  - note `reset` second arg (do more research)

```jsx
// pokemon/[name]/error.js
"use client";

import { useEffect } from "react";

export default function Error({ error, reset }) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div>
      <p>Something went wrong!</p>
      <button onClick={() => reset()}>
        Reset error boundary
      </button>
    </div>
  );
}
```

- loading

```jsx
// pokemon/[name]/loading.jsx
export default function Loading() {
  return (
    <main>
      <h1>😵‍💫</h1>
    </main>
  );
}
```

- "use client";
  - note this odd little string. if we poke it, what does it do?
  - https://beta.nextjs.org/docs/rendering/server-and-client-components#convention
  - how to write a client component
  - "i want you to try something for me. try and add a useState to this page component… yeah. you can't and that's weird as a React developer."
  - "i've fallen and i can't get up…dates to work when using setState`
  - adding components in these directories is a really nice upgrade to previous version of routers that required components be put in a directory outside of the `/pages`
  - !!!!!COLOCATION of layouts, states, and components. the new value of the /apps router!
- caching
  - https://beta.nextjs.org/docs/data-fetching/caching
- streaming with suspense boundaries
  - https://beta.nextjs.org/docs/data-fetching/streaming-and-suspense

!!!

- incremental adoption doc: https://beta.nextjs.org/docs/upgrade-guide#migrating-from-pages-to-app
