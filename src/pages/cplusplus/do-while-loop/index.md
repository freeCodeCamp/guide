# Do-While Loop
<p>Do-While loop is used to execute a given block of statements repeatedly as long as a given condition is TRUE.</p>
 
### Syntax
 
```cpp

do
{
  //code statements
  
}while(condition);

```

<p>The condition is checked in every iteration and the loop executes as long as the condition is true. When the condition returns false, the control breaks out of the loop and goes to the next line of the code after the loop.<p>
<p>Do not forget to update the value of loop counter in the loop body otherwise the loop may execute infinitely.<p>
<p><emp>Note:</emp> Unlike while loop, do-while loop will execute atleast once even if the condition is already false.<p>

### Example-1

```cpp

int i=5
do
{
  cout<<"Hello World!";
  i--;
}while(i!=0);

```
#### Output:

```cpp
Hello World!
Hello World!
Hello World!
Hello World!
Hello World!

```

### Example-2

```cpp

int i=-1
do
{
  cout<<"Hello World!";
  i--;
}while(i!=0);

```
#### Output:

```
Hello World!
```
