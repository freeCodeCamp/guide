---
title: Closures
---

# Closures

A closure is the combination of a function and the lexical environment within which that function was declared. Using closures, a function declared inside another function retains access to the outer function's variables even after the outer function is removed from the execution stack. 

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

```js
function greet(name){
	return function(language){
    	if(language=='esp'){console.log('Holla '+name)}
		else{console.log('Hello '+name)}
	}
}

var languageFunc=greet('James');
var greeting=languageFunc('eng');
console.log(greeting); // prints Hello James
```
In the above example, languageFunc gets assigned a function that is returned from the greet function. greet function is removed from the execution stack but the variable(name) is still holding the memory space. When languageFunc is called, it searched for the variable 'name' in its scope but does not find it, so it chains back to its lexical environment i.e. greet function and finds it in memory.

### More Information:

<a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures' target='_blank' rel='nofollow'>MDN</a>
