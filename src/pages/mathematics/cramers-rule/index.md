---
title: Cramers Rule
---
## Cramers Rule
This is an explicit formula in linear algebra.<br>
In linear algebra, this formulae gives solution to a <b>sysytem of linear equations</b>.<br>
It is valid whenever the system has unique solution. It expresses the solution in terms of determinants of the coefficient matrix and of matrices formed by replacing one column by the column vector of Righ Hand Sides of the equations. i.e. Constants.
<br>

###### Note:
This rule gets out of hand very quickly, calculations by this method for any system with numbe of equations greater than 3 are very cumbersome.
<br>
Therefore, you should use more easy methods like [Gaussian Elimination](https://en.wikipedia.org/wiki/Gaussian_elimination).<br>

# Examples for a system with two variables,
### Formulae is:
  Basic representation<br>
  ![Basic representation](https://wikimedia.org/api/rest_v1/media/math/render/svg/4877b2a677a47973c8703266eeddc5c695653edd)
  <br>
  Matrix format is:<br>
  ![Matrices](https://wikimedia.org/api/rest_v1/media/math/render/svg/bb5d9569703337ad94d4badcfc4013af8cdfd6ac)
  <br>
  Then the values for unknowns can be found out as<br>
  ![Individual formulaes](https://wikimedia.org/api/rest_v1/media/math/render/svg/567da479f71b8d15a62e17388c0d1fff4550434a)
  <br>
Consider the linear system, and compare with standard formulaes,
<pre>
  a<sub>1</sub>x + b<sub>1</sub>y = c<sub>1</sub>
  a<sub>2</sub>x + b<sub>2</sub>y = c<sub>2</sub>
 
  x + 2y = 10
  x + 4y = 20
  here,
  a<sub>1</sub> = 1,b<sub>1</sub> = 2,c<sub>1</sub> = 10
  a<sub>2</sub> = 1,b<sub>2</sub> = 4,c<sub>2</sub> = 20
  
  Applying the above formulae, we get
  
  x = (c<sub>1</sub>b<sub>2</sub> - c<sub>2</sub>b<sub>1</sub>) / (a<sub>1</sub>b<sub>2</sub> - a<sub>2</sub>b<sub>1</sub>)
  x =  (10 * 4 - 20 * 2) / (4 - 2)
  x = 0 / 2
  x = 0, which is correct solution, please verify,
  
  and 
  y = (a<sub>1</sub>c<sub>2</sub> - a<sub>2</sub>c<sub>1</sub>) / (a<sub>1</sub>b<sub>2</sub> - a<sub>2</sub>b<sub>1</sub>)
  y = (1 * 20 - 1 * 10) / (4 - 2)
  y = 10 / 2
  y = 5, which is correct, please verify by putting in original equation
</pre>

###### Similarly, we can expand it to many more variables but it will be very cumbersome, so, it's better to use other methods like Gaussian Elimination
  
#### More:
<!-- Please add any articles you think might be helpful to read before writing the article -->
Detailed theory on Cramers rule,
[Wikipedia: Cramer's rule](https://en.wikipedia.org/wiki/Cramer%27s_rule)

