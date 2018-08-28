# Result

A Result is useful when you have logic that may "fail". For example, parsing a String into an Int may fail. What if the string is filled with the letter B? In cases like this, we want a function with this type:

```elm
String.toInt : String -> Result String Int
```

This means that String.toInt will take in a string value and start processing the string. If it cannot be turned into an integer, we provide a String error message. If it can be turned into an integer, we return that Int. So the Result String Int type is saying, "my errors are strings and my successes are integers."

To make this as concrete as possible, let's see the actual definition of Result. It is actually pretty similar to the Maybe type, but it has two type variables:

```elm
type Result error value
  = Err error
  | Ok value
```
