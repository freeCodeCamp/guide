---
title: Data Structure, Queue in ES6
---
## What is a Queue?
>A Queue is a particular kind of abstract data type or collection in which the entities in the collection are kept in order and >the principal operations are the addition of entities to the rear terminal position, known as enqueue, and removal of entities >from the front terminal position, known as dequeue. This makes the Queue a First-In-First-Out (FIFO) data structure. In a FIFO >data structure, the first element added to the Queue will be the first one to be removed. Source [Wikipedia]
>(https://en.wikipedia.org/wiki/Queue_(abstract_data_type)).

# Complexity of Queue
| Access        | Search        | Insertion  | Deletion |
| ------------- |:-------------:| :---------:|---------:|
| (O)n          |       (O)n    | (O)1       |  (O)n    |


# The Code

```javascript
class Queue { // first we create the class Queue
  constructor() {
    this.queue = []; // once the class is invoked the queue array will be created
  }

  enqueue(value) { // pushed the entered value in to the queue
    this.queue.push(value);
  }

  dequeue() { // deletes and returns the first element of the queue 
    return this.queue.shift();
  }

  peek() { // just return the first element of the queue
    return this.queue[0];
  }

  length() { // returns the length of the queue
    return this.queue.length;
  }

  print() { // prints the whole queue to the console 
    console.log(this.queue.join(' '));
  }
  isEmpty() { // returns 0 if empty and 1 if not
    if (this.queue[0] = undefined){
      return false;
    }
      else {
        return true;
      }
  }
}

const queue = new Queue(); // create new queue from Queue class
queue.enqueue(1); // add 1 => [1]
queue.enqueue(2); // add 2 => [1,2]
queue.enqueue(3); // add 3 => [1,2,3]
isEmpty(); // checks if empty returns false 
queue.print(); // => 1 2 3
console.log('length is 3:', queue.length()); // => 3
console.log('peek is 1:', queue.peek()); // => 3
console.log('dequeue is 1:', queue.dequeue()); // => 1
queue.print(); // => 2 3
console.log('dequeue is 2:', queue.dequeue());  // => 2
console.log('length is 1:', queue.length()); // => 1
console.log('dequeue is 3:', queue.dequeue()); // => 3
queue.print(); // => ''
console.log('peek is undefined:', queue.peek()); // => undefined
console.log('dequeue is undefined:', queue.dequeue()); // => undefined
```
