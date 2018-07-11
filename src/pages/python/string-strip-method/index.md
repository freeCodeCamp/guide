---
title: String Strip Method
---
## String Strip Method

There are three options for stripping characters from a string in Python, `lstrip()`, `rstrip()` and `strip()`.

If parameters are not passed to these functions, then they will remove whitespace characters by default.

* `strip` will remove characters from **both** sides of the string
* `lstrip` will only remove characters from the **left** side of the string
* `rstrip` will only remove characters from the **right** side of the string

Example:

```
>>> string = '   Hello, World!    '
>>> strip_beginning = string.lstrip()
>>> strip_beginning
'Hello, World!    '
>>> strip_end = string.rstrip()
>>> strip_end
'   Hello, World!'
>>> strip_both = string.strip()
>>> strip_both
'Hello, World!'
```

An optional argument can be provided as a string containing all characters you wish to strip.

```
>>> url = 'www.example.com/'
>>> url.strip('w./')
'example.com'

>>> example = '00000This is a string!00000'
>>> example.strip('0')
'This is a string!'
```

#### More Information:
<!-- Please add any articles you think might be helpful to read before writing the article -->

String methods <a href='https://docs.python.org/3/library/stdtypes.html#string-methods' target='_blank' rel='nofollow'>documentation</a>.
