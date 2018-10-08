---
title: Acceptance Testing
---

## Acceptance Testing

Hello there, these are my changes.
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

It is usually performed by the users or the Subject Matter Experts. It is also called as User Acceptance Testing (UAT). UAT involves most common real life scenarios. Unlike system testing, it does not focus on the errors or crashes, but on the functionality. UAT is done at the end of the testing life-cycle and will decide if the software is moved to the next environment or not.

A good way of defining which acceptance tests should be written is to add acceptance criteria to a user story. With acceptance criteria, you can define when a user story is ready to deploy and the issue completed to your wishes.

In an Agile project it is important for the team to have acceptance criteria defined for all user stories. The Acceptance Testing work will use the defined criteria for evaluating the delivered functionality. When a story can pass all acceptance criteria it is complete. 

#### More Information:
 <!-- Please add any articles you think might be helpful to read before writing the article -->
- International Software Testing Qualifications Board (http://www.istqb.org/)

