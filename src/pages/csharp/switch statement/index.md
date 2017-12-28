<h1>switch statement</h1>
A switch statement is very similar to the if statement. The switch statement tests a variable against a list of cases. The matching case will be executed. If no case is matched an optional default case will be used.


<h2>Examples</h2>

```
int num = 1;

case (num)
{
  case 0:
    Console.Writeline("Case is 0.");
    break;
  case 1:
    Console.Writeline("Case is 1.");
    break;
  case 2:
    Console.Writeline("Case is 2."):
    break;
  default:
    Console.Writeline("Case is default.");
    break;
}
```

<h3>Output</h3>

```
Case is 1.
```
