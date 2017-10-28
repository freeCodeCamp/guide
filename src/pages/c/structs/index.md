title: Structs
---
# Structs in C
Structs, or structures, allow you to define your own data types. The idea is similar to classes in Object Oriented Languages like Java.

Syntax:
```
struct struct_name {
    type1 field1;
    type2 field2;
    .
    .
    .
};
```
Declaration:
```
struct struct_name struct_instance;
```

Accessing data members of a struct: To access the data members of a struct instance we use the member access operator `.`.
```
    struct_instance.field1 = xyz; 
```
## Example
```C
#include <stdio.h>

int main(void) {
    struct Date {
        int month;
        int day;
        int year;
    };
    
    struct Date today;
    today.month = 10;
    today.day = 27;
    today.year = 2017;
    return 0;
}
```
