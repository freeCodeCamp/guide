---
title: Data Structure, Stack in ES6
---
## What is a Stack?
>A Stack is an abstract data type that serves as a collection of elements, with two principal operations: push, which adds an element to the collection, and pop, which removes the most recently added element that was not yet removed. The order in which elements come off a Stack gives rise to its alternative name, LIFO (for last in, first out). Source [Wikipedia](https://en.wikipedia.org/wiki/Stack_(abstract_data_type)).

# Complexity of Stack
| Access        | Search        | Insertion  | Deletion |
| ------------- |:-------------:| :---------:|---------:|
|  O(n)         |       O(n)    | O(1)       |  O(1)    |


# The Code

```javascript
class Stack { // first we need to create the class Stack
  constructor() {
    this.stack = []; // when the class is invoked the stack array is created by the constructor
  }
  push(value) { // push function pushes the inserted value to the stack
    this.stack.push(value);
  }
  pop() { // pop function returns and deletes the last item
    return this.stack.pop();
  }
  peek() { // peek function returns the last item without deleting it
    return this.stack[this.stack.length - 1];
  }
  length() { // brings back the length of the stack
    return this.stack.length;
  }
  print() { // prints the stack
    console.log(this.stack.join(" "));
  }
  isEmpty() { // returns true if the stack is empty and false if not
    if (this.queue[0] = undefined){
      return false;
    }
      else {
        return true;
      }
  }
}
const stack = new Stack(); // creates stack from the class Stack
stack.push(1); // pushes 1 => [1]
stack.push(2); // pushes 2 => [1,2]
stack.push(3); // pushes 3 => [1,2,3]
stack.print(); // => 1 2 3
console.log('length is 3:', stack.length()); // => 3
console.log('peek is 3:', stack.peek()); // => 3
console.log('pop is 3:', stack.pop()); // => 3
stack.print(); // => 1 2
console.log('pop is 2:', stack.pop());  // => 2
console.log('length is 1:', stack.length()); // => 1
console.log('pop is 1:', stack.pop()); // => 1
stack.print(); // => ''
console.log('peek is undefined:', stack.peek()); // => undefined
console.log('pop is undefined:', stack.pop()); // => undefined
```
