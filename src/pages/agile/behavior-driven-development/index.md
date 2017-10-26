---
title: Behavior Driven Development
---
## Behavior Driven Development

Behavior Driven Development (BDD) is a software development process that emerged from ![Test Driven Development (TDD)](../test-driven-development/index.md). Behavior Driven Development combines the general techniques and principles of TDD with ideas from domain-driven design and object-oriented analysis and design to provide software development and management teams with shared tools and a shared process to collaborate on software development.

BDD focuses on:
- Where to start in the process
- What to test and what not to test
- How much to test in one go
- What to call the tests
- How to understand why a test fails

At the heart of BDD is a rethinking of the approach to the unit testing and acceptance testing that naturally arise with these issues. For example, BDD suggests that unit test names be whole sentences starting with a conditional verb ("should" in English for example) and should be written in order of business value. Acceptance tests should be written using the standard agile framework of a user story: "As a _role_ I want _feature_ so that _benefit_". Acceptance criteria should be written in terms of scenarios and implemented as classes: Given _initial context_, when _event occurs_, then _ensure some outcomes_.

Example

```
Story: Returns go to stock

As a store owner
In order to keep track of stock
I want to add items back to stock when they're returned.

Scenario 1: Refunded items should be returned to stock
Given that a customer previously bought a black sweater from me
And I have three black sweaters in stock.
When he returns the black sweater for a refund
Then I should have four black sweaters in stock.

Scenario 2: Replaced items should be returned to stock
Given that a customer previously bought a blue garment from me
And I have two blue garments in stock
And three black garments in stock.
When he returns the blue garment for a replacement in black
Then I should have three blue garments in stock
And two black garments in stock.
```

#### More Information:
Wiki on <a href='https://en.wikipedia.org/wiki/Behavior-driven_development' target='_blank' rel='nofollow'>BDD</a>


