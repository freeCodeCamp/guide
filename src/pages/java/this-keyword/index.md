---
title: This
---

## this
There can be a lot of usage of java this keyword. In java, this is a reference variable that refers to the current object.

***Example:***
```java
//Java code for using 'this' keyword to
//refer current class instance variables
class Test
{
    int a;
    int b;
     
    // Parameterized constructor
    Test(int a, int b)
    {
        this.a = a;
        this.b = b;
    }
 
    void display()
    {
        //Displaying value of variables a and b
        System.out.println("a = " + a + "  b = " + b);
    }
 
    public static void main(String[] args)
    {
        Test object = new Test(10, 20);
        object.display();
    }
}
```

