---
title: String Join Method
---
## String Join Method

The `string.join()` method joins items from an iterable, using the string as a separator between each item. The items in the iterable must themselves be strings.

It is quite common to call `join()` on an empty string, which results in the items being joined with no separator.

Example

```
>>> list_of_fruit = ['apples', 'pears', 'oranges', 'bananas']
>>> shopping_list = ', '.join(list_of_fruit)
>>> print(shopping_list)
'apples, pears, oranges, bananas'
>>> ''.join(list_of_fruit)
'applespearsorangesbananas'
```

Alternatively, it is possible to simply join strings using the plus operator:

```
>>> 'Hello, ' + 'World!'
'Hello, World!'
```

#### More Information:

String methods [documentation](https://docs.python.org/3/library/stdtypes.html#string-methods)
