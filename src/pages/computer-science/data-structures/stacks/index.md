Stack Data Structure

Stack is a linear data structure which follows a particular order in which the operations are performed. The order may be LIFO(Last In First Out) or FILO(First In Last Out).

Mainly the following three basic operations are performed in the stack:

Push: Adds an item in the stack. If the stack is full, then it is said to be an Overflow condition.
Pop: Removes an item from the stack. The items are popped in the reversed order in which they are pushed. If the stack is empty, then it is said to be an Underflow condition.
Peek or Top: Returns top element of stack.
isEmpty: Returns true if stack is empty, else fals.

How to understand a stack practically?
There are many real life examples of stack. Consider the simple example of plates stacked over one another in canteen. The plate which is at the top is the first one to be removed, i.e. the plate which has been placed at the bottommost position remains in the stack for the longest period of time. So, it can be simply seen to follow LIFO/FILO order.

Time Complexities of operations on stack:

push(), pop(), esEmpty() and peek() all take O(1) time. We do not run any loop in any of these operations.

Applications of stack:

>Balancing of symbols
>Infix to Postfix /Prefix conversion
>Redo-undo features at many places like editors, photoshop.
>Forward and backward feature in web browsers
>Used in many algorithms like Tower of Hanoi, tree traversals, stock span problem, histogram problem.
>Other applications can be Backtracking, Knight tour problem, rat in a maze, N queen problem and sudoku solver
Implementation:

There are two ways to implement a stack:

>Using array
>Using linked list
