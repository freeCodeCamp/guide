---
title: Behavior Driven Development
---
## Behavior Driven Development

<!-- The article goes here, in GitHub-flavored Markdown. Feel free to add YouTube videos, images, and CodePen/JSBin embeds  -->

Behavior Driven Development (BDD) is a process in software development that focuses on software testing. When developing the 
software, the developer must consider criteria that the software must satisfy. Tests are created in order to ensure that the 
software behaves correctly. These tests are grouped into user stories that will drive the development of the software.

First, a story is created in order to define the behavior that the software must fulfill. This story will define several
things:

* Who: the party that will benefit from the development of this story 
* What: the criteria that the story will accomplish
* Why: the reason for implementing this story

After defining the story, you create several scenarios that the software may face when it is finished. These scenarios should
define three things known as `Given`, `When`, and `Then`:

* `Given`: The conditions that are given to be true at the beginning of this scenario
* `When`: Events that should cause something to happen
* `Then`: The results of the events

Behavior Driven Development aims to fulfill each of these scenarios in order to be considered "finished". The software should
behave in a way such that the scenarios are true. In a sense, the scenarios are considered to be test cases.

To illustrate these concepts, here is an example of BDD (using the [Cucumber](https://github.com/cucumber/cucumber/wiki/Feature-Introduction) syntax) for store software:
```
Story: Items added to shopping cart
As a customer
In order to purchase multiple items
I want to add items to a shopping cart so I can keep track of my merchandise

Scenario: Customer can add an item to the shopping cart
Given chocolate bars are in stock
When I add a chocolate bar to my shopping cart
Then I should have 1 chocolate bar in my shopping cart

Scenario: Customer can add the same item to their shopping cart several times
Given chocolate bars are in stock
When I add 5 chocolate bars to my shopping cart
Then I should have 5 chocolate bars in my shopping cart

Scenario: Customer can add different items to their shopping cart
Given chocolate bars are in stock
And marshmallow bags are in stock
When I add a chocolate bar to my shopping cart
And I add a marshmallow bag to my shopping cart
Then I should have 1 chocolate bar in my shopping cart
And I should have 1 marshmallow bag in my shopping cart
``` 

#### More Information:
<!-- Please add any articles you think might be helpful to read before writing the article -->
Video: [What is Behavior Driven Development?](https://www.youtube.com/watch?v=VS6EEUVZGLE)

