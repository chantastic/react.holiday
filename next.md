---
- + Replace the legacy root API's callback argument
- + Use new root API alongsied legacy root API
- + Conditionally render with legacy root API or new root API
- + Opt in to automatic batching with createRoot
- - Remove unstalbe_batchedUpdates Calls
- + Opt-out of Automatic batching with ReactDOM.flushSync
- (extra content) Handle Class Component setState edge-case with ReactDOM.flushSync
- Stay up-to-date on React with the working group

- "suspensify"
- startTransition
- useTransition
- useTransition/isPending
---

Did you know that `ReactDOM.render` takes a callback?
It does! Or, it did. In React 18 it's being removed.

With v17's _legacy root API_, we could call a function after a component was mounted or updated.

```jsx
ReactDOM.render(<App />, rootNode, () => console.log("Component rendered."));
```

Unfortunately, new features like partial hydration and progressive server-side rendering make the timing of this function confusing.
So, the _new root API_ doesn't take a render callback.

There are two recommended strategies for replacing this API. Let's cover the first.

This approach is quite simple. You can call `requestIdleCallback` or `setTimeout` directly after `render()`. Your callback will execute as soon as `render` yields.

```js
ReactDOM.createRoot(rootElement).render(<App />, rootElement);
setTimeout(() => console.log("Component rendered."));
```

Note that `requestIdleCallback` isn't available in Safari.
So, `setTimeout` might be the best default.

Tomorrow we'll tackle the second — more invasive — option.

🐦 [chantastic](https://chan.dev/twitter)

---

---

⚛️🎄 #8: Replace the legacy render callback, pt 2

Yesterday we learned a simple way to replace React 17's render callback.
Today I want to cover another recommendation that is more invasive.

This approach is neat because it provides your callback with a reference to the rendered element — something not possible with the _legacy root API_.

But it involves modifying our component to take a `callback` prop and apply it as a ref.

```jsx
function App({ callback }) {
  return <div ref={callback}>…</div>;
}

ReactDOM.createRoot(rootElement).render(
  <App callback={(ref) => console.log("renderered", ref)} />
);
```

This approach requires that we change our components. This can be especially invasive if our application mounts multiple root-level components.

So, I'd avoid it unless you have a good use for the returned ref.

While not recommended by the React core team, I explored 3 additional render callback alternatives with the [Lunch Dev](https://chan.dev/discord) crew.
[Check out the stream replay on YouTube](https://www.youtube.com/watch?v=_6fbpugYAdI&t=1687s) for additional options that are less invasive.

🐦 [chantastic](https://chan.dev/twitter)

---

---

React 18 comes with a host of great performance improvements.
Most most noteable among them is _automatic batching_.

In short, automatic batching makes the `useState` hook faster and more consistent.

---

---

When we update to the _new root API_ (`createRoot`), we get performance improvements out-of-the-box.

Neat!

Automatic batching is a performance improvement that reduces `useState` re-renders.

Imagine an event handler that updates two pieces of state, `count` and `isOdd`.

```js
function handleClick() {
  updateCount((count) => count + 1);
  updateIsOdd((isOdd) => !isOdd);
  // only one re-render
}
```

These state updates are batched and result in one re-render. But that changes if we call those updater functions outside of this function (think asynchronous `fetch`).

When we call updater functions outside of handler functions, we lose batching. Look at this slight alteration below where we wrap updater functions in a setTimeout.

These updates will **not** be batched.

```js
function handleClick() {
    setTimeout(() =>
      updateCount(count => count + 1);
      updateIsOdd(isOdd => !isOdd);
    , 0)
    // one re-render per update
}
```

This is both a permormance issue _and_ and expectation problem.

Fortunately, React 18 fixes this.
Now, `useState` updater functions are automatically batched — no matter where they are called.

🐦 [chantastic](https://chan.dev/twitter)

P.S.

Because React 18 automatically batches these updates, you can safely remove any uses of `unstalbe_batchedUpdates`. These are now a no-op.
