---
title: IDE and Printing different text 
---
# Introduction to an IDE and printing different text : 

* In the last article, some download links for software required for programming . Software like this is known as an IDE.
 **IDE stands for Integrated Development Environment**

## IDEs mainly consist of 3 kinds of software :

**1 Editor :** A slightly modified text editor to make coding easy. An example of an editor for coding is Notepad++.

**2 Debugger :** Software that helps you find errors in your program , and resolve them before execution. Imagine FaceBook crashing on loading an application or a game crashing all of a ssudden. To prevent faulty execution of a program, the debugger is a programmer's best friend.

**3 Compiler :** A compiler is that part of the computer which converts your high level program code to simple machine code : 0s & 1s ; so that a computer understands the commands and executes them. From now on , we will be uding the word **compiler** frequently.

*Q : Try searching for an IDE on Google and run your first program on it . Check the output*

Now, install the IDE and try changing the text from the program in the last article.

## Namespaces
### Basics
Namespaces in C++ allow for functions and even classes to possess the same names, yet exist within different contexts. Consider the standard namespace, denoted as `std`. Within this namespace classes such as `string` and `vector` exist, among many others.

In order to access such classes the namespace must be specified, like so: `std::string`. This syntax may become tiresome, so it is possible to make use of the `using namespace` directive, like so: `using namespace std;`. This tells the compiler that we are implicitly using the `std` namespace, which allows us to declare strings via `string myString = "Hello!";` as opposed to `std::string myString = "Hello";`.

### Aliasing
Namespace aliases can prove to be useful when we have deep nesting of namespaces.

Consider the `std::chrono::high_resolution_clock` namespace that must be prefixed to all `high_resolution_clock` classes/functions. Instead of having to type all of these characters ad nauseum, we can instead alias the namespace, like so: `using hrc = std::chrono::high_resolution_clock;` and in doing so, the namespace `hrc` is equivalent to typing `std::chrono::high_resolution_clock;`.

Now, if we want to obtain the current time we can type: `hrc::now();` instead of `std::chrono::high_resolution_clock::now();`. Awesome!

### Notes
It is generally not considered good practice to make use of the using directive within header files. The reason being is that headers imported into other files will then make use of these aliases, which can result in clashes and unexpected complications. Limiting the use of aliases and the `using` directive to within function bodies is the best practice, but even that can be omitted unless needed.

### Changing text on C++

* To change text ,change what's typed in the `""` after `std::cout << `

A sample program :

```cpp

#include <iostream>

int main()
{
    std::cout << "I Love freeCodeCamp ! ";
}
```

The above code returns an error because at line 2 , we have used a colon(:) instead of a semicolon(;)
So, let's debug the error :

```cpp
#include <iostream>

int main()
{
    std::cout << "I Love freeCodeCamp ! ";
    return 0;
}

```

Note that now the program runs perfectly.
The output will be : `I Love freeCodeCamp !`

### Now , let's change the text to something else like this :

```cpp
    std::cout << "Hello World!\t I love freeCodeCamp!";
```

The output will be something different this time :

```
Hello World!	 I love freeCodeCamp!
```

 If you realised , the `\t` command created a _tab space_ between the two texts . This is one kind of special command in C++. These special commands are known as *Escape Sequences* .
 They are used to print certain special characters a compiler cannot display.

#### Useful escape sequences -

* `\'` to print a single inverted comma
* `\"` to print a double inverted comma
* `\n` to print on a new line
* `\t` for a horizontal tab
* `\f` for a new page
* `\\` for a backslash
* `\?` for a question mark

##### Now, let's try printing numbers and special characters with some escape sequences :

```cpp
    std::cout << "40158 \t 236708 ! \n \\ @ \?" << std::endl;
```

The output changes to :
```
40158 	 236708 ! 
 \ @ ?
```

##### Let's try some other ways of printing

```cpp
    std::cout << "1+2" << std::endl;
    std::cout << 1+2 << std::endl;
```

Output :

* The first output statement is `1+2`
* The second output statement is `3`

This is because we did not add the inverted commas for the second print statement and so, the compiler added the nuumbers before printing them.

#### Comments  :

* Comments are an important feature of many programming languages . They allow the programmer to take notes for self help, and won't affect the running of the program .

**The differentt types of comments and Syntax of a comment** :
  1 `//`  ~ _Single Line Comments_  : The length of these comments is 1 line (the line it is typed on) .
  2 `/* */` ~ _Multi Line Comments_ : These comments can take up a space of more than one line.

#### Example of using comments -

 ```cpp

     std::cout << "Hello Comment" << std::endl; //std::cout << "Hello Comment"<<endl; , Single Line Comment.
    /* This is an example of a multi line comment. No output is generated for this .
    I now end the comment.  :) */
 ```
 The output will be :

`Hello Comment`

 As you may notice, the comments are ignored during program execution and do not show up on checking the output of the program.

<a href='https://repl.it/L4ox' target='_blank' rel='nofollow'>A summation of all the print statements used in this article. Feel free to tweak around with the code ! :) </a>



