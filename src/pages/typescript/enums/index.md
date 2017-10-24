---
title: Enums
---

# Enums

Enums allow us to define a set of named constants. TypeScript provides both numeric and string-based enums.

### Numeric Enums

```typescript
enum Color {Red = 1, Green, Blue, Yellow};
```
The numbers are auto-incremented. Green = 2, Blue = 3, Yellow = 4. 
Also, you can define the numbers at declaration: 

```typescript
enum Color {Red = 2, Green = 56, Blue = 122, Yellow = 5667}; 
```
NOTE: The intializers can be omitted if the number values are not important. 

Using an enum is simple, access the member as a property off the enum.

```typescript
enum Color {Red = 1, Green, Blue, Yellow}; 

console.log(`The value of yellow is ${Color.Yellow}`);
// 'The value of yellow is 4'
``` 

Also, you can access the string name by using bracket notation and its value as an index:
```typescript
enum Color {Red = 1, Green, Blue, Yellow}; 

console.log(`The string of 4 is ${Color[4]}`);
// 'The string of 4 is Yellow'
``` 


### String Enums

String enums must be a constant-initialized with a string literal or string member:


```typescript
enum Color {Red = "RED", Green = "GREEN", Blue = "BLUE", Yellow = "YELLOW"}; 
``` 

Differences include runtime differences and debugging purposes. 
The number values do not give clear meaning while a string literal is better for debugging.

This guide covers the basics of enums. If you wish to go further, see the <a href='http://www.typescriptlang.org/docs/handbook/enums.html' target='_blank' rel='nofollow'>TypeScript handbook from Microsoft.</a>
