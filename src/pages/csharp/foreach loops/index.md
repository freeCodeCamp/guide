<h1>foreach loop</h1>
The foreach loop will repeat the group of embedded statements inside of the loop for as many times as there are items in the array/object collection.

<h2>Examples</h2>
This example will output all of the strings in animals to the console.

```
List<string> animals = new List<string>{"Cat", "Dog", "Horse"}
foreach(string animal in animals)
{
  Console.Writeline(animal);
}
```

<h3>Output</h3>

```
Cat
Dog
Horse
```
