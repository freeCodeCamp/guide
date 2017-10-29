---
title: Python Code Blocks and Indentation
---

### Python Code Blocks and Indentation

Leading whitespace (spaces and tabs) at the beginning of a line of code is used to compute the indentation level of the line.

Indentation is an integral part of Python - unlike other languages where indentation is utilised mostly for enhancing the readability, Python depends on indentation for determining the level and grouping of statements. The indentation levels of consecutive lines are used to generate INDENT and DEDENT tokens, using a stack, for interpretation.

Cross-platform compatibility note: because of the nature of text editors on non-UNIX platforms, it is unwise to use a mixture of spaces and tabs for the indentation in a single source file. It should also be noted that different platforms may explicitly limit the maximum indentation level.

## Usage Example

Here is an example of a correctly (though confusingly) indented piece of Python code:

```py
def perm(l):
        # Compute the list of all permutations of l
    if len(l) <= 1:
                  return [l]
    r = []
    for i in range(len(l)):
             s = l[:i] + l[i+1:]
             p = perm(s)
             for x in p:
              r.append(l[i:i+1] + x)
    return r
```

The following example shows various indentation errors:

```py
 def perm(l):                       # error: first line indented
for i in range(len(l)):             # error: not indented
    s = l[:i] + l[i+1:]
        p = perm(l[:i] + l[i+1:])   # error: unexpected indent
        for x in p:
                r.append(l[i:i+1] + x)
            return r                # error: inconsistent dedent
```


## More Information

<a href='https://docs.python.org/3/reference/lexical_analysis.html#indentation' target='_blank' rel='nofollow'>Python 3: Indentation</a>

