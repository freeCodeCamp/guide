---
title: Stacks
---

# Stacks

A stack is a collection based on First-In-Last-Out. To initialize a Stack specify which object type will be collected in the stack as shown below.

```java
Stack<String> myStringStack = new Stack<>();
```

The .push() method adds an element to the tail of the stack.

```java
myStringStack.push("This");
myStringStack.push("is");
myStringStack.push("a");
myStringStack.push("String");
myStringStack.push("stack");
```
After running the code above myStringStack contains 5 elements in the following order ["This","Is","a","String","stack"]. The String "stack" is the tail of the stack.

The .peek() method returns the tail of the stack but does not modify the stack.

```java
String tailOfStack = myStringStack.peek();
```

The value of the String variable tailOfStack above is "stack" and myStringStack still contains ["This","Is","a","String","stack"].

The .pop() method returns the tail of the stack <b>and</b> removes it.

```java
String myPoppedString = myStringStack.pop();
```
The value of string variable myPoppedString above is "stack" and myStringStack now contains ["This","Is","a","String"].




