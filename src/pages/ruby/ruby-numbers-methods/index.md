---
title: Ruby Number Methods
---
Ruby provides a variety of built-in methods you may use on numbers. The following is an incomplete list of [integer](https://ruby-doc.org/core-2.2.0/Integer.html) and [float](https://ruby-doc.org/core-2.2.0/Float.html#method-i-ceil) methods.

## [Even](https://ruby-doc.org/core-2.2.0/Integer.html#method-i-even-3F):

Use `.even?` to check whether or not an [**integer**](https://ruby-doc.org/core-2.2.0/Integer.html) is even. Returns a `true` or `false` **boolean**.
```Ruby
    15.even? #=> false
    4.even?  #=> true
```
## [Odd](https://ruby-doc.org/core-2.2.0/Integer.html#method-i-odd-3F):

Use `.odd?` to check whether or not an [**integer**](https://ruby-doc.org/core-2.2.0/Integer.html) is odd. Returns a `true` or `false` **boolean**.
```Ruby
    15.odd? #=> true
    4.odd?  #=> false
```

## [Ceil](https://ruby-doc.org/core-2.2.0/Float.html#method-i-ceil):

The `.ceil` method rounds [**floats**](https://ruby-doc.org/core-2.2.0/Float.html#method-i-ceil) **up** to the nearest number. Returns an [**integer**](https://ruby-doc.org/core-2.2.0/Integer.html).
```Ruby
    8.3.ceil #=> 9
    6.7.ceil #=> 7
```

## [Floor](https://ruby-doc.org/core-2.2.0/Float.html#method-i-floor):

The `.floor` method rounds [**floats**](https://ruby-doc.org/core-2.2.0/Float.html#method-i-ceil) **down** to the nearest number. Returns an [**integer**](https://ruby-doc.org/core-2.2.0/Integer.html).
```Ruby
    8.3.floor #=> 8
    6.7.floor #=> 6
```

## [Next](https://ruby-doc.org/core-2.2.0/Integer.html#method-i-next):

Use `.next` to return the next consecutive [**integer**](https://ruby-doc.org/core-2.2.0/Integer.html).
```Ruby
    15.next #=> 16
    2.next  #=> 3
    -4.next #=> -3
```

## [To String](https://ruby-doc.org/core-2.4.2/Object.html#method-i-to_s):

Using `.to_s` on a number ([**integer**](https://ruby-doc.org/core-2.2.0/Integer.html), [**floats**](https://ruby-doc.org/core-2.2.0/Float.html#method-i-ceil), etc.) returns a [string](https://ruby-doc.org/core-2.2.0/String.html) of that number.
```Ruby
    15.to_s  #=> "15"
    3.4.to_s #=> "3.4"
```

## [Greatest Common Denominator](https://ruby-doc.org/core-2.2.0/Integer.html#method-i-gcd):

The `.gcd` method provides the greatest common divisor (always positive) of two numbers. Returns an [**integer**](https://ruby-doc.org/core-2.2.0/Integer.html).
```Ruby
    15.gcd(5) #=> 5
    3.gcd(-7) #=> 1
```
