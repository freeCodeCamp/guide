<h1><b>FOR LOOP</b></h1>
<p>You use loops in programming language when you need to execute a particular block of code several times in your program.</p>
<p>A for loop is a repetition control structure which allows you to write a loop that is executed a specific number of times. The loop enables you to perform n number of steps together in one line.</p>
<h3>Syntax</h3>

```cpp
for (initialization expr; test expr; update expr)
{    
     // statements we want to execute
}

```
<dl>
<dt>Initialization expression:</dt>
<dd>You have to initialize the loop counter variable by some initial value. For example: <code>int i=0</code> </dd>
<dt>Test Expression</dt>
<dd>This is the expression that will be checked in every iteration of the loop. The loop will be executed only if its value is TRUE. If the value of this expression comes out to be False at any iteration of the loop, the control will break out of the loop and the next line after the loop will be  executed.</dd>
<dt>Update expression</dt>
<dd>The counter variable of the loop gets incremented or decremented using this expression.</dd>
</dl>
<h3>Example</h3>

```cpp

for(int i=1;i<=5;i++)
{
  cout<<"Hello World!";
 }

```

<h4>Result:</h4>

```cpp

Hello World!
Hello World!
Hello World!
Hello World!
Hello World!

```
