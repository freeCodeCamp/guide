---
title: Lambda Expressions
---
## Lambda Expressions

Lambda Expressions are ideally used when we have something simple to be done an we are more interested in quickly getting the job done rather than formally naming the function.

These lambda expressions are often very simple functions that can be written in one line. They do not have names assigned to them,
so you usually use them when you only need a function once in your code.

## Code Example
```
student_GPA = [
  ('John', 3.0),
  ('Mary', 4.0),
  ('Charlie', 2.5)
]

# Print out student_grades sorted by GPA from lowest to highest
print(sorted(student_GPA, key=lambda student: student[1], reverse=True))
```

The code above should print out:
```[('Mary', 4.0), ('John', 3.0), ('Charlie', 2.5)]```

In this example, `sorted()` requires a function in order to sort `student_GPA`. Here, you specify a lambda that will access the 2nd
value in each tuple in order to sort by the GPA. With the lambda, you do not have to write a whole function just to use `sorted()`.

The lambda expression defines an unnamed function where `student` is the parameter. It will return `student[1]`. This function is 
created with just one line, however, it may be difficult to read, so be careful when using lambda expressions.

#### More Information:
https://docs.python.org/3/reference/expressions.html#lambda
