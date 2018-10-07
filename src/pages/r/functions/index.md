---
title: Functions in R
---
## In-built functions in R

- R comes with many functions that you can use to do sophisticated tasks like random
sampling.

- For example, you can round a number with the `round()`, or calculate
its factorial with the `factorial()`.

```r
> round(4.147)
[1] 4
> factorial(3)
[1] 6
> round(mean(1:6))
[1] 4
```

- The data that you pass into the function is called the function’s argument.

- You can simulate a roll of the die with R’s  `sample()`function. The `sample()` function takes two arguments:a vector named  x and a number named  size. For example:

```r
> sample(x = 1:4, size = 2)
[] 4 2
> sample(x = die, size = 1)
[] 3
>dice <- sample(die, size = 2, replace = TRUE)
>dice
[1] 2 4
>sum(dice)
[1] 6
```
- If you’re not sure which names to use with a function, you can look up the function’s
arguments with args.

```r
> args(round)
[1] function(x, digits=0)
```

## Resources

<a href='https://cran.r-project.org/manuals.html' target='_blank' rel='nofollow'>Official Docs</a>
<a href='https://www.statmethods.net/management/functions.html' target='_blank' rel='nofollow'>Quick-R</a>
<a href='https://cran.r-project.org/doc/manuals/r-release/R-lang.html#Functions' target='_blank' rel='nofollow'>CRAN</a>



