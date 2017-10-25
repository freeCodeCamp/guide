---
title: Orthogonality
---
## Orthogonality

Orthogonality is a term borrowed from mathematics.  For example, two lines are orthogonal if they are perpendicular.  In software design, two components are orthogonal if a change in one does not affect the other.

Applying this concept to classes or other sections of code results in less coupling.  To be orthogonal two classes cannot depend on each others implementation.  They also cannot share global data.  Changing the internals of one class does not affect the other class.  Components should be independent and have only a single responsibility. 

Consider a method that reads a list of numbers from a file and returns them in sorted order.  Now the requirements change and the numbers are in a database.  Modifying this method to access the database would cause client code to change.  If this were two different methods, then a new source would not affect the sorting method.  Only the client code would have to know the source of the numbers.

#### More Information:

[Wikipedia article](https://en.wikipedia.org/wiki/Orthogonality_(programming))


