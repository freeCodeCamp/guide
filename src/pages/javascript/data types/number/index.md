---
title: number
---

# Numbers
 All numbers in JavaScript are stored in 64-bit format IEEE-754, also known as “double precision”.
 
## Ways to write a number
```javascript 
    let million = 1000000;
    let million = 1e6;  // 1 million, literally: 1 and 6 zeroes
```
thus "e" multiplies the number by 1 with the given zeroes count.
if we talk about small numbers
```javascript
   let ms = 0.000001;
   let ms = 1e-6; // six zeroes to the left from 1
```

## Hex, Binary, and Octal numbers
**Hexadecimal** numbers are widely used in JavaScript to encode characters, represent colors. 
     there exists a shorter way to write them: 0x and then the number.
example:
```javascript
     alert( 0xff ); // 255
     alert( 0xFF ); // 255 (the same, no difference in uppercase and lowercase)
```   
**Binary and octal** numeral systems are rarely used, but also supported using the 0b and 0o prefixes:
```javascript
let a = 0b11111111; // binary form of 255
let b = 0o377; // octal form of 255

alert( a == b ); // true, the same number 255 at both sides
```
