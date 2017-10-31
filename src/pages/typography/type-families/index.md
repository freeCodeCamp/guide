---
title: Type Families
---
## Type Families

In computer science, a type family associates data types with other data types, using a type-level function defined by an open-ended collection of valid instances of input types and the corresponding output types.

Type families are a feature of some type systems that allow partial functions between types to be defined by pattern matching. This is in contrast to data type constructors, which define injective functions from all types of a particular kind to a new set of types, and type synonyms (a.k.a. typedef), which define functions from all types of a particular kind to another existing set of types using a single case.

Type families and type classes are closely related: normal type classes define partial functions from types to a collection of named values by pattern matching on the input types, while type families define partial functions from types to types by pattern matching on the input types. In fact, in many uses of type families there is a single type class which logically contains both values and types associated with each instance. A type family declared inside a type class is called an associated type.

Programming languages with support for type families or similar features include Haskell (with a common language extension), Standard ML (through its module system), Scala (under the name "abstract types"), and C++ (through use of typedefs in templates).

### Variations
The TypeFamilies extension in the Glasgow Haskell Compiler supports both type synonym families and data families. Type synonym families are the more flexible (but harder to type-check) form, permitting the types in the codomain of the type function to be any type whatsoever with the appropriate kind. Data families, on the other hand, restrict the codomain by requiring each instance to define a new type constructor for the function's result. This ensures that the function is injective, allowing clients' contexts to deconstruct the type family and obtain the original argument type. 

### Comparison with functional dependencies
Functional dependencies are another type system feature that have similar uses to associated types. While an associated type adds a named type function mapping the enclosing type class's parameters to another type, a functional dependency lists the result type as another parameter of the type class and adds a constraint between the type parameters (e.g. "parameter a uniquely determines parameter b", written a -> b). The most common uses of functional dependencies can be directly converted to associated types and vice versa.

Type families are regarded as being generally easier to type-check than functional dependencies. Another advantage of associated types over functional dependencies is that the latter requires clients using the type class to state all of the dependent types in their contexts, including ones they do not use; since associated types do not require this, adding another associated type to the class requires updating only the class's instances, while clients can remain unchanged. The main advantages of functional dependencies over type families are in their added flexibility in handling a few unusual cases.

<!-- The article goes here, in GitHub-flavored Markdown. Feel free to add YouTube videos, images, and CodePen/JSBin embeds  -->

#### More Information:
<!-- Please add any articles you think might be helpful to read before writing the article -->
Source: <a href="https://en.wikipedia.org/wiki/Type_family">click here</a>

