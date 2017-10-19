---
title: Numbers
---
## Numbers

A number is known as a <a href='https://developer.mozilla.org/en-US/docs/Glossary/Primitive' target='_blank'>primitive</a> numeric data type in JavaScript, which means it is not an object and has no methods. In JavaScript, there is only one number type. That is, there is no distinction between an integer number type, a float number type, etc.

JavaScript will automatically determine the data type during execution so you do not need to specify the data type when declaring a number variable.

```js
let num = 1;
typeof num; // returns "number"
```

### Converting strings to numbers

What if you had a number in a string data type and wanted to convert it to a number?

```js
let num = '1';
typeof num; // returns "string"
```

There are multiple ways to accomplish this.

* **Number** in a non-constructor context

  ```js
  let num = '1';
  num = Number(num);
  typeof num; // returns "number"
  ```
* **unary plus** operator

  ```js
  let num = '1';
  +num;
  typeof num; // returns "number"
  ```
* **parseInt()** or **parseFloat()** methods

  ```js
  let num = '1';
  parseInt(num);
  typeof num // returns "number"
  ```
  
  Note that parseInt() only returns integers so if you are using numbers with decimals, use parseFloat() instead.


#### More Information:
<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Grammar_and_types" type="_blank">Data types</a>
<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type" type="_blank">Number data type</a>
<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators#Unary_plus_()" target="_blank">Unary plus</a>



