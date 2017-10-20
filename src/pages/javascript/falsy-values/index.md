---
title: Falsy Values
---
Something which evaluates to FALSE. There are only five falsy values in JavaScript: `undefined`, `null`, `NaN`, `0`, `""` (empty string), and `false` of course.

So it'll be redundand doing for example

```js
if (myVar === undefined || myVar === "" || myVard === null) {
 console.log("Error");
}

```

Instead you just can do the following.

```js
// if myVar is *Falsy* print the error.
if(!myVar) {
 console.log("Error");
}
```

This will evaluate all the cases where `myVar` is falsy.

See also: <a>**truthy**</a> | <a href='http://james.padolsey.com/javascript/truthy-falsey/' target='_blank' rel='nofollow'>Truthy & Falsey blog post</a>
