---
title: Correlation Does not Imply Causation
---
## Correlation Does not Imply Causation

<!-- The article goes here, in GitHub-flavored Markdown. Feel free to add YouTube videos, images, and CodePen/JSBin embeds  -->

In statistics, there is a lot of talk about **correlated variables**. A correlation is a relationship between two variables. **Causation** refers to a relationship where a change in one variable **is responsible for** the change of another variable. This is also known as a **causal relationship**.

When there is a causal relationship between two variables, there is also a correlation between them. But, a correlation between two variables does not imply a causal relationship between them. This is a <a href='https://en.wikipedia.org/wiki/Formal_fallacy' target='_blank' rel='nofollow'>logical fallacy</a>.

For example, there is a correlation between the amount of time spent studying for a test and the grade received on the test. This is a causal relationship, because the time spent studying affects your grade. If you study less, you will receive a lower grade; if you study more, you will receive a higher grade.

There is also a correlation between the <a href='http://www.tylervigen.com/spurious-correlations' target='_blank' rel='nofollow'>per capita consumption of margarine and the divorce rate in Maine</a>. However, this is _not_ a causal relationship - it is foolish to think that a decrease in margarine consumption will lower the divorce rate in Maine.


This is because a correlation between two variables can be explained by many reasons:
- One variable influences the other. This _would_ be a causal relationship. For example, there is a correlation between household salary and number of cars owned.
- Both variables influence each other. This _would_ be a two-way causal relationship. For example, a correlation between education level and the wealth of a person.
- There is another variable that is influencing both variables under examination. This would _not_ be a causal relationship. For example, number of cars owned and size of the house may be correlated, but these two variables are influenced by another variable: salary. An increase in the number of cars owned does not influence the size of the house.
- Correlation could be a random accident. This would _not_ be a causal relationship. This is the explanation for the previous example of margarine consumption and the divorce rate in Maine.

In machine learning, correlation suffices for making a predictive model. However, just because two variables are correlated does not mean one variable influences the other. In other words, although machine learning may help find a relationship between two variables, it does not necessarily help find the reason for the relationship.

