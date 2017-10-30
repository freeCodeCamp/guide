---
title: C#
---
## C#

C Sharp, more commonly referred to as "C#", is a general-purpose, object-oriented programming language. C# was developed by Anders Hejlsberg and his development team at Microsoft and is currently on version 7.0.

C# has its roots in the family of C languages. It inherits most of its feature from C, C++, and Java. For this reason, programmers familiar with C/C++/Java may be able to get up to speed with C# in a shorter timespan.

C# is an object-oriented language while also providing support for component-oriented programming.

#### Classes and Objects
Classes allow us to model everyday objects in the world around us in software. You can create custom classes to represent just about anything. Just like a noun is a person, place or thing in language, so too, a classes represents objects.

When you write C# code, typically it is because you need a program that DOES something useful. In the case of a business need, you follow requirements that the business needs. Say your business comes to you asks you for an electronic database of books. They need to be able to store book titles, authors, compute statistics, like the number of checkouts in a given month, or a monthly average. The requirements describe the program that needs to be developed. How do you write a program for the given requirements? Generally, we use classes to create abstractions for the different nouns that we need to work with. A noun such as a book, author, or title. 

An important concept in C# is that the class definition is used to create instances of objects. You can think of it like a blueprint for creating instances of objects. The class definition allows the creation of objects that store a reference to that object. For example, say we want to create a new book object. The line of code looks like this: <br>

<code>
Book book = new Book();
</code><br>

This creates a new book object that we can use to manipulate data and store it in a database. The variable, book, is actually a reference type of Book (with a capital B). We can use methods available in the class definition with that variable, book, such as AddTitle() or AddAuthor() etc.

#### Features of C# include:
1) Automatic Garbage Collection
2) Exceptional Handling
3) Type-safety
4) Versioning
5) Delegates
6) Properties
7) LINQ (Language-Integrated Query) and Lambda Expressions
8) Generics
9) Indexers

#### New Features Added on C# 7.0:
1) Deconstructors
2) New syntax to work with Tuples
3) Pattern Matching with Is Expressions
4) Local Functions
5) Return by Reference
6) Out Variables
7) Literal improvements
8) Generalized Async Return Types
9) More Expresion-Bodied Members
10) Throw Expressions

You can use C# to create Windows client applications, XML Web services, distributed components, client-server applications, database applications, and much more.

#### More Information:

* <a href='https://docs.microsoft.com/en-us/dotnet/csharp/getting-started/introduction-to-the-csharp-language-and-the-net-framework' target='_blank' rel='nofollow'>Introduction to C#</a>
* <a href='https://www.microsoft.com/net/tutorials/csharp/getting-started' target='_blank' rel='nofollow'>C# Tutorials</a>
* <a href='https://docs.microsoft.com/en-us/dotnet/csharp/' target='_blank' rel='nofollow'>Official C# Documentation</a>
* <a href='https://msdn.microsoft.com/en-us/magazine/mt790184.aspx' target='_blank' rel='nofollow'>New Features in C# 7.0</a>
