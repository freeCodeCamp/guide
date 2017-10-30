

---
title: HTML Entities
---
## HTML Entities

HTML entities are special pieces of text data which embed special characters in your code for display on the screen. They are also used to display characters which are difficult to type on the keyboard such as a fraction. <sup>1</sup>

| Normal Text | HTML Entity Text |
|  :---: |  :---: |
| 1/5 | &frac15; |
| <- | &larr; |
| Lambda | &lambda; |

### How to use UTF-8 In Your Webpage

HTML entities have the fixed format ampersand + \<entity-name> + semicolon. Use the entity character reference provided below in the 'More Information' section to determine the entity name you need then drop it into a string in your code. 

#### Source:
```html
<p>This is an example of the percent sign: &percnt;</p>
```

#### Output:
This is an example of the percent sign: <span>&percnt;</span>

<br>

#### More Information:
<!-- Please add any articles you think might be helpful to read before writing the article -->
[HTML Entity Character Reference](https://dev.w3.org/html5/html-author/charref)

### Sources:

  1. <a href="https://developer.mozilla.org/en-US/docs/Glossary/Entity">“Entity - Glossary.” Mozilla Developer Network, 19 Oct. 2017, developer.mozilla.org/en-US/docs/Glossary/Entity.
