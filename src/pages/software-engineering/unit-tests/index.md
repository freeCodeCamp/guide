---
title: Unit Tests
---
## Unit Tests

Unit testing is a type of testing which is found at the bottom of the software testing pyramid.
It involves breaking the codebase down into smaller parts (or units) and testing those in isolation.
Depending on the type of programming language (or paradigm) these can be against anything you define as a unit, although the most common practice is against functions.

### Why do it?

- Protection - Protects against introducing new or old bugs. Being defensive.
- Confidence - You can add changes, reuse or refactor (both very common) and be sure you haven't added a bug
- Documentation - Documents behaviour and flow of code so its easy to understand when someone approaches the same code fresh. 
- Isolation - Isolates module from entire feature. Have to think of it by itself. Ask what is its job?
- Quality - As it forces you to think about and use your own API, it enforces good/extendable interfaces and patterns. Points out any tight coupling or over-complexity which should be addressed. Bad code is usually much harder to test. 
- Industry Standard -  It is a common discipline these days. A requirement for a large portion of companies.
- Less bugs - Substantial research suggesting that applying testing to an application can improve production bug density by 40% — 80%.
