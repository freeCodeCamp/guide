---
title: Behavior Driven Development
---
## Behavior Driven Development

In software engineering, behavior-driven development (BDD) is a software development process that was created to extend Test Driven Development (TDD) by bringing concepts capable of improving test discussions between developers, testers, and domain experts. 

Behavior-driven development combines the general techniques and principles of TDD with ideas from domain-driven design and object-oriented analysis and design to provide software development and management teams with shared tools and a shared process to collaborate on software development.

Although BDD is principally an idea about how software development should be managed by both business interests and technical insight, the practice of BDD does assume the use of specialized software tools to support the development process.

Although these tools are often developed specifically for use in BDD projects, they can be seen as specialized forms of the tooling that supports test-driven development. The tools serve to add automation to the ubiquitous language that is a central theme of BDD.

Tests usually follow the Given-When-Then rule, where you first start by specifying the initial condition your test is going to run in (Given), the action taken that triggers the event (When), and the results expected by said action (Then).

A simple example in common language could go as follows:

```
Given that a user picked the blue shirt 
When the user presses the button to finish his order
Then the blue shirt must be deducted from the stock
And the money added to the store's bank
```