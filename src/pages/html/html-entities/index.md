---
title: HTML Entities
---
## HTML Entities

There are some characters that are reserved in HTML, and they have a special meaning when used in HTML documents. For example, characters such as the less than (<) and greater than (>) signs will be treated as special characters in the HTML text, because the browser might try to mix them with HTML tags. These reserved characters must be replaced with character entities.

There is an both an advantage and disadvantage of using HTML entities:
* **Advantage**: the entity names are easy to remember.
* **Disadvantage**: Not all browsers may recognize or support all entity names, but there is support for entity numbers.


### How Do I Display These Entities?
You can display these entities using `&entity_name` or `&#entity_number`. So, in order to display the less than sign (<), you would use `&lt;` or `&#60;` in place of the symbol in your HTML text. 

**For example**: `&lt;div&gt;` or `&#60;div&#62;` would be displayed as `<div>` in a browser.


### Some Useful Common HTML Entities
| Symbol | Description          | Entity Name | Entity Number |
|:------:|----------------------|:-----------:|:-------------:|
| &nbsp; | non-breaking space   | `&nbsp;`    | `&#160;`      |
| "      | quotation mark       | `&quot;`    | `&#34;`       |
| '      | apostrophe mark      | `&apos;`    | `&#39;`       |
| &      | ampersand            | `&amp;`     | `&#38;`       |
| <      | less than            | `&lt;`      | `&#60;`       |
| >      | greater than         | `&gt;`      | `&#62;`       |
| &copy; | copyright            | `&copy;`    | `&#169;`      |
| &reg;  | registered trademark | `&reg;`     | `&#174;`      |


### Combining Diacritical Marks With Letters
Diacritical marks are "glyphs" that are added to letters. These marks can appear above, below, inside and between letters. They can be combined with alphanumeric characters to produce characters that are not present within the encoding of the page. 

#### Some Examples
| Mark   | Character | Description                  | Construction   | Result  |
|:------:|:---------:|------------------------------|:--------------:|:-------:|
| &#768; | a         | small a, grave accent        | `a&#768;`      | a&#768; |
| &#769; | a         | small a, acute accent        | `a&#769;`      | a&#769; |
| &#770; | a         | small a, circumflex accent   | `a&#770;`      | a&#770; |
| &#771; | a         | small a, tilde               | `a&#771;`      | a&#771; |
| &#776; | a         | small a, umlau               | `a&#776;`      | a&#776; |
| &#768; | A         | capital a, grave accent      | `A&#768;`      | A&#768; |
| &#769; | A         | capital a, acute accent      | `A&#769;`      | A&#769; |
| &#770; | A         | capital a, circumflex accent | `A&#770;`      | A&#770; |
| &#771; | A         | capital a, tilde             | `A&#771;`      | A&#771; |
| &#776; | A         | capital a, umlau             | `A&#776;`      | A&#776; |
