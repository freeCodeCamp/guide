---
title: Generics
---

## Generics

Developers can use `Generics` to specify type constrains for classes, instance members, static members, and functions.

### What do Generics do?

Essentially, they serve as placeholders for types that you can use in multiple places across your application.

### What problem do Generics solve?

Let's say you wanted to ensure that types for a class or a function are of the same value, this is where generics come in.

##### Functions

```typescript
function printMessage(arg: any): any {
  return arg;
}

// typescript won't complain because the argument type and return type aren't being typed properly
const myMessage: string = printMessage(1);

```

As you can see from above, passing in `any` for the argument type in the function, as well as the return type is not ideal.


```typescript
// updated example
function printMessage<T>(arg: T): T {
  return arg;
}

// typescript complains because the variable type and the return type of the function don't match
const myMessage: string = printMessage(1);

// resolve the issue by making sure both types match each other
const myMessage: number = printMessage(1);

```

Including `<T>` with the function tells TypeScript that it is a generic, and passing that around as a reference will make TypeScript aware that the data types should be the same.

##### Classes

```typescript
class Person {
  fullName: string;
  
  constructor(fullName: string) {
    this.fullName = fullName;
  }
  
  getFullName() {
    return 'My name is ' + this.fullName;
  }
}

class Guest extends Person {};

let guest = new Guest('abc');

function getUser<T>(user: T): T {
  return user;
}

// foo will be of type 'guest' because it's being passed in as the argument
const foo = getUser(guest);

```
