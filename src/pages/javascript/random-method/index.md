---
title: Random Method
---
## Random Method

JavaScript has an excellent built in method for producing random numbers. It is Math.random(). When Math.random is executed it produces
a random number that can be anywhere between 0 and 1. The 0 is included and 1 is excluded. To get a random number between a larger range multiply the result of Math.random by a number.

```javascript
Math.random() * 10; // This expression produces a number between 0 and 10 ( excluding the 10 )
```

Other methods can be used to produce a more specific number like an integer. Math.floor() can be used to do this.

```javascript
Math.floor( Math.random() * 10 ) + 1;
```

In the example above, Math.floor is used to round down the result of Math.random() * 10. 1 is added to the end of the result to show how a
minimum integer can be achieved as well.

#### More Information:
<!-- Please add any articles you think might be helpful to read before writing the article -->
[MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random)


