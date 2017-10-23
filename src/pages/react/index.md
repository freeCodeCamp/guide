---
title: React
---
## React

React is a JavaScript library for building user interfaces.

It's declarative: React uses a declarative paradigm that makes it easier to reason about your application. It's efficient: React computes the minimal set of changes necessary to keep your DOM up-to-date. And it's flexible: React works with the libraries and frameworks that you already know.

To describe component's DOM representations, React uses an XML-like syntax called JSX. JSX is not required to use React, but it makes code more readable, and writing it feels like writing HTML. A simple transform is included with React that allows converting JSX into native JavaScript for browsers to digest.

For more information head to [https://reactjs.org/](https://reactjs.org/)

Why learn React?

1.	React involves Composition that is lots of components wrapping up the functionalities into an encapsulated container.
Many popular websites use React implementing the MVC architectural pattern. Facebook (Partially), Instagram (Completely), Khan Academy (Partially), Codecademy (Partially), New York Times (Partially), Yahoo Mail (Completely), Dropbox's new photo and video gallery app Carousel (Completely) are the popular websites known to be using React.
How these large applications are build using React? The simple answer is by building small applications or components.
Example
        var component2  = function() {
          return (
              <div></div>
             )
        }
        var component3  = function() {
          return (
              <div></div>
             )
        }
        var component1  = function() {
          return (
              <div>
            <component2/>
            <component3/>
            </div>
             )
        }
        <component1/>

2.	React is Declarative for most part in which we are  concerned more with What to do rather than How to do a specific task.  Declarative programming is a programming paradigm that expresses the logic of a computation without describing its control flow.
Declarative programming  comes with  certain advantages such as reduced side effects(occurs when we modify any state or mutating something or making an API request), minimizing mutability(as lot of is abstracted), enhanced readability, lesser bugs.

3.	Unidirectional dataflow. UI in react is actually the function of the state that means as the state updates it updates the UI as well. So our UI progresses as the state changes.
