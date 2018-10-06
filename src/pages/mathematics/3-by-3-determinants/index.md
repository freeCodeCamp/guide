---
title: 3 by 3 Determinants
---
## 3 by 3 Determinants

Consider a matrix, which we will call A:

Then the determinant of the matrix, denoted <em>det(A)</em>, is given by:

![img](https://latex.codecogs.com/gif.latex?%5Cdpi%7B120%7D%20det%28A%29%20%3D%20%5Cbegin%7Bvmatrix%7D%20a_%7B11%7D%20%26%20a_%7B12%7D%20%26%20a_%7B13%7D%5C%5C%20a_%7B21%7D%20%26%20a_%7B22%7D%20%26%20a_%7B23%7D%5C%5C%20a_%7B31%7D%20%26%20a_%7B32%7D%20%26%20a_%7B33%7D%20%5Cend%7Bvmatrix%7D%20%3D%20a_%7B11%7D%28a_%7B22%7Da_%7B33%7D%20-%20a_%7B32%7Da_%7B23%7D%29%20-%20a_%7B12%7D%28a_%7B21%7Da_%7B33%7D-a_%7B31%7Da_%7B23%7D%29%20&plus;%20a_%7B13%7D%28a_%7B21%7Da_%7B32%7D%20-%20a_%7B31%7Da_%7B22%7D%29)

Please keep in mind the order of operations in the expression above.

For example, consider the following matrix, which we will call B:

<table>
  <tr>
    <td style="background-color: white">1</td>
    <td style="background-color: white">2</td>
    <td style="background-color: white">3</td>
  </tr>
  <tr>
    <td style="background-color: white">0</td>
    <td style="background-color: white">-3</td>
    <td style="background-color: white">5</td>
  </tr>
  <tr>
    <td style="background-color: white">-10</td>
    <td style="background-color: white">4</td>
    <td style="background-color: white">7</td>
  </tr>
</table>

<em>det(B)</em> is given by the formula above. We apply the formula below:

<em>det(B) = 1 * ( (-3) * 7 - 5 * 4) - 2 * ( 0 * 7 - 5 * (-10)) + 3 * (0 * 4 - (-3) * (-10))</em>, which we simplify to:

<em>det(B) = 1 * ((-21) - 20) - 2 * (0 - (-50)) + 3 * (0 - (30))</em>, which we simplify to:

<em>det(B) = (-41) - 100 - 90 = -231</em>

#### More information:
 * [Determinant of a Matrix](https://www.mathsisfun.com/algebra/matrix-determinant.html) on MathIsFun
 * [3x3 Determinant calculator](http://www.wolframalpha.com/widgets/view.jsp?id=7fcb0a2c0f0f41d9f4454ac2d8ed7ad6)
 * [Determinant](https://en.wikipedia.org/wiki/Determinant) on Wikipedia
