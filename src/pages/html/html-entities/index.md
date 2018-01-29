---
title: HTML Entities
---
## HTML Entities

HTML entites are a way to print some special characters, and be sure they will be displayed correctly, no matter what the charater encoding will be used either to create the HTML file itself, or to display the page on the client browser. Moreover that's a convenient way to put some invisible or not visually distinctive characters, like non-breaking space, N- or M-dash, exactly upper or lower quotes etc. It also gives an ability to display any character you need as long as you know its number in Unicode characters chart.

An entity in HTML is encoded with ampersand, entity code/name and a semicolon. Like &ndash; (name) or &#x02013; (hex-code) or
&#8211; (decimal code) - these three variants encode the same N-dash symbol.

HTML entities are used to replace reserved characters. If you use the less than (<) or more than (>) character in your text, your browser might confuse the character for part of an HTML tag.

## Examples

Character | HTML entity(name) | HTML entity(number)
----------|-------------------|--------------------
&amp; ampersand|\&amp;|\&#38;
&copy; copyright|\&copy;|\&#169;
&quot; double quote|\&quot;|\&#34;
&apos; single quote|\&apos;|\&#39;
&lt; less than|\&lt;|\&#60;
&lt; greater than|\&gt;|\&#62;

#### More Information:
There are plenty of HTML entites references out there. One example is https://dev.w3.org/html5/html-author/charref
the other one is at <a href="https://www.w3schools.com/html/html_entities.asp" target="_blank" rel="nofollow">W3Schools HTML Entities</a>
