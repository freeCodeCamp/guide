# Maybe

It is best to just start with the definition of Maybe. It is a union type just like in all the examples here. It is defined like this:

```elm
> type Maybe a = Nothing | Just a

> Nothing
Nothing : Maybe a

> Just
<function> : a -> Maybe a

> Just "hello"
Just "hello" : Maybe String

> Just 1.618
Just 1.618 : Maybe Float
```

If you want to have a Maybe value, you have to use the Nothing or Just constructors to create it. This means that to deal with the data, you have to use a case expression. This means the compiler can ensure that you have definitely covered both possibilities!

There are two major cases where you will see Maybe values.
