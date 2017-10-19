# Introduction

Logical Operations are a part of Boolean Algebra.  In Boolean Algebra, the value of variables can only be true or false.  Unlike regular algebra, where the main operations are addition, subtraction, etc.. the main operations of Boolean Algebra are conjunction, disjunction and negation.

### Logical AND

As an example let's assume we have 2 variables.  `x` and `y`.  In C# the logical AND operator is **`&&`**.

**Expression**

`z = x && y`

The above expression is stating that `z` will be **true** if both `x` and `y` are true.  Believe it or not, this type of expression is very common in real world applications.

For example, let's say that you are developing a program for a recruiter in regards to allowing applicants to be eligible for a specific computer science position.  Now, the business rules are.. the applicant has to have a degree in computer science and have 3 years of programming experience.

In C# pseudocode, it would look something like this:

    bool x = // Applicant has degree in computer science;
    bool y = // Applicant has 3 years of programming experience;

    bool z = // True if applicant has a degree in computer science AND has 3 years of experience. False if applicant doesn't have a degree in computer science but does have 3 years of programming experience, or vice versa, or doesn't have either requirements.
    
Typically, these logical operations are used in conditional statements such as `if`, and `switch` statements.

**Guideline**
* If both `x` and `y` are true, then `z` will be true.  `z = x && y`

---

### Logical OR

In C# syntax, the logical OR operator is indicated by two vertical lines `||`.

**Expression**

`z = x || y`.

The above expression means `z` will be true if **either** `x` OR `y` are true.  Both variables DO NOT need to be true in order for `z` to be true.

Example, using the recruiting example as we did in the **Logical AND** section..

    bool x = // Applicant has degree in computer science;
    bool y = // Applicant has 3 years of programming experience;

    bool z = // True if applicant has a degree in computer science OR has 3 years of experience OR has both.
             // False if applicant has neither a degree in computer science or 3 years of experience.
             
**Guideline**
*If either `x` or `y` is true, `z` is true.  `z = x || y`

---

### Logical NOT

In C# syntax, the logical NOT operator is indicated by an exclamation mark `!`.

This operator reverses the value of a given variable or expression.

**Expression**

    x = true;
    y = !x;
    
In the expression above, we initialized the variable `x` to be true.  Then, we initialized `y` to have the value of `NOT x`.  Remember, `NOT` means reverse or opposite.  The reverse/opposite of true is false. So, in the example above, `y` will have a value of false. 
    

