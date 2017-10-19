---
title: Basic Operators
---

## Basic Operators

In Python, operators are the constructs, which can manipulate the value of operands. For example `2**3` will give result 8. Here 2 and 3 are operands and `**` is the operator.

### Types of Operator
Python supports the following types of operators −

1. Arithmetic Operators[#arithmetic-operators]

2. Comparison (Relational) Operators

3. Assignment Operators

4. Logical Operators

5. Bitwise Operators

6. Membership Operators

7. Identity Operators

# Arithmetic Operators

1. Addition ( + )
  Depending on the type of operand, the result of addition will differ. Adding numerical values produces numerical values. Adding strings produces another string.
  ```python
        a = 10
        b = 20
        c = a + b
        print ( c ) # prints 30
      
        d = 'Hello!'
        e = 'Hi'
        print (d+e) # prints HelloHi'
      
        f = a + d # Oops! error...!
  ```
  It is not possible to add two different types unless they are compatible. 
  
  ```python
  		b = 2 + 3
  ```
  
  is fine, while
  
  ```python
  		c = '2' + 3
  ```
  
  throws error.
 
    

2. Subtraction ( - )

	The rules for subtraction are like that of addition for compatible types. But it is not possible to subtract a string from another.
	```python
		a = 2 - 1
		b = 2.12 - 3.89
		c = 'Hi Hello' - 'Hi' # Error Again...! 
		d = 1 - 'Hi' # Error...!!
		e = 'Hi' - 1 # Error...!!!
    ```

3. Multiplication ( * )

	Again very much like addition, but also works with strings! 

	```python
    	a = 'He'+'l'*2
		print (a) # prints Hello
    ```

4. Division ( / )

	a/b divides a with b returning quotient. Like subtraction this only works with compatible types.

	```python
    	a = 1 / 2
		print ( a ) # prints 0.5
		b = 'Hello' / 2 # Error!
    ```

5. Modulus ( % )

	Like division but the result is  reminder. Operands should be compatible for this to work.

	```python
    	a = 2 % 1 
		print ( a ) # prints 0

		b = 3 % 2
		print ( b ) # prints 1

		c = 'Python' % 6 # If division is impossible, so if modulus.
    ```
 
6. Exponent ( ** )

	a**b multiplies a b times, the usual exponent operation. 

	```python
    	print ( 2**3 ) #prints 8
		print ( 'e'**2 ) # Sorry!!
    ```

7. Floor Division ( // )

	This operator divides and rounds the result to the lowest closest integer.

	```python
    	print ( 2//3 ) # prints 0 --> 0.66.. rounded to 0
		print ( 5//2 ) # prints 2 --> 2.5 rounded to 2
    ```
#### More Information:
<!-- Please add any articles you think might be helpful to read before writing the article -->


