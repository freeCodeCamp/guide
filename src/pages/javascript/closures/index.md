---
title: Closures
---

# Closures

A closure is the combination of a function and the lexical environment (scope) within which that function was declared. Closures are a fundamental and powerful property of Javascript. This article discusses the 'how' and 'why' about Closures:

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

The closure 'remembers' the lexical environment (scope) in which it was created.

At this point, one may be wondering, "What is a lexical environment?" or "What is scope?". Fortunately, the internet contains many helpful definitions for the nascent developer:

```
A Lexical Environment is a specification type used to define the association of Identifiers to specific variables and functions based upon the lexical nesting structure of ECMAScript code. A Lexical Environment consists of an Environment Record and a possibly null reference to an outer Lexical Environment. Usually a Lexical Environment is associated with some specific syntactic structure of ECMAScript code such as a FunctionDeclaration, a BlockStatement, or a Catch clause of a TryStatement and a new Lexical Environment is created each time such code is evaluated. — ECMAScript-262/6.0
```

That clearly-stated definition may not have been completely unhelpful. Consider also the following example of the Turducken:
```python
#  Use the Turducken as an example of Lexical Environment / Scope

globalenv = "oven"

def buildTurducken():
    #Lexical Environment: buildTurducken
    fooditem = "Turkey"
    def insertIntoTurkey():
        #Lexical Environment: insertIntoTurkey
        fooditem = "Duck"
        def insertIntoDuck():
            #Lexical Environment: insertIntoDuck
            fooditem = "Chicken"
            return "which contains the " + fooditem + ". The Turducken is complete and can now go into the " + globalenv
        return "contains the " + fooditem + " " + insertIntoDuck()
    return "The " + fooditem + " " + insertIntoTurkey()

turducken =  buildTurducken() + ". The turducken is complete and can now go into the " + globalenv
```
Each function has its own lexical environment and execution context. Understanding this concept of lexical environment / scope is important in understanding how closures work. 

Now that we have explored 'the How', let's look at 'the Why':
Great! But why does any of this matter? Closures are powerful and useful because they enact this concept of lexical environments to return functions that operate on data which only exists within a function's given lexical environment. Developers have more control over their variables and functions because using closures ensures that respective methods or respective data are only called / modified when desired.

### More Information:

<a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures' target='_blank' rel='nofollow'>MDN</a>
<br />
<a href='https://medium.freecodecamp.org/lets-learn-javascript-closures-66feb44f6a44' target='_blank' rel='nofollow'>Javascript Closures</a>
