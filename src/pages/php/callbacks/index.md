---
title: Callbacks
---

# Callbacks

```php
function hello($name)
{
    return 'Hello ' .  $name;
}

//return Hello World
$text = hello('World');
echo $text;
```

Callbacks are using anonymous functions they are used as parameters in other functions. Callbacks can not be only simple functions but also objects. Here are some examples.

```php
// or with callbacks
function hello2($name, callable $q)
{
    $result = 'Hello ' . $name;
    call_user_func ($q, $result);
}

// return Hello World2
hello2('World2', function ($result) {
    echo $result;
});

// or you can check if paramere is callable in function
function hello3($name, $q)
{
    $result = 'Hello ' . $name;

    if (is_callable($q)) {
        call_user_func($q, $result);
    }
}

// returns Hello World3
hello3('World3', function ($result) {
    echo $result;
});
```

## Inheritance example

If you need use any variable you have already in your app you can do this wit word `use` and then write required variables

```php
// You can Inherit more variables you got from another function
function fullName ($firstName, $lastName)
{
    return $firstName . ' ' . $lastName;
}

function greet($greetings, callable $q)
{
    call_user_func($q, $greetings);
}

$fullName = fullName('John', 'Doe');

// now call your function
// It will retuns Hello Joe Doe
greet('Hello', function ($greet) use ($fullName) {
    echo $greet . ' ' . $fullName;
});
```
