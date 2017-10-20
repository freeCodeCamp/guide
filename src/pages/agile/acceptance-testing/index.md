---
title: Acceptance Testing
---
## Acceptance Testing

This is a stub. <a href='https://github.com/freecodecamp/guides/tree/master/src/pages/agile/acceptance-testing/index.md' target='_blank' rel='nofollow'>Help our community expand it</a>.

<a href='https://github.com/freecodecamp/guides/blob/master/README.md' target='_blank' rel='nofollow'>This quick style guide will help ensure your pull request gets accepted</a>.

Acceptance Testing is a well-established practice in software development. Acceptance Testing is a major part of Functional Testing of your code.

An Acceptance Test tests that the code performs as expected i.e. produces the expected output, given the expected inputs.

An Acceptance Test are used to test relatively bigger functional blocks of software aka Features.

### Example
You have created a page that requires the user to first enter their name in a dialog box before they can see the content. You have a list of invited users, so any other users will be returned an error.

There are multiple scenarios here such as: 
- Every time you load the page, you need to enter your name.
- If your name is in the list, the dialog will disappear and you will see the article.
- If your name is not in the list, the dialog box will show an error.

You can write Acceptance Tests for each of these sub-features of the bigger dialog box feature

Aside from the code that handles the infrastructure of how the test will be executed, your test for the first scenario could look like (in pseudocode):

Given that the page is opened
The dialog box should be visible
And The dialog box should contain an input box
And The input box should have placeholder text "Your name, please!"

### Notes

Acceptance Tests can be written in any language and run using various tools available that would take care of the infrastructure mentioned above e.g. Opening a browser, loading a page, providing the menthods to access elements on the page, assertion libraries and so on.

Every time you write a piece of software that will be used again (even by yourself), it helps to write a test for it. When you yourself or another makes changes to this code, running the tests will ensure that you have not broken existing functionality.

#### More Information:
<!-- Please add any articles you think might be helpful to read before writing the article -->


