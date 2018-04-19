---
title: Reference variables
---

## Reference variables


Reference variables let you pass references to variables to and from functions. A reference variable is similar to a `const` pointer, with one important difference being that reference variables must be initialized where they are declared.

The `&` operator is used to declare a reference variable:

```cpp
int highscore;
int & rhighscore = highscore; // rhighscore is a reference to the highscore variable
```

When you pass a reference variable to a function, the function has access to the actual variable from the calling scope. The function is not working with its own local copy that disappears once the function returns:

```cpp
int highscore;
int & rhighscore = highscore; // rhighscore is a reference to the highscore variable

void incrementhighscore_ref(int& rhighscore);
incrementhighscore_ref(int& rhighscore) {
	rhighscore++;
}

void incrementhighscore_val(int highscore);
incrementhighscore_val(int highscore) {
	highscore++;
}

incrementhighscore_ref(rhighscore); // Increments the highscore variable in the top level scope
incrementhighscore_val(highscore); // Only increments its own temporary local copy of highscore


```
