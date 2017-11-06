---
title: Go Variables
---
## Go Variables

# Variable declaration in Golang

## Method 1:

A regular A variable declaration creates one or more variables, binds corresponding identifiers to them, and gives each a type 
and an initial value.

Example:
``` go
var x int = 1
```
or
``` go
var x int
```
or
``` go
var x, y float32 = -1, -2
```

## Method 2: Short variable declarations

It is shorthand for a regular variable declaration with initializer expressions but no types, and use the syntax:
``` go
x := 1
```
Short variable declarations may appear only inside functions. In some contexts such as the initializers for "if", "for", or 
"switch" statements, they can be used to declare local temporary variables.

#### More Information:
<!-- Please add any articles you think might be helpful to read before writing the article -->
* [A Tour of Go](https://tour.golang.org/basics/8)
* [Go By Example](https://gobyexample.com/variables)
* [Golang Book](https://www.golang-book.com/books/intro/4)
* [The Go Programming Language Specification](https://golang.org/ref/spec#Variable_declarations)
