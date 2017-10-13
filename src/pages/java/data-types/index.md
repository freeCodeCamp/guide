---
title: Java Docs Data Types
---
# Java Data-Types

Java is a strongly typed language. This means that, in Java, each data type has its own strict definition. There are no implicit data type conversions when any conflicts occur between the data types. Any change in data types should be explicitly declared by the programmer.

Java defines 8 simple data types : `byte`, `short`, `int`, `long`, `char`, `float`, `double` and `boolean`.

They are divided into the following categories:

*   Integers
*   Floating Point Numbers
*   Characters
*   Boolean Type

The details of each of the data types is given below :

## Integers:

These are of four types: `byte`, `short`, `int`, `long`. It is important to note that these are signed positive and negative values. Signed integers are stored in a computer using <a href='http://www.ele.uri.edu/courses/ele447/proj_pages/divid/twos.html' target='_blank' rel='nofollow'>2's complement</a>. It consist both negative and positive values but in different formats like `(-1 to -128)` or `(0 to +127)`. An unsigned integer can hold a larger positive value, and no negative value like `(0 to 255)`. Unlike C++ there is no unsigned integer in Java.

### byte:

Byte data type is an 8-bit signed two's complement integer.

    Wrapper Class: Byte

    Minimum value: -128 (-2^7)

    Maximum value: 127 (2^7 -1)

    Default value: 0

    Example: byte a = 10 , byte b = -50

### short:

Short data type is a 16-bit signed two's complement integer.

    Wrapper Class: Short

    Minimum value: -32,768 (-2^15)

    Maximum value: 32,767 (2^15 -1)

    Default value: 0.

    Example: short s = 10, short r = -1000

### int:

int data type is a 32-bit signed two's complement integer. It is generally used as the default data type for integral values unless there is a concern about memory.

    Wrapper Class: Integer

    Minimum value: (-2^31)

    Maximum value: (2^31 -1)

    The default value: 0.

    Example: int a = 50000, int b = -20

### long:

Long data type is a 64-bit signed two's complement integer.

    Wrapper Class: Long

    Minimum value: (-2^63)

    Maximum value: (2^63 -1)

    Default value: 0L.

    Example: long a = 100000L, long b = -600000L; 

    By default all integer type variable is "int". So long num=600851475143  will give an error.
    But it can be specified as long by appending the suffix L (or l)

## Floating­ Point​:

These are also called real numbers and are used for expressions involving fractional precision. These are of two types: `float`, `double`. Float is actually avoided in case of precise data such as currency or research data.

### float:

float data type is a single-precision 32-bit <a href='http://steve.hollasch.net/cgindex/coding/ieeefloat.html' target='_blank' rel='nofollow'>IEEE 754 floating point</a>.

    Wrapper Class: Float

    Float is mainly used to save memory in large arrays of floating point numbers.

    Default value: 0.0f.

    Example: float f1 = 24.5f

    The default data type of floating-point number is double. So float f = 24.5 will introduce an error.
    However, we can append the suffix F (or f) to designate the data type as float.

### double:

double data type is a double-precision 64-bit IEEE 754 floating point.

    Wrapper Class: Double

    This data type is generally used as the default data type for decimal values.

    Default value: 0.0d.

    Example: double d1 = 123.400778

## Character:

We use this data type to store characters. This is not the same as the char in C/C++. Java uses a `UNICODE`, internationally accepted character set. Char in Java is 16­bits long while that in C/C++ is 8­bits.

    Wrapper Class: Character

    Minimum value: '\u0000' (or 0).

    Maximum value: '\uffff' (or 65,535).

    Example: char letterA ='a'

## Boolean:

This is used for storing logical values. A boolean type can have a value of either true or false. This type is generally returned by relational operators.

    There are only two possible values: true and false.

    Wrapper Class: Boolean

    This data type is used for simple flags that track true/false conditions.

    Default value is false.

    Example: boolean b = true, boolean b1 = 1;

## Reference Data Types:

Apart from primitive data types there are reference variables created using constructors of different classes. Reference variables are used for any class as well as array, String, Scanner, Random, Die etc. Reference variables are initialised using the new keyword.

Example :

```java
class Box{

    int length, breadth, height;

    public Box(){
        length=5;
        breadth=3;
        height=2;
    }
}

class demo{

    public static void main(String args[]) {
        Box box1 = new Box();                //box1 is the reference variable  
        char[] arr = new char[10];           //arr is the reference variable
    }
}
```