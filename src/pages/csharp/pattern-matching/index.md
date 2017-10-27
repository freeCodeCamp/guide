---
title: Pattern Matching
---

# Pattern Matching

Pattern matching means that you can switch on the type of data you have to execute one or the other statement.

Although pattern matching looks a lot like if/else, it has certain advantages:

- You can do pattern matching on any data type, even your own, whereas if/else you always need primitives to match
- Pattern matching can extract values from your expression

## Example

The following is an example of pattern matching:

```
class Geometry();
class Triangle(int Width, int Height, int Base) : Geometry;
class Rectangle(int Width, int Height) : Geometry;
class Square(int width) : Geometry;
 
Geometry g = new Square(5);
switch (g)
{
    case Triangle(int Width, int Height, int Base):
        WriteLine($"{Width} {Height} {Base}");
        break;
    case Rectangle(int Width, int Height):
        WriteLine($"{Width} {Height}");
        break;
    case Square(int Width):
        WriteLine($"{Width}");
        break;
    default:
        WriteLine("<other>");
        break;
}
```