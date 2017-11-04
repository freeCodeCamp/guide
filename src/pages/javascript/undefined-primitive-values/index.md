---
title: Undefined Primitive Value
---
A primitive value automatically assigned to variables that have just been declared or to formal arguments for which there are no actual arguments.

<a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined' target='_blank' rel='nofollow'>MDN</a>

It is important to know a few details about the inbuilt primitives in Javascript ES6

null==null // TRUE
undefined==undefined //TRUE
but
NaN==NaN //FALSE
This can be explained due to the fact that even though an NaN value is returned, it may be returned due to different conditions,
example - Number('foo')  --> NaN
          Number('bar')  --> NaN
