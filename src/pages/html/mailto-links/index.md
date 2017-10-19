---
title: Mailto Links
---
## Mailto Links

This is a stub. <a href='https://github.com/freecodecamp/guides/tree/master/src/pages/html/mailto-links/index.md' target='_blank' rel='nofollow'>Help our community expand it</a>.

<a href='https://github.com/freecodecamp/guides/blob/master/README.md' target='_blank' rel='nofollow'>This quick style guide will help ensure your pull request gets accepted</a>.

<!-- The article goes here, in GitHub-flavored Markdown. Feel free to add YouTube videos, images, and CodePen/JSBin embeds  -->

#### More Information:
<!-- Please add any articles you think might be helpful to read before writing the article -->

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
