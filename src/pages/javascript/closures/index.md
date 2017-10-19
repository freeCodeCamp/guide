---
title: Closures
---

# Closures

A closure is the combination of a function and the lexical environment within which that function was declared.

```js
function by(propName) {
    return function(a, b) {
        return a[propName] - b[propName];
    }
}

const person1 = {name: 'joe', height: 72};
const person2 = {name: 'rob', height: 70};
const person3 = {name: 'nicholas', height: 66};

const arr_ = [person1, person2, person3];

const arr_sorted = arr_.sort(by('height')); // [ { name: 'nicholas', height: 66 }, { name: 'rob', height: 70 },{ name: 'joe', height: 72 } ]

```

The closure 'remembers' the environment in which it was created.


<b>Making Assynchronous server-side calls </b>

Since functions in Javascript are higher-order functions, meaning they can be passes into or returned from other functions, they can be used as callbacks. Callback functions are hooks that are used to handle events in an unobtrusive manner. Suppose you want to make a request and be notified when you get a response.

```javascript
getJSON('/students',
    (students) => {
        getJSON('/students/grades',
            grades => processGrades(grades),
            error => console.log(error.message)
    )},
    (error) => console.log(error.message)
)
   
```
### Learn more about callbacks
<a href='https://guide.freecodecamp.org/javascript/callback-functions' target='_blank' rel='nofollow'>Callbacks</a>

### More Information:

<a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures' target='_blank' rel='nofollow'>MDN</a>
