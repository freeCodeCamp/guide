# Pointers in C
Pointers are a fundamental part of C language. Without using pointers the C language looses all its power and flexibility. A pointer is a variable that stores the reference to (memory address of) another variable.

##### Using a pointer
```C
int main(){
    int var1;
    int* pvar1;
    var1 = 30;
    pvar1 = &var1;
    printf("Address of var1 is %p \n", pvar1); // prints the memory address of var1 which is stored in pvar1
}
```

##### Accessing through a pointer
You can access the original variable via the pointer by using the dereference operator (*).
```C
int main(){
    int var1;
    int* pvar1;
    var1 = 30;
    pvar1 = &var1;
    *pvar1 = 40;
    printf("Value of var1 is %d \n", var1); // prints the new value of var1
}
```
Note that if we had used pvar = 40 instead of *pvar = 40 we would be changing the value of the pointer itself and not the variable it is pointing to.

##### NULL Pointers
Sometimes you do not have an exact address to be assigned to a pointer. In such cases we assign a NULL value to the pointer. A pointer that is assigned NULL is called a null pointer.
The null pointer is a constant with zero value.
```C
int main(){
    int* pvar1 = NULL;
    printf("Value of pvar1 is %d \n", pvar1); // prints 0
}
```
