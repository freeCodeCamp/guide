---
title: Array.prototype.push
---
## Array.prototype.push

The `push()` method adds one or more items to the end of an array and return the new length of the array.

### Syntax

```js
arr.push(item1, item2, ..., itemN);
```

### Examples

```js
const recipe = ["salad", "tomato", "onion"];

recipe.push("cucumber");
// return 4 (length of recipe).

// recipe = ["salad", "tomato", "onion", "cucumber"];

```

#### More Information:
[MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push)

### Basic Information:
This is a method on Array's to add elements on the end of the an array.

`var myStarkFamily = ['John', 'Sansa', 'Brian'];`

### Explanation:
Now I have an array which contains members of Stark family from Game of thrones. But you can see that one of the member is missing.
That is **Arya** and I want to add it.
At this moment I know the length of an Array which is 3.
So I can add it as follows:

`myStarkFamily[3] = 'Arya';`

Yes you can add it this way. But what if you donot know the length of and Array and want to add an element at the end.
Then you do it as follows:

`myStackFamily.push('Arya');`
This returns you the new length of the array i.e. 4 and **Arya** is added to your Stark Family Array.
Hence when you `console.log(myStarkFamily);` Your output is: `['John', 'Sansa', 'Brian', 'Arya'];`

### In which case to use it:
From above explanation it is clear that, you can use it in following case:
1) When you want to add an element at the end of an Array.
2) And you do not know how many elements are there in an array. So you can use push() on the array an pass the value you want to add.
