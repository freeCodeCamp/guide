---
title: Mailto Links
---
## Mailto Links

<!-- The article goes here, in GitHub-flavored Markdown. Feel free to add YouTube videos, images, and CodePen/JSBin embeds  -->

A mailto link is a kind of hyperlink (<a href=""></a>), with special parameters that lets you specify additional recipients, a subject line, and/or a body text.

### The basic syntax with a recipient is : 
    <a href="mailto:friend@something.com">Some text</a>

### More customization!

#### Adding a subject to that mail:

If you want to add a specific subject to that mail, be careful to add %20 (or +) everywhere there's a space in the subject line

#### Adding body text:

Similarly, you can add a specific message in the body portion of the email:
Again, spaces have to be replaced by %20 or +.
After the subject paramater, any additional parameter must be preceded by &

Example : Say you want users to send an email to their friends about their progress at Free Code Camp:

address: empty
subject: Great news
Body: I am becoming a developer

Your html link now:

    <a href="mailto:?subject=Great%20news&body=I%20am%20becoming%20a%20developer">Send mail!</a>
    
Here, we've left mailto empty (mailto:?). This will open the user's email client and the user will add the recipient address themselves.

#### Adding more recipients:

In the same manner, you can add CC and bcc parameters. 
Seperate each address by a comma! 
Additional parameters must be preceded by &.

    <a href="mailto:firstfriend@something.com?subject=Great%20news&cc=secondfriend@something.com,thirdfriend@something.com&bcc=fourthfriend@something.com">Send mail!</a>

#### More Information:
<!-- Please add any articles you think might be helpful to read before writing the article -->
[Mailto links on MDN web docs](https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML/Creating_hyperlinks)

Mailto links are used to produce hyperlinks on websites which allow users to send an email to a specific, pre-assigned email address.

Within the HTML document, a Mailto is created using the a tag or anchor tag. 

Example:
  <a href="mailto:exampleemail@email.com">Click Me to Send Email</a>
<!-- In this example, when the user clicks the "Click Me to Send Email" hyperlinked text, the device they are using will open a new email document pre-addressed to exampleemail@email.com, assuming the email client on the device has been set up. -->

Mailto hyperlinks can also be assigned to icons, so when the user clicks on the icon of say an envelope, they will be redirected to their email client, and again, the email will be pre-addressed to exampleemail@email.com or whatever email address we've assigned to the href of the hyperlink the user selected.

Example:
  <a href="mailto:exampleemail@email.com"" title="Email Assigned to Envelope" class="email"><i class="fa fa-envelope"></i></a>
  
For more information on what hyperlinks are [https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML/Creating_hyperlinks]. The syntax of a hyperlink does pertain to how you create a mailto link.

For more information on mailto links [http://www.rapidtables.com/web/html/mailto.htm].
