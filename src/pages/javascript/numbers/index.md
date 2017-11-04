---
title: Numbers
---
## Numbers

This is a stub. <a href='https://github.com/freecodecamp/guides/tree/master/src/pages/javascript/numbers/index.md' target='_blank' rel='nofollow'>Help our community expand it</a>.

<a href='https://github.com/freecodecamp/guides/blob/master/README.md' target='_blank' rel='nofollow'>This quick style guide will help ensure your pull request gets accepted</a>.

<!-- The article goes here, in GitHub-flavored Markdown. Feel free to add YouTube videos, images, and CodePen/JSBin embeds  -->
<h1>Javascript - Numbers</h1>

<h2>Numbers</h2>
<p>
Numbers are values that can be used in mathematical operations. You don’t need any special syntax for numbers, just write them straight into JavaScript.
</p>
<div>
<pre class = "language-none">
   <h3 class = "example">Example</h3><span>var y = 12345;</span>
 
</pre>
 </div>
 
<div>
  
  <p><h2>JavaScript Numbers are Always 64-bit Floating Point</h2>
  
  In JavaScript, Number is a numeric data type in the <span><a href = "https://en.wikipedia.org/wiki/Double-precision_floating-point_format" target = "blank">double-precision 64-bit floating point format (IEEE 754).</a></span> In other programming languages different numeric types can exist, for examples: Integers, Floats, Doubles, or Bignums. The number type has three symbolic values: <a href = "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Infinity">+ Infinity</a>, - Infinity, and <a href = "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/NaN">NaN</a> (not-a-number). See also <a href = "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures" target = "blank">JavaScript data types and structures</a> for context with other primitive types in JavaScript.
  </p>   
  
</div>


<div>
  
  <h2>Decimal And Fractions</h2>
  
  <p>JavaScript doesn’t distinguish between whole numbers and decimals, so you can use them together without having to convert from one to the other.<pre><h3>Example</h3><span>var x = 10;<br>var y = 3.14159;<br>console.log(x + y) // 13.14159;</span></pre></p>
<p><b>Fractions</b> don’t exist in JavaScript, but you can rewrite them as division problems using the division operator /. Note that the resulting number is always converted to decimals — just like with a calculator. <pre><h3>Example</h3><span> var x = 1;<br> var y = 3;<br> console.log(x <b>/</b> y) // 0.33333333</span></pre></p>
<p>Improper fractions use the division operator in the same way. <br> <pre><h3>Example</h3>var x = 10; <br>var y = 11;<br>console.log(y / x) // 1.1;</pre></p>
</div>
<div>
  <h2>Negative Numbers</h2>
  <p>You can make a number negative by placing the - operator in front, and you can also get a negative number by subtracting a number from a smaller number.<pre><h3>Example</h3>var x = -3;<br>var y = 5;<br>var z = 7;<br>console.log(x) // -3;<br>console.log(y - z) // 5 - 7 = -2;</pre></p>
</div>


#### More Information:
<!-- Please add any articles you think might be helpful to read before writing the article -->


