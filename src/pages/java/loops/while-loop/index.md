---
title: While Loop
---
# While Loop

The Java while loop is used to iterate a part of the program several times. If the number of iteration is not fixed, it is recommended to use while loop.

Syntax:

while(condition){  
//code to be executed  
}  
flowchart of java while loop

**Note**: For the `while` loop to start executing, you'd require the condition to be true. However, to exit the loop you must do something as given below (otherwise the loop will execute forever. Practically, it will run till the JVM runs out of memory).

## Example

public class WhileExample {  
public static void main(String[] args) {  
    int i=1;  
    while(i<=10){  
        System.out.println(i);  
    i++;  
    }  
}  
}  
Output:

1
2
3
4
5
6
7
8
9
10


![:rocket:](//forum.freecodecamp.com/images/emoji/emoji_one/rocket.png?v=2 ":rocket:") <a href='https://repl.it/CJYj/0' target='_blank' rel='nofollow'>Run Code</a>
