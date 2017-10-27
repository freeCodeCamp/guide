---
title: Chai
---

# Chai


### What is Chai?
Chai is an assertion library. An assertion library is a tool that programmers use to make sure their programs work. It lets you **assert** what should happen in your program: “If I click the Login button, I should be redirected to the user profile page.”


### Why use Chai?
When you’re coding a big application (like a photo sharing website), it’s easy to write new code that accidentally breaks some code you wrote before. That’s why it’s handy to create tests for your app. This way, when you write new code, you can just run your tests and find out immediately if anything breaks.


You could just test your app by clicking on everything yourself, without writing code to test for you. That would mean every time you code a new feature (like the ability to upload photos) you make sure all the old features still work (logging in, resetting your password, etc). But that takes time, especially if you’ve got a big app.


You could also write your tests without using an assertion library. That might look like this:


```javascript

const sum = addNumbers(2, 5);

if (sum !== 7) {
  console.log(`Test failed: expected 7, got ${sum}`);
}

```


But one advantage of using an assertion library like Chai instead of writing your own tests in vanilla JavaScript is that Chai lets you write them in natural language, like this:


```javascript
const sum = addNumbers(2, 5);

expect(sum).to.equal(7);

```


Even not knowing much about Chai, that test is nice and readable. This format also allows you to avoid long chains of `if` statements, which can be hard to read.


### Okay, how do you use it?
There are three ways to use Chai. The Chai documentation calls these “interfaces.” They are `should`, `expect`, and `assert`, and they look like this:


```javascript

const favoriteFood = 'cheese pizza';
const disgustingFood = 'squid';
const listOfFoods = ['turkey sandwich', 'tomato soup', 'mashed potatoes'];

// Should

favoriteFood.should.equal('cheese pizza');
disgustingFood.should.be.a('string');
favoriteFood.should.not.be('squid');
listOfFoods.should.be.an('array').with.a.lengthOf('3');

// Expect

expect(favoriteFood).to.equal('cheese pizza');
expect(disgustingFood).to.be.a('string');
expect(favoriteFood).to.not.be('squid');
expect(listOfFoods).to.be.an('array').with.a.lengthOf('3');

// Assert

assert.equal(favoriteFood, 'cheese pizza');
assert.typeOf(disgustingFood, 'string');
assert.notEqual(favoriteFood, 'squid');
assert.typeOf(listOfFoods, 'array');
assert.lengthOf(listOfFoods, 3);

```


These three interfaces are meant to support different styles of test-writing. The main reason to choose one style over another is that you like the syntax.


Once you’ve chosen a style to use, you just need to write an assertion. Every assertion contains two essential parts: an **interface** and an **evaluation function**. Those two are enough to create an `assert` statement, but to create `expect` or `should` statements, you also need a third part to connect the interface and the evaluation: **language chains**.


The interface: `should`, `expect`, or `assert`
An evaluation function: `equal`, `include`, `property`, etc
Language chains: `to`, `be`, `is`, `that`, `has`, `have`, etc


The **interface** and **evaluation function** just take two values and compare them. That’s it.


interface(value): `expect(milkshake)`
evaluation(value): `include('ice cream')`


**Language chains** are just meant to make your assertions readable. You can add them in any order between an interface and an evaluation function to form a natural sentence. The `assert` syntax is the only interface that doesn’t use linking words, so its statements don’t look like natural language. This is because it’s meant to look like the syntax of another assertion library that comes packaged with Node.js.


### Putting the pieces together
The last thing you need to know to use Chai is how to actually include it in your JavaScript file. This is Chai in action:


```javascript

/* 
// First, load chai into your file, and store the interface you want to use 
// (in this case, 'expect') in a variable. This 'require' syntax only works 
// in the browser if you're using a tool like Webpack that understands it.
// Otherwise, 'require' only works in Node.js.
*/

const expect = require('chai').expect;

// Then, write some code.

const heroes = ['Wonder Woman', 'Batman', 'Black Widow', 'Wolverine'];
function weNeedAHero(index) {
  return heroes[index];
}

// Finally, use Chai to test your code.

expect(weNeedAHero(2)).to.equal('Black Widow');

```


So that’s Chai in a nutshell! But how do you take Chai from testing simple functions to testing an actual app?


You combine it with a test runner (like [Mocha](https://mochajs.org/)), which takes your Chai assertions and organizes them into tests, which validate a whole function or feature. You can also use it with a browser automation tool (like [Nightmare](https://github.com/segmentio/nightmare)), which opens your app in a browser and does whatever you tell it to (click links, go to URLs, submit forms), and then run Chai assertions to make sure everything looks good.


### Other resources
Check out these links to learn more about Chai and software testing:
[Chai API](http://chaijs.com/api/): the keywords and functions you can use to write assertions
[TDD and BDD](http://joshldavis.com/2013/05/27/difference-between-tdd-and-bdd/): two different testing styles that Chai caters to