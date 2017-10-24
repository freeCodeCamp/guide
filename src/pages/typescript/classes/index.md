---
title: Classes
---

# Classes

The reason why it's important to have classes in JavaScript as a first class item is that:

1. Classes offer a useful structural abstraction
2. Provides a consistent way for developers to use classes instead of every framework (emberjs,reactjs etc) coming up with their own version.
3. Object Oriented Developers already understand classes.

Finally JavaScript developers can have class. Here we have a basic class called User:

```typescript
class User {
    firstName: string;
    lastName: string;

    constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    displayFullName() {
        console.log(this.firstName + ' ' + this.lastName);
    }
}

let user = new User('John', 'Doe');
```