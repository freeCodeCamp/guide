# Header Files

Header files are used to store related declarations and help us structure source code into multiple files. It separates the interface form the implementation - where the header outlines what a class can do and the cpp file outlines how it will do it. Header files are typically contain the suffix `.h` and cpp files `.cpp`

Header files:
* should contain only logically related declarations  
* should generally not include definitions (with the exception of class definitions, some `const` objects and inline functions)
* should always be enclosed by header guards 


```c++
// add.h file
#ifndef ADD_H
#define ADD_H
#include "some_other.h"

int do_something(a, b);

#endif
```

```c++
// add.cpp file
#include "add.h"

int do_something(a, b) {
    a = a * 2;
    b = b * a;
    return a + b;
}

int main() {
    int x = do_something(1, 3);
    std::cout << x << '\n';
    return 0;
}

#endif
```

The `#ifndef` basically means 'if this file has not already been looked at, look at it. If it has been looked at, then it will skip everything in the file. So if you include it twice, then when it is first included the compiler will see what the add function is. It will also try to include the `some_other.h` file IF that hasn't been looked at already.

A header filer __can__ contain:
* class declarations and definitions
* template declarations and definitions
* inlne function definitions
* variable (data) declarations

A header file __cannot__ contain:
* variable (data) definitions
* function definitions