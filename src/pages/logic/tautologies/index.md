---
title: Tautologies
---
## Tautologies

A tautology is a sentence that is true in every possible interpretation. In other words, a sentence that is a tautology always evaluates to True, regardless of the truth values of it's propositions.   

### Tautlogies in Propositional Logic

Tautologies in propositional logic are sentences that are true regardless of the valuation of the propositional variables in the sentence.
There are infinitely many tautologies in Propositional Logic.

Examples of tautological sentences:

* **(A or -A)**, or the law of the Excluded Middle. This sentence always evaluates to true. If A is true, the sentence is equivalent to (true or false), which evaluates to true. If A is false, the sentence is equivalent to (false or true), which again evaluates to true. 

* **(-P and Q) -> (P -> R)**. This sentence is more complicated and involves three propositions. It is a tautology because every row of the truth table for the sentence evaluates to true. In the table, 1 represents true and 0 represents false. 

| P | Q | R | -P and Q | P -> R | (-P and Q) -> (P -> R) |
|:-:|:-:|:-:|:--------:|:------:|:----------------------:|
| 0 | 0 | 0 |    0     |    1   |           1            |
| 0 | 0 | 1 |    0     |    1   |           1            |
| 0 | 1 | 0 |    1     |    1   |           1            |
| 0 | 1 | 1 |    1     |    1   |           1            |
| 1 | 0 | 0 |    0     |    0   |           1            |
| 1 | 0 | 1 |    0     |    1   |           1            |
| 1 | 1 | 0 |    0     |    0   |           1            |
| 1 | 1 | 1 |    0     |    1   |           1            |



#### More Information:
<!-- Please add any articles you think might be helpful to read before writing the article -->

* [Wikipedia](https://en.wikipedia.org/wiki/Tautology_(logic))
