---
title: Switch Case
---

# Switch Case

The switch statement is like a set of `if statements`.

It allows for a variable or expression to be tested against other values, or "cases". If the expression in the parentheses is of the same data type and is equal to a given case, it will execute the corresponding statement. If none of the cases match the given expression, it will simply execute the default statement, where given.

Note that a `break` statement is used to exit the switch statement. If no break statement is given, the program will "fall through" to the subsequent cases and continue to execute all other following statements in the switch.

## Example
```
#include <stdio.h>
 
int main () {

   /* local variable definition */
   char grade;
   
   printf("Please enter your grade: ");
   scanf("%c", &grade);

   switch(grade) {
      case 'A' :
         printf("Excellent!\n");
         break;
      case 'B' :
      case 'C' :
         printf("Well done\n");
         break;
      case 'D' :
         printf("You passed\n");
         break;
      case 'F' :
         printf("Better try again\n");
         break;
      default :
         printf("Invalid grade\n");
   }
   
   printf("Your grade is  %c\n", grade );
 
   return 0;
}
```

## Output:
```
-> Please enter your grade: B
-> Well done
-> Your grade is B
```


