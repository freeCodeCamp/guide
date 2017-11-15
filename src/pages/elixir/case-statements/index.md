---
title: Case Statements
---
## Case Statements
A `case` statement in Elixir is similar to an `if-else` statement. These statements allow us to compare any value against a number of patterns until a matching one is found.

### Syntax:

    case {'hello', 'world'} do
        {'foo', 'bar'} ->
          "This will not match"
        {'hello', x} ->
          "This will match 'hello', and then bind x to the 'world' value"
        _ ->
          "This will match any value, similar to 'default' in other languages"
    end

In the above scenario, the second clause will match and bind 'world' to x. 

### ^ operator
The `^` operator allows pattern matching against an existing variable.

    x = 10
    case 1 do
        ^x ->
          "1 and 10 do not match"
        _ ->
          "This will match"
    end

### More Information:
<a href='https://elixir-lang.org/getting-started/case-cond-and-if.html' target='_blank' rel='nofollow'>Official documentation for Elixir case statements</a> 
