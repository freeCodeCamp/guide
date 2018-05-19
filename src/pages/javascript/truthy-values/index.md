---
title: Truthy Value
---
A **truthy** value is a value that translates to **true** when evaluated in a _Boolean_ context.

All values are **truthy** unless they are defined as **falsy** (i.e. except for `false`, `0`, `""`, `null`, `undefined` and `NaN`).

Some interesting **truthy** values are:

'0' (a string containing a single zero)
'false' (a string containing the text “false”)
[] (an empty array)
{} (an empty object)
function(){} (an “empty” function)

A single value can therefore be used within conditions, e.g.

if (value) {
  // value is truthy
}
else {
  // value is falsy
  // it could be false, 0, '', null, undefined or NaN
}

See also: <a>falsy</a> | <a href='https://developer.mozilla.org/en-US/docs/Glossary/Truthy' target='_blank' rel='nofollow'>MDN</a>
