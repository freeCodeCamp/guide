---
title: Stacks
---
## Stacks

Stacks is a First In Last Out (FILO) Data Structure. It is a linear data structure.

You can imagine a stack as the way plates were organized in buffet restaurant. You can only pick the plate at the top otherwise the stack will collapse. Generally, the last item to be inserted will be removed first. 

Some basics operations of stack are:
1. Push - Inserts an item at the top of the stack.
2. Pop - Removes an item at the top of the stack.
3. isEmpty - Check wether the stack is empty or not
4. Size - Return the number of items in the stack
(All the operations can be done in O(1) time)

Implementation of a stack is possible using either arrays or linked lists. The following is a simple array implementation of the stack data structure with its most common operations.

```C++
//Stack implementation using array in C++
//You can also include<stack> and then use the C++ STL Library stack class.

#include <bits/stdc++.h>

using namespace std;

class Stack {
    int t;
    int arr[MaxN];
public:
    Stack() {
        t = 0;
    }
    int size() {
        return t;
    }
    bool isEmpty() {
        return t < 1;
    }
    int top() {
        return arr[t];
    }
    void push(int x) {
        if (++t >= MaxN) {
            cout << "Stack is full" << '\n';
            return;
        }
        arr[t] = x;
    }
    void pop() {
        arr[t--] = 0;
    }
};

int main() {
    Stack st;

    st.push(4);
    st.push(3);
    st.push(5);
    while (!st.isEmpty()) {
        cout << st.size() << ' ' << st.top() << '\n';
        st.pop();
    }
    return 0;
}
```

#### Applications

* Turn recursion into loop.
* Redo-Undo features.
* Sudoku solver
* Depth First Search.
* Tree traversals
* Infix expression -> Prefix/Postfix expresstion



#### More Information:
<!-- Please add any articles you think might be helpful to read before writing the article -->
* <a href='http://www.geeksforgeeks.org/stack-data-structure/' target='_blank' rel='nofollow'>More Info on Stacks - GeeksForGeeks</a>


