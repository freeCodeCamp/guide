---
title: Data Types in C
---
# Data Types in C
There are several different ways to store data in C, and they are all unique from each other. The types of data that information can be stored as are called data types. C is much less forgiving about data types than other languages. As a result, it's important to make sure that you understand the existing data types, their abilities, and their limitations.

One quirk of C's data types is that they depend entirely on the hardware that you're running your code on. An `int` on your laptop will be smaller than an `int` on a supercomputer, so knowing the limitations of the hardware you're working on is important. This is also why the data types are defined as being minimums- an `int` value, as you will learn, is at minimum -32767 to 32767: on certain machines, it will be able to store even more values that this.

There are two categories that we can break this into: integers, and floating point numbers. Integers are whole numbers. They can be positive, negative, or zero. Numbers like -321, 497, 19345, and -976812 are all perfectly valid integers, but 4.5 is not because 4.5 is not a whole number.

Floating point numbers are numbers with a decimal. Like integers, -321, 497, 19345, and -976812 are all valid, but now 4.5, 0.0004, -324.984, and other non-whole numbers are valid too.

C allows us to choose between several different options with our data types because they are all stored in different ways on the computer. As a result, it is important to be aware of the abilities and limitations of each data type to choose the right one.

## Integer data types

#### Characters: `char`
`char` holds characters- things like letters, punctuation, and spaces. In a computer, characters are stored as numbers, so `char` holds integer values that represent characters. The actual translation is described by the ASCII standard. <a href='http://www.asciitable.com/' target='_blank' rel='nofollow'>Here's</a> a handy table for looking up that.

The actual size, like all other data types in C, depends on the hardware you're working on. By minimum, it is at least 8 bits, so you will have at least 0 to 127. Alternatively, you can use `signed char` to get at least -128 to 127.

#### Standard Integers: `int`
The amount of memory that a single `int` takes depends on the hardware. However, you can expect an `int` to be at least 16 bits in size. This means that it can store values from -32,768 to 32,767, or more depending on hardware.

Like all of these other data types, there is an `unsigned` variant that can be used. The `unsigned int` can be positive and zero but not negative, so it can store values from 0 to 65,535, or more depending on hardware.

#### Short integers: `short`
This doesn't get used often, but it's good to know that it exists. Like int, it can store -32768 to 32767. Unlike int, however, this is the extent of its ability. Anywhere you can use `short`, you can use `int`.

#### Longer integers: `long`
The `long` data type stores integers like `int`, but gives a wider range of values at the cost of taking more memory. Long stores at least 32 bits, giving it a range of -2,147,483,648 to 2,147,483,647. Alternatively, use `unsigned long` for a range of 0 to 4,294,967,295.

#### Even longer integers: `long long`
The `long long` data type is overkill for just about every application, but C will let you use it anyway. It's capable of storing at least −9,223,372,036,854,775,807 to 9,223,372,036,854,775,807. Alternatively, get even more overkill with `unsigned long long`, which will give you at least 0 to 18,446,744,073,709,551,615.

## Floating point number data types
#### Basic Floating point numbers: `float`
`float` takes at least 32 bits to store, but gives us 6 decimal places from 1.2E-38 to 3.4E+38.

#### Doubles: `double`
`double` takes double the memory of float (so at least 64 bits). In return, double can provide 15 decimal place from 2.3E-308 to 1.7E+308.

#### Getting a wider range of doubles: `long double`
`long double` takes at least 80 bits. As a result, we can get 19 decimal places from 3.4E-4932 to 1.1E+4932.

## Picking the right data type
C makes pick the data type, and makes us be very specific and intentional about the way that we do this. This gives you a lot of power over your code, but it's important to pick the right one.

In general, you should pick the minimum for your task. If you know you'll be counting from 1 to 10, you don't need a long and you don't need a double. If you know that you will never have negative values, look into using the `unsigned` variants of the data types. By providing this functionality rather than doing it automatically, C is able to produce very light and efficient code. However, it's up to you as the programmer to understand the abilities and limitations, and choose accordingly.

# Before you go on...
## A review
* The actual abilities of C data types depend on the hardware. As a result, minimum sizes are defined for the data types.
* Floating point numbers will allow you to have decimals, while integer numbers won't.
* We have some options for our integer values:
 * char, which is designed for characters but stores numbers
 * int, which is the standard integer data type
 * short, which is a less commonly used but still available integer data type
 * long, which gives a wide range of integer values
 * long long, which gives an overkill range of integer values but is still sometimes useful.
* We also have some options for our floating point values:
 * float is the basic floating point value, storing 6 decimal places
 * double takes double the memory and gives 15 decimal places
 * long double takes even more memory and gives 19 decimal places
* Picking the right data type is important and gives the programmer a lot of control over the program at a low level.
