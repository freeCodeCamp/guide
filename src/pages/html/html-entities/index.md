---
title: HTML Entities
---
## HTML Entities

<!-- The article goes here, in GitHub-flavored Markdown. Feel free to add YouTube videos, images, and CodePen/JSBin embeds  -->
#### An HTML entity is a piece of text ("string") that begins with an ampersand (&) and ends with a semicolon (;) . Entities are frequently used to display reserved characters (which would otherwise be interpreted as HTML code), and invisible characters (like non-breaking spaces). You can also use them in place of other characters that are difficult to type with a standard keyboard. 

### **Reserved charactors**
#### Some special characters are reserved for use in HTML, meaning that your browser will parse them as HTML code. For example, if you use the less-than (<) sign, the browser interprets any text that follows as a tag.

#### To display these characters as text, replace them with their corresponding character entities, as shown in the following table.

| Charactor | Entity | Note       |
|-----------|--------|------------|
|&          |&amp;   |Interpreted as the beginning of an entity or character reference.|
|<          |&lt;    |Interpreted as the beginning of a tag|
|>          |&gt;    |Interpreted as the ending of a tag|
|"          |&quot;  |Interpreted as the beginning and end of an attribute's value.|

#### More Information:
<!-- Please add any articles you think might be helpful to read before writing the article -->
[Official list of charactor entities](https://dev.w3.org/html5/html-author/charref)


