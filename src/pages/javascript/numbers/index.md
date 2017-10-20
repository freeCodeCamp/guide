---
title: Numbers
---
## Numbers

```javascript  
let n = 123;
n = 12.345;
```

The `number` type serves both for integer and floating point numbers.
There are many operations for numbers, e.g. multiplication `*`, division `/`, addition `+`, subtraction `-` and so on.
Besides regular numbers, there are so-called “special numeric values” which also belong to that type: `Infinity`, `-Infinity` and `NaN`.

- `Infinity` represents the mathematical Infinity ∞. It is a special value that’s greater than any number.
We can get it as a result of division by zero:

```javascript
alert( 1 / 0 ); // Infinity
```

Or just mention it in the code directly:

```javascript
alert( Infinity ); // Infinity
```

- `NaN` represents a computational error. It is a result of an incorrect or an undefined mathematical operation, for instance:

```javascript
alert( "not a number" / 2 ); // NaN, such division is erroneous
```

`NaN` is sticky. Any further operation on `NaN` would give `NaN`:

```javascript
alert( "not a number" / 2 + 5 ); // NaN
```

So, if there’s `NaN` somewhere in a mathematical expression, it propagates to the whole result.

>**Mathematical operations are safe**
>Doing maths is safe in JavaScript. We can do anything: divide by zero, treat non-numeric strings as numbers, etc.
>The script will never stop with a fatal error (“die”). At worst we’ll get NaN as the result.

Special numeric values formally belong to the “number” type. Of course they are not numbers in a common sense of this word.

For more information on numbers: <a href='https://javascript.info/types#a-number' target='_blank' rel='nofollow'>Numbers</a>
