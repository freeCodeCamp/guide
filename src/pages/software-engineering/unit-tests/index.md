---
title: Unit Tests
---
## Unit Tests

Unit testing is a type of testing which is found at the bottom of the software testing pyramid.
It involves breaking the codebase down into smaller parts (or units) and testing those in isolation.
Depending on the type of programming language (or paradigm) these can be against anything you define as a unit, although the most common practice is against functions.

### Why do it?

- **Protection** - Unit testing protects against introducing new or old bugs for defensive programming
- **Confidence** - You can add changes, or reuse or refactor code (both very common) and be sure you haven't added a bug
- **Documentation** - Unit testing documents the behavior and flow of code so its easy for someone new to the code to understand it
- **Isolation** - It isolates a module from the entire feature. This approach forces you to think of a module by itself, and ask what is its job?
- **Quality** - As unit testing forces you to think about and use your own API, it enforces good/extendable interfaces and patterns. It can point out any tight coupling or over-complexity which should be addressed. Bad code is usually much harder to test 
- **Industry Standard** -  Unit testing is a common discipline these days, and is a requirement for a large portion of software companies
- **Less bugs** - Substantial research suggests that applying testing to an application can improve production bug density by 40% — 80%.

## Test-Driven Development 
Unit testing is a key feature of the TDD software development approach. In this approach, code for specific features or functions is written through the repeated use of a very short cycle. First the developer writes a set of automated unit tests, and ensures that they fails initially. Next, the developer implements the bare minimum amount of code required to pass the test cases. Once it has been validated that the code is behaving as expected, the developer then goes back and refactors code to adhere to any relevant coding standards.

### More Information

Martin Fowler on Unit Testing: <a href='https://www.martinfowler.com/bliki/UnitTest.html' target='_blank' rel='nofollow'>martinfowler.com</a>

Robert Martin aka "Dr. Bob" on TDD: <a href='http://www.butunclebob.com/ArticleS.UncleBob.TheThreeRulesOfTdd' target='_blank' rel='nofollow'>butunclebob.com</a>

Eric Elliot on Unit tests and TDD: <a href='https://medium.com/javascript-scene/5-common-misconceptions-about-tdd-unit-tests-863d5beb3ce9' target='_blank' rel='nofollow'>Medium</a>

