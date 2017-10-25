---
title: HTML Entities
---
## HTML Entities

Basically, some characters are reserved in HTML. If you use the less than (```<```) or greater than (```>```) signs in your text, the browser might mix them with tags. Hence, character entities are used to display reserved characters in HTML.

The syntax to display a character entity is ```&entity_name;``` or ```&#entity_number```.

To display a less than sign (<) we must write: ```&lt;``` or ```&#60;```

### Non Breaking Space

A common character entity used in HTML is the non-breaking space: ```&nbsp;```

A non-breaking space is a space that will not break into a new line. Two words separated by a non-breaking space will stick together (not break into a new line). This is handy when breaking the words might be disruptive.

Examples:

- § 10
- 10 km/h
- 10 PM

Another common use of the non-breaking space is to prevent that browsers truncate spaces in HTML pages. If you write 10 spaces in your text, the browser will remove 9 of them. To add real spaces to your text, you can use the ```&nbsp;``` character entity.

Entity names are case sensitive.

## Some Useful HTML Entities

| Result    | Description                           | Entity Name   | Entity Number     |
|--------   |------------------------------------   |-------------  |---------------    |
|           | non-breaking space                    | ```&nbsp;```        | ```&#160;```            |
| <         | less than                             | ```&lt;```          | ```&#60;```             |
| >         | greater than                          | ```&gt;```          | ```&#62;```             |
| &         | ampersand                             | ```&amp;```         | ```&#38;```             |
| "         | double quotation mark                 | ```&quot;```        | ```&#34;```             |
| '         | single quotation mark (apostrophe)    | ```&apos;```        | ```&#39;```             |
| ¢         | cent                                  | ```&cent;```        | ```&#162;```            |
| £         | pound                                 | ```&pound;```       | ```&#163;```            |
| ¥         | yen                                   | ```&yen;```         | ```&#165;```            |
| €         | euro                                  | ```&euro;```        | ```&#8364;```           |
| ©         | copyright                             | ```&copy;```        | ```&#169;```            |
| ®         | registered trademark                  | ```&reg;```         | ```&#174;```            |
