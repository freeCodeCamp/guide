---
title: Mailto Links
---
## Mailto Links

A mailto link is a kind of hyperlink. They have special parameters that lets you specify additional recipients, a subject line, and/or a body text.

### The basic syntax of a mailto link with a recipient is : 

```html
<!DOCTYPE html>
<html>
	<body>
    <a href="mailto:friend@something.com">Some text</a>
  </body>
</html>
```
### More customization!

#### Adding a subject to that mail:

If you want to add a specific subject to that mail, be careful to add **%20** (or **+**) everywhere there's a space in the subject line

#### Adding body text:

Similarly, you can add a specific message in the body portion of the email. Again, spaces have to be replaced by **%20** or **+**.

After the subject paramater, any additional parameter must be preceded by **&**.

Example : Say you want users to send an email to their friends about their progress at Free Code Camp:

**address:** *empty*

**subject:** *Great news*

**body:** *I am becoming a developer*

Your html link now:

```html
<!DOCTYPE html>
<html>
	<body>
    <a href="mailto:?subject=Great%20news&body=I%20am%20becoming%20a%20developer">Send mail!</a>
    </body>
</html>
```
    
Here, we've left mailto empty (**mailto:?**). This will open the user's email client and the user will add the recipient address themselves.

#### Adding more recipients:

In the same manner, you can add **cc** and **bcc** parameters. 
Seperate each address by a comma! 
Additional parameters must be preceded by **&**.

```html
<!DOCTYPE html>
<html>
	<body>
    <a href="mailto:firstfriend@something.com?subject=Great%20news&cc=secondfriend@something.com,thirdfriend@something.com&bcc=fourthfriend@something.com">Send mail!</a>
     </body>
</html>
```

#### More Information:
[Mailto links on MDN web docs](https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML/Creating_hyperlinks)


