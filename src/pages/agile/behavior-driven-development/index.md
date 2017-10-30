---
title: Behavior Driven Development
---
## Behavior Driven Development

BDD is a good possibility for collaboration in agile development processes. It gives you the opportunity to write test scenarios even if you are not able to write code. This helps teams to connect the developers with testers or non-tech team members.

In BDD you write test scenarios in a dedicated language which is called the Gherkin syntax. This syntax uses keywords like given, when, and and then to define the steps.

Example:

Scenario: Check if you can search for a jeans on the Google website

Given a user is on www.google.com
When the user enters jeans into the search box
And the user clicks on search
Then the user will see search results for jeans

A useful BDD framework is [Cucumber](https://cucumber.io/), which you can use with a huge number of different programming languages to write the code behind the steps of the scenarios.

<!-- The article goes here, in GitHub-flavored Markdown. Feel free to add YouTube videos, images, and CodePen/JSBin embeds  -->

#### More Information:
<!-- Please add any articles you think might be helpful to read before writing the article -->


