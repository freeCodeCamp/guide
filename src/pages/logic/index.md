---
title: Logic
---
## Logic

In this section, we'll have guides to a wide variety of logical puzzles that are important to math and programming.

function fib(int $n) {
    yield 0; $n--;
    yield 1; $n--;
    $second = ($first = 2) + 1;
    while ($n-- !== 0) {
        yield $first;
        [$second, $first] = [$first + $second, $second];
    }
}

$fibo = fib(10);
foreach ($fibo as $value) {
    echo $value . PHP_EOL;
}
