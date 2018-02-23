---
title: Free Code Camp JavaScript Style Guide
---
<small>or How Cool People Write JavaScript.</small>

## Indent

Always Use Two Spaces
No hard tabs, ever. No really, just don't do it.

## Curly Braces

Always use curly braces when using the keywords `if/else/else if`. This prevents a lot of ambiguity and will prevent syntax errors in some edge cases.

Bad:

```js
if (foo) bar();
```

Good:

```js
if (foo) { bar(); }
```

## Curly Braces Everywhere!

Space After `function` Keyword, Except in Anonymous Functions

Good:

```js
function foo() {
}

var foo = function() {
  // ...
};
```

Bad:

```js
function foo ()
{
  // ...
}

var foo = function () {
  // ...
};
```

## Comments

*   no inline comments
*   single space after `//`
*   Do not use multiline comment `/* */`, we are reserving these for use with jsDocs.

## Keywords

*   space immediately after if, else, while, etc
*   opening curly brace should always be on the same line.

Good:

```js
if (true) {
 // do the thing
}
```

Bad:

```js
if(true)
{
 // do the thing
}
```

## Else

Avoid else and "end early". In JavaScript there is often a lot of indenting (usually when dealing with async code and named "callback hell"). Anything you can do reduce the number of indents should be done. One thing is to <a href='http://blog.timoxley.com/post/47041269194/avoid-else-return-early' target='_blank' rel='nofollow'>avoid the else</a> keyword.

This also has the side effect of making code cleaner and easier to read.

Bad:

```js
someAsynFunc(function(err, data) {
  if (err) {
    callback(err);
  } else {
    // do stuff with data
  }
});
```

Good:

```js
someAsynFunc(function(err, data) {
  if (err) {
    return callback(err);
  }
  // do stuff with data
  // saves one indent
});
```

## Long Strings

Long multiline strings should be in one of two forms:

```js
var longString =
  ‘long strings should ‘ +
  ‘be in this form, with the ‘ +
  ‘operator ending the line’;

var foo = 'bar';

var longString = [
  'long strings with variables such as ',
  foo,
  'should ',
  'be in this form, an array of strings ',
  'that are joined with the join array instance method',
].join('');
```

...more to come
