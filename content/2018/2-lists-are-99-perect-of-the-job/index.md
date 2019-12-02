---
title: 'Day 2: Lists are 99.7% of the job'
date: '2018-12-02T12:00:00.284Z'
---

<div class="measure">

`youtube:https://www.youtube.com/embed/3PAsNymDrv4?listType=playlist&list=PLnc_NxpmOxaPbyq_lEGZKWF7R3BbK3PSZ`

> 99.7% of software development in one requirement:
> A user should be able to view a list of items.
> — [@samccone](https://twitter.com/samccone/status/936665335394168837)

When I found React, my first question was this:

> "WTF is .map()?!"

Every framework I'd used, before React, had a framework-specific solution for rendering lists.

React doesn't give you anything for lists.
It makes you use JavaScript.
That decision lets you render and modify lists with any [native array method](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array).

### Here's what you need to know...

[.map()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map) is a method you can call on any JavaScript array.  
The result of calling [.map()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map) is a new array — leaving your original array unchanged.  
[.map()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map) takes a function as an argument.  
That function is used to transform each item, when creating the new array.  

This map returns a new array with each number incremented by one:

```js
[1, 2, 3].map(number => number + 1);
// => [2, 3, 4]
```

This map returns a new array with each word exclaimed:

```js
["Hey", "Ho", "Let's", "Go"].map(word => `${word}!`)
// => ["Hey!", "Ho!", "Let's!", "Go!"]
```
This map returns a new array with each name wrapped in a React Element:

```js
["Pikachu", "Bulbasaur", "Charmander"].map(
  name => <li>{name}</li>
)
// => [<li>Pikachu</li>, <li>Bulbasaur</li>, <li>Charmander</li>]
```

### You gotta get out of JSX to use JS

You can't just throw JavaScript in JSX.  
You gotta escape it.  
You can escape JavaScript with curly braces — `{}`.  

```jsx
function List(props) {
  return (
    <ul>
      {props.list.map(
        name => <li>{name}</li>
      )}
    </ul>
  )
}
```

### For those new to React:

These are the lessons from last React Holiday.
If this lesson wasn't clear, these lessons might be helpful.

* [Lists are 99% of the job](https://react.holiday/2017/14/)
* [Key your children](https://react.holiday/2017/15/)

Your assignment is to re-implement the Pokemon list with your own fingers and memory.
You got it 💪 

</div>

<iframe src="https://codesandbox.io/embed/l5pjp98lyq" style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;" sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"></iframe>
