---
title: Anonymous functions
---

# Anonymous functions

Are also knowns as closures. They are functions without specific name. Can be used as callbacks.

```php
$greetings = function ($name) {
    return 'Hello ' . $name;
};

// Returns Hello John Doe
echo $greetings('John Doe');
```

## Inheritance

```php
$greeting = 'Hi';

$greet = function ($name) use ($greeting) {
    return $greeting . ' ' . $name;
};

// Returns Hi John Doe
echo $greet('John Doe');
```
