## If Elif Else Statements

The `if`/`elif`/`else` structure is a common way to control the flow of a program, allowing you to execute specific blocks of code depending on the value of some data. If the condition following the keyword `if` evaluates as `true`, the block of code will execute:

```
x = 5

if x > 4:
  print("The condition was true!") #this statement executes
```

You can optionally add an `else` response that will execute if the condition is `false`:

```
y = 3

if y > 4:
  print("I won't print!") #this statement does not execute
else:
  print("The condition wasn't true!") #this statement executes
```

*Note that there is no condition following the `else` keyword - it catches all situations where the condition was `false`*

Multiple conditions can be checked by including one or more `elif` checks after your initial `if` statement:

```
z = 7

if z > 8:
  print("I won't print!") #this statement does not execute
elif z > 5:
  print("I will!") #this statement will execute
elif z > 6:
  print("I also won't print!") #this statement does not execute
else:
  print("Neither will I!") #this statement does not execute
```

*Note only the first condition that evaluates as `true` will execute. Even though `z > 6` is `true`, the `if/elif/else` block terminates after the first true condition. This means that an `else` will only execute if none of the conditions were `true`.*

While the examples above are simple, you can create complex conditions using [boolean comparisons](https://guide.freecodecamp.org/python/comparisons) and [boolean operators](https://guide.freecodecamp.org/python/boolean-operations).
