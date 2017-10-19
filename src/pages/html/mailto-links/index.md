---
title: Mailto Links
---
## Mailto Links

<!-- The article goes here, in GitHub-flavored Markdown. Feel free to add YouTube videos, images, and CodePen/JSBin embeds  -->

A mailto link is a special type of HTML link that allows a user to send an email to a specific email address. Clicking on a mailto link activiates the default email client on the user's computer.

In its most simplest form, a mailto link is as follows:

```
<a href="mailto:john@example.com">Send an email to John</a>
```

However, it is also possible to specify values in a mailto link (e.g. email subject, message body, CC, BCC, etc.). The following example specifies an email subject and message body:

```
<a href="mailto:john@example.com?subject=Email%20subject&body=Email%20body">Send an email to John</a>
```

Additionally, multiple email addresses can be also specified by using a comma after each recipient:

```
<a href="mailto:john@example.com,jane@example.com">Send an email to John and Jane</a>
```

### Examples
A mailto link with one recipient:
```
<a href="mailto:john@example.com">Click here to send an email</a>
```

A mailto link with multiple recipients:
```
<a href="mailto:john@example.com,adam@example.com">Click here to send an email</a>
```

A mailto link with an email subject:
```
<a href="mailto:john@example.com?subject=Email%20subject">Click here to send an email</a>
```

A mailto link with CC and BCC specified:
```
<a href="mailto:john@example.com?cc=jane@example.com&bcc=bob@example.com">Click here to send an email</a>
```

A mailto link with a message body:
```
<a href="mailto:john@example.com?body=Dear%20John,%0AType%20your%20message%20here">Click here to send an email</a>
```
