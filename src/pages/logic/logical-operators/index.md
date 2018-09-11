---
title: Logical Operators
---
## Logical Operators

* **And** (&&) - Both conditions must be true.
* **Or** (||) - At least one condition must be true.
* **Not** (!) - Condition must be false.
* **If** - If a condition is true, execute.
* **Iff** (if and only if) 
* **Xor** ("eXclusive or") - One, and only one, condition must be true.

#### Examples:

* **And** (&&)  
   returns **TRUE** if and only if, all inputs are **TRUE**  
   ```
   TRUE AND TRUE  
   returns TRUE
   ```
* **Or** (||)  
   returns **TRUE** if and only if, at least one input is **TRUE**  
   ```
   TRUE OR FALSE  
   returns TRUE  
   ```
* **Not** (!)  
   returns **TRUE** if and only if, the input is **FALSE**  
   ```
   !FALSE  
   returns TRUE  
   ```
* **If**  
   if true, then execute, else, execute something else  
   ```
   if TRUE do this  
   else do that  
   ```
* **Iff** (if and only if)  
   means the second condition is necessary for the first to be true  
   ```
   A is true iff B  
   B must be true for A to be true  
   ```
* **Xor** ("eXclusive or")  
   returns **TRUE** if and only if, the inputs are **Exclusive**  
   ```
   TRUE XOR TRUE  
   returns FALSE  
   
   TRUE XOR FALSE  
   returns TRUE  
   ```
* **Equals to** (==)  
   returns **TRUE** if and only if, the first input is **equal to** the second  
   ```
   3 == 3  
   returns TRUE  
   ```
* **Less than** (<)  
   returns **TRUE** if and only if, the first input is **less than** the second input  
   ```
   3 < 5  
   returns TRUE  
   ```
* **Greater than** (>)  
   returns **TRUE** if and only if, the first input is **greater than** the second input  
   ```
   5 > 3  
   returns TRUE  
   ```
* **Less than or equal to** (<=)  
   returns **TRUE** if and only if, the first input is **less than or equal to** the second input  
   ```
   3 <= 5  
   returns TRUE  
   
   3 <= 3  
   returns TRUE  
   ```
* **Greater than or equal to** (>=)  
   returns **TRUE** if and only if, the first input is **greater than or equal** to the second input  
   ```
   5 >= 3  
   returns TRUE  
   
   5 >= 5  
   returns TRUE  
   ```

* **true AND true** = true
* **true OR true** = true
* **true AND false** = false
* **true OR false** = true
* **false AND false** = false
* **false OR false** = false


#### More Information:
<!-- Please add any articles you think might be helpful to read before writing the article -->

 +* [Logical Operators in Javascript](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_Operators)
 +* [Logical Operators in PHP](http://php.net/manual/en/language.operators.logical.php)
 +* [Logical Operators in C++](http://en.cppreference.com/w/cpp/language/operator_logical)
