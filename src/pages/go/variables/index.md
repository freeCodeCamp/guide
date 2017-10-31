# Variable declaration in Golang

## Method 1:

A regular A variable declaration creates one or more variables, binds corresponding identifiers to them, and gives each a type 
and an initial value.

Example:
```
var x int = 1
```
or
```
var x int
```
or
```
var x, y float32 = -1, -2
```

## Method 2: Short variable declarations

It is shorthand for a regular variable declaration with initializer expressions but no types, and use the syntax:
```
x := 1
```
Short variable declarations may appear only inside functions. In some contexts such as the initializers for "if", "for", or 
"switch" statements, they can be used to declare local temporary variables.
