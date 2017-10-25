---
title: Lambda Expressions
---
## Lambda Expressions

This is a stub. <a href='https://github.com/freecodecamp/guides/tree/master/src/pages/python/lambda-expressions/index.md' target='_blank' rel='nofollow'>Help our community expand it</a>.

<a href='https://github.com/freecodecamp/guides/blob/master/README.md' target='_blank' rel='nofollow'>This quick style guide will help ensure your pull request gets accepted</a>.

<!-- The article goes here, in GitHub-flavored Markdown. Feel free to add YouTube videos, images, and CodePen/JSBin embeds  -->

You can use the lambda keyword to define a small anonymous function. Lambda functions are restricted to a single expression. 

    >>> subtract = lambda x, y: x - y
    >>> subtract(5, 2)
    3

It is also possible to declare, and use, the function inline:

    >>> (lambda x, y: x - y):(5, 2)
    3

#### More Information:
[More Control Flow Tools &#8212; Python 3.6.3 documentation](https://docs.python.org/3/tutorial/controlflow.html?lambda-expressions#lambda-expressions)

[Expressions &#8212; Python 3.6.3 documentation](https://docs.python.org/3/reference/expressions.html#lambda)
