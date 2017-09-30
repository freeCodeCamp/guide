---
title: Classes in JavaScript
---
## Classes in JavaScript

<!-- The article goes here, in GitHub-flavored Markdown. Feel free to add YouTube videos, images, and CodePen/JSBin embeds  -->
It is important to note that there no classes in javsacript. We use the <a href="https://www.youtube.com/watch?v=YkoelSTUy7A&list=PL0zVEGEvSaeHBZFy6Q8731rcwk0Gtuxub&index=3">prototypal nature</a> of javasacript to simulate classes and perform other class like operations like inheritance, polymomrphism etc.

To come directly to the point, we will take a simple use case as shown below and write class in javascript in different ways.

	var p = new Person('James','Anderson');
	p.log() // 'I am James Bond'
	p.worth = 250000
	p.worth // I am worth 250000
	

## Using Class keyword

class keyword was introduced in ECMAScript 2015. Below is an example of a simple class with getters and setters. class is a suntactic sugar over the default prototypal way of creating classes.

	class Person {
		constructor(firstName,lastName) {
			this._firstName = firstName;
			this._lastName = lastName;
		}

		log() {
			console.log('I am ',this._firstName,this._lastName);
		}

		set worth(val) {
			this._worth = val;
		}

		get worth() {
			console.log('I am worth',this._worth);
		}

	}

Refer to <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes">Mdn</a> for detailed information on class keyword.


## Using function with methods added to prototypes:

The code below shows how we can create a class using function and <a href="http://javascriptissexy.com/javascript-prototype-in-plain-detailed-language/">prototypes</a>.

	function Person(firstName,lastName) {
		this._firstName = firstName;
		this._lastName = lastName;
	}

	Person.prototype.log = function() {
		console.log('I am ',this._firstName,this._lastName);
	}
	Object.defineProperty(Person.prototype,'worth',{
		set:function(val) {
			this._worth = val;
		},
		get:function() {
			console.log('I am worth',this._worth);
		}
	})

Prototypes can be added as below too. But note that javascript follows a prototypal inheritance chain. By doing this you would loose the chain of inheritance from were it could have inherited other properties.
Visit <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain">here</a> for more information on prototypal inheritance

	Person.prototype = {
		log:function() {
			console.log('I am ',this._firstName,this._lastName);
		}
		set worth(val) {
			this._worth = val;
		}

		get worth() {
			console.log('I am worth',this._worth)
		}

	}

## Using functions with methods defined internally

Here we add the class properties directly inside function rather then as a prototype.

	function Person(firstName,lastName) {
		this._firstName = firstName;
		this._lastName = lastName;

		this.log = function(){
			console.log('I am ',this._firstName,this._lastName);
		}
	}
	Object.defineProperty(Person.prototype,'worth',{
		set:function(val) {
			this._worth = val;
		},
		get:function() {
			console.log('I am worth',this._worth);
		}
	})


At this point usually there are two basic doubts
1. Whats the difference between adding methods to prototype and adding methods directly in the function?

Adding methods to prototype is effecient. When you attach the method to object’s prototype, then only one version of the method exists. However when you attach methods to object instances, then each instance will have it’s own copy of the method.

2. Should i use classes or use functions?

Class is just an abstraction over the original functional approach of creating classes.
Mattias Peter Johanssen has done a great job in giving a detail descirption on Object creation and classes in general. Click <a href="https://www.youtube.com/watch?v=YkoelSTUy7A&list=PL0zVEGEvSaeHBZFy6Q8731rcwk0Gtuxub&index=3">here</a> to go through the playlist to understand in depth Object creation in javascript.
