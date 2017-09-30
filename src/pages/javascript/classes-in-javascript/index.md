---
title: Classes in JavaScript
---
## Classes in JavaScript

This is a stub. <a href='https://github.com/freecodecamp/guides/tree/master/src/pages/javascript/classes-in-javascript/index.md' target='_blank' rel='nofollow'>Help our community expand it</a>.

<a href='https://github.com/freecodecamp/guides/blob/master/README.md' target='_blank' rel='nofollow'>This quick style guide will help ensure your pull request gets accepted</a>.

<!-- The article goes here, in GitHub-flavored Markdown. Feel free to add YouTube videos, images, and CodePen/JSBin embeds  -->

Classes exist in virtually all languages, including Javascript. At a higher level, classes are merely "special functions" grouped into one parent function. In laymans terms, we put 10 apples (functions) in a bag (class). Classes come in different shapes and sizes, with ES2015/ES6, they can be defined with the "class" keyword (see example 1), which is a much easier way to create classes, however in earlier versions, they can be created using a prototype on function (see example 2). Herein this page will refer to ES2015 as shorthand term "ES6".

### ES2015/ES6 Classes Example

```javascript
class FreeCodeCampExample {
    constructor() {
        console.log('Whenever you call new FreeCodeCampExample, you\'re hitting this function right here!');
    }
    tryMe() {
        console.log('Whenever you call FreeCodeCampExample.tryMe() you\'ll reach this block of code!'); 
    }
}
var ESExample = new FreeCodeCampExample();
ESExample.tryMe(); 
```

This should give your console an output of this:
```
Whenever you call new FreeCodeCampExample, you're hitting this function right here!
Whenever you call FreeCodeCampExample.tryMe() you\'ll reach this block of code!
```

### Classes with Prototypes 

```javascript
var FreeCodeCampExample = function () {
    console.log('Whenever you call new FreeCodeCampExample, you\'re hitting this function right here!');
};
FreeCodeCampExample.prototype.tryMe = function () {
    console.log('Whenever you call FreeCodeCampExample.tryMe() you\'ll reach this block of code!'); 
};
var PTExample = new FreeCodeCampExample();
PTExample.tryMe();
```

This should give your console an output of this:
```
Whenever you call new FreeCodeCampExample, you're hitting this function right here!
Whenever you call FreeCodeCampExample.tryMe() you\'ll reach this block of code!
```

## How ES2015/ES6 classes work

ES6 introduces a lot of new, simpler syntax for creating classes, this is with the introduction of the "class" keyword, allowing you to simply define classes, extend classes and shortern the amount of code needed to create a new class. ES6 is newer, and is not supported on older browsers (IE11, ...etc). 

Classes can be created by two different ways, the first is declaration, the second is using expressions. 

**Declaration Example**
```javascript
class FreeCodeCampExample {
    constructor() {
        console.log('Whenever you call new FreeCodeCampExample, you\'re hitting this function right here!');
    }
    tryMe() {
        console.log('Whenever you call FreeCodeCampExample.tryMe() you\'ll reach this block of code!'); 
    }
}
var ESExample = new FreeCodeCampExample();
ESExample.tryMe(); 
```

**Expression Example**
_Expressions create named or unnamed (anonymous) classes_
```javascript
var FreeCodeCampExample = class {
    constructor() {
        console.log('Unnamed (anonymous) class');
    }
};
```

_Named class example_
```javascript
var FreeCodeCampExample = class FreeCodeCampExample {
    constructor() {
        console.log('Named class');
    }
};
```

### Static Methods in ES6
#### What are Static Methods?
Static methods were introduced in ES6 classes, they allow you to call a function inside of the class without initializing it. In laymans terms, it's like taking an apple (function) out of the bag (class) without opening the bag. This can become extremely useful in some cases when you want to do quick checking/validation of data. 

#### Why would I use them?
Most use cases vary, but let's put a pratical usage example into perspective here. Suppose you run a big company where you need to validate an object has multiple nested properties. One way you can achieve this is by creating a TestFramework class, and putting all your test-cases in them. There is virtually endless use-cases, however it is advised you do not define something as static unless you will have a use for it. It is not best practice to make everything static.

#### TestFramework Example 
In the previous section above we mentioned TestFramework class, which we'll be building here as a proof of concept. This class will contain absolutely static methods, and will not need to be initialized. 
```javascript
class TestFramework {
    static propHasNumberUnits (prop) {
        if ( typeof prop.dataset.numberUnits !== 'undefined' && prop.dataset.numberUnits !== '' ) {
            return true;
        }
        return false;
    }
}

var propTag = document.querySelector('[data-example]'); // <div id="example" data-example="true" data-numerUnits="4.5"></div>

if(TestFramework.prophasNumberUnits(propTag)) {
    console.log('Prop has number units! - Success here');
}
else {
    console.log('Prop does not have number units! - Error here'); 
}
```

### Extending classes with ES6
#### What's this about extending classes?

ES6 allows you to extend classes and create a more object-oriented feel, like other programming languages (PHP, etc.) have. In order to extend another class, there has to be a parent class. In layman terms, I can't put a bag (class1) into another bag (class2) if the other bag is broken (class2 is undefined/not found). 

#### Extending Classes Example
First, let's define our base class as "BaseProvider", like this below:
```javascript
class BaseProvider {
    constructor() {
        this.isJustBaseClass = true; 
    }
    init() {
        console.log('A sample initialization class! Just base class? ' + this.isJustBaseClass);
    }
}
```

Now, if we initialize this quickly, we can see it's output here: 
```javascript
var BaseProviderTest = new BaseProvider();
baseProviderTest.init(); // "A sample initialization class! Just base class? true"
```

We see it tells us we're just the base class, now let's create our sub-class to extend it, and change "isJustBaseClass" to false, and then call init() to see how it shapes up now.

```javascript
class JuniorBaseProvider extends BaseProvider {
    constructor() {
        super(); // This is needed when calling any method previously defined in the parent class
        this.isJustBaseClass = false;
    }
}
```

Initialization time!

```javascript
var Junior = new JuniorBaseProvider();
Junior.init(); // "A sample initalizaiton class! Just base class? false" 
```

**Why did this happen?**

When we created our constructor in base provider, we sent the property "isJustBaseClass" as true, however when we extended the BaseProvider class, we set a new constructor with the same property "isJustBaseClass" as false. Then when calling init on the sub-class, the property of isJustBaseClass had changed to false, so false was displayed instead of true.

#### More Information:
<!-- Please add any articles you think might be helpful to read before writing the article -->

[Mozilla Class Documentation ~ ES6](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes) 
