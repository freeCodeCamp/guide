---
title: TypeScript Interfaces
---

# What are interfaces?

Interfaces are a core tenant of Object-Oriented Programming, and are included in many OOP languages, such as Java, PHP, C#. Interfaces basically act as a contract between one object and another, and describe the ways an object can be interacted with, and how it will respond. In most languages, this takes the form of describing the methods of the interface, their arguments, and their return types. Some languages (including Typescript) allow you to specify the properties of the interface implementation as well. Javascript does not have interfaces, but Typescript does!

# How can I use interfaces?

Here's a simple example:

```typescript
interface Describable {
    description: string;

    getDescription(): string;
}
```

This simple interface describes a contract specifying that classes that implement it will have a description property with the type string, and a getDescription method that returns a string. If you try to implement this interface without either of these properties, the compiler will throw an error.

# Why are interfaces helpful?

Interfaces in Typescript are most helpful for library code that describes how another class will interact with the class you are declaring. Angular makes use of this - a great example is the OnInit interface, which mandates that classes that implement it will have an ngOnInit method that returns void. 