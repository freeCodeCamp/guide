---
title: Array.prototype.push
---
## Array.prototype.push

This is a method on Arrays to add elements on the end of the an array.

```js
var myStarkFamily = ['John', 'Sansa', 'Brian'];
```

### Explanation:
Now I have an array which contains members of the Stark family from Game of Thrones. But you can see that one of the members is missing.
That member is **Arya** and I want to add them to the array.
At this moment I know the length of the array is 3, so I can add it as follows:

```js
myStarkFamily[3] = 'Arya';
```

When you know the length of the array, this is a suitable way to add elements to the end of the array, but there is an easier way even when you don't know the length of the array, Array.push()!
```js
myStarkFamily.push('Arya');
```

In this case myStarkFamily is the array to add an element to and Arya is element to add.

Now **Arya** is added to your myStarkFamily array!

Now you can use `console.log(myStarkFamily);` and your output is: `['John', 'Sansa', 'Brian', 'Arya'];` Hooray! The family is complete.

### In which case to use it:
Array.push is very useful when you want to add an element to the end of an array, especially when you don't know the length of that array. Additionally, Array.push is generally considered a best/standard practice for adding elements to the end of an array.
