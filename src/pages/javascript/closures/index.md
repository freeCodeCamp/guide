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

### Private variables and methods

Closures can also be used to encapsulate private data/methods. Take a look at this example:

```javascript
const bankAccount = (initialBalance) => {
  const balance = initialBalance;

  return {
    getBalance: function() {
      return balance;
    },
    deposit: function(amount) {
      balance += amount;
      return balance;
    },
  };
};

const account = bankAccount(100);

account.getBalance(); // 100
account.deposit(10); // 110
```

In this example, we won't be able to access `balance` from anywhere outside of the `bankAccount` function, which means we've just created a private variable. Where's the closure? Well, think about what `bankAccount()` is returning. It actually returns an Object with  a bunch of functions inside it, and yet when we call `account.getBalance()`, the function is able to "remember" its initial reference to `balance`. That is the power of the closure, where a function "remembers" its lexical scope (compile time scope), even when the function is executed outside that lexical scope.

### More Information:

<a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures' target='_blank' rel='nofollow'>MDN</a>
