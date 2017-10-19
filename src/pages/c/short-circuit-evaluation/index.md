# Short-Circuit Evaluation

The Short-Circuit evaluation consist in check or execute the second argument only if the first argument is not enough to determine the value of the expression. 

You can do a short-circuit evaluation with && and || operators.


## Example with && operator:

```
  canOpenFile(filename) && openFile(filename); // If you can open the file then open it.
```

The example above is equivalent to:

```
  if ( canOpenFile(filename) ) {
    openFile(filename);
  }
```

## Example with || operator:

```
  isServerOn || startServer(); // If the server is not on then start it.
 ```
 The example above is equivalent to:
 
 ```
  if ( !isServerOn ) {
    startServer();
  }
 ```
 
 ## Keep it all together in real example
 
 ```
#include <stdio.h>

int main(int argc, char **argv) {
  
  // Get first argument passed via terminal.
  char *name = argv[1];

  // If name is not passed via terminal then print message and then request the name
  name || printf("Please, give me your name: ") && scanf("%s", &name); 
  
  printf("Hello %s\n", &name);
}
```
