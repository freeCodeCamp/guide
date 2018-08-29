---
title: Lambda expressions
---
# Lambda expressions

Starting from JDK 8 (Java 8), Java began to support anonymous functions, named Lambda Expressions.
Functional programming is very often used to add event listeners. An example of an event could be clickable buttons and
these events is very commonly used in Java. Let's take a look how we could use it.

<br></br>
## The difference
So how do we code with and without lambda expressions? Maybe there are some situations when we should use it and sometimes not?
Let's check it out.


The interface we'll be using in this case will look like this:
```java
public interface StateChangeListener {
  
  public void onStateChange(State oldState, State newState);
}
```
<sub>[What's an interface?](https://github.com/freeCodeCamp/guides/blob/master/src/pages/java/interfaces/index.md)</sub>

<sub>Fun fact: This interface is called a Functional Interface. [But why?](https://stackoverflow.com/a/36882003)</sub>

<br></br>
### Java 7
Java 8 is one of the newer versions and Lambda expressions have not existed in earlier version of Java, here's
an example of how you could make a similar event listener **without** an lambda expression in Java 7:

Firstly, imagine you have a class called *StateOwner* which can register state event listeners:
```java
public class StateOwner {
  
  public void addStateListener(StateChangeListener listener){
    // your code here ...
  }
}
```

Then, you could add an event listener using an anonymous interface implementation like this:
```java
StateOwner stateOwner = new StateOwner();

stateOwner.addStateListener(new StateChangeListener(){
  
  public void onStateChange(State oldState, State newState){
    // your code here ...
  }
});
```
As you hopefully can see, first a *StateOwner* instance is created. Then an anonymous implementation of the **StateChangeListener**
interface is added as listener on the *StateOwner* instance.

<br></br>
### Java 8
**With** lamda expressions in Java 8 our code would look similar to this:
```java
StateOwner stateOwner = new StateOwner();

stateOwner.addStateListener(
  (oldState, newState) -> System.out.println("State changed! Wohoo!")
);
```

Not sure where the lambda expression is located in the code below? Calm down! This is the whole lambda expression:
```java
(oldState, newState) -> System.out.println("State changed! Wohoo!")
```

<br></br>
## More information about Lambda expressions
Maybe you didn't understand everything or just want to look into this amazing feature even deeper? Here are some pages
that may help you:

[Wikipedia.org - Anonymous function - (with Java mentioned)](https://en.wikipedia.org/wiki/Anonymous_function#Java)

[Wikipedia.org - Anonymous function - Simplified (without Java mentioned)](https://simple.wikipedia.org/wiki/Anonymous_function)

[Jenkov.com](http://tutorials.jenkov.com/java/lambda-expressions.html)

[Oracle.com](http://www.oracle.com/webfolder/technetwork/tutorials/obe/java/Lambda-QuickStart/index.html)

[Oracle.com](http://www.oracle.com/technetwork/articles/java/architect-lambdas-part1-2080972.html)

[Reddit.com](https://www.reddit.com/r/java/comments/1ak1ox/can_someone_explain_lambda/)

