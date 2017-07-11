---
title: "Java Docs: Access Modifiers"
parent: "java"
---

# Java Access Modifiers

Ok, so if `modelS` has all the same properties, I should be able to access `name` or `manufacturerName` right?

    System.out.println(modelS.name);

Results in :

    Main.java:13: error: name has private access in Car
            System.out.println(modelS.name);
                                     ^
    1 error

Why? Notice we had mentioned `private` before the variable `name` in class `Car`. This marks the variable as `private` to the class which means that the variable cannot be modified or accessed from another class, even if an object of the class is instantiated. So, unless you provide a public `setter` method or any other `public` method to access the variable, there is no way it's visible to the outside world.

There are other kinds of access modifiers such as public, protected, default etc.
