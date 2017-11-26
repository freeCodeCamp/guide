---
title: HTML5 Semantic Elements
---
## HTML5 Semantic Elements
Semantic HTML elements clearly describe it's meaning in a human and machine readable way. Elements such as `<header>`, `<footer>` and `<article>` are all considered semantic because they accurately describe the purpose of the element and the type of content that is inside them.

### A Quick History
HTML was originally created as a markup language to describe documents on the early internet. As the internet grew and was adopted by more people, it's needs changed. Where the internet was originally inteded for sharing scientific documents, now people wanted to share other things as well. Very quickly, people started wanting to make the web look nicer. Because the web was not initially built to be designed, programmers used different hacks to get things laid out in different ways. Rather than using the ```<table></table>``` to describe information using a table, programmers would use them to position other elements on a page. As the use of visually designed layouts progressed, programmers started to use a generic "non-semantic" tag like `<div>`. They would often give these elements a `class` or `id` attribute to describe their purpose. For example, instead of `<header>` this was often written as `<div class="header">`. As HTML5 is still relatively new, this use of non-semantic elements is still very common on websites today.

#### List of new semantic elements
The semantic elements added in HTML5 are:
+ `<article>`
+ `<aside>`
+ `<details>`
+ `<figcaption>`
+ `<figure>`
+ `<footer>`
+ `<header>`
+ `<main>`
+ `<mark>`
+ `<nav>`
+ `<section>`
+ `<summary>`
+ `<time>`

Elements such as ```<header>```, ```<nav>```, ```<section>```, ```<article>```, ```<aside>```, and ```<footer>``` act more or less like ```<div>``` elements. They group other elements together into page sections. However where a ```<div>```  tag could contain any type of information, it is easy to identify what sort of information would go in a semantic ```<header>``` region.

**An example of semantic element layout by w3schools**

![Semantic elements laying out a page by w3schools](https://www.w3schools.com/html/img_sem_elements.gif)

### Benefits of semantic elements
To look at the benefits of semantic elements, here are two pieces of HTML code. This first block of code uses semantic elements:
```
<header></header>
<section>
	<article>
		<figure>
			<img>
			<figcaption></figcaption>
		</figure>
	</article>
</section>
<footer></footer>
```

Whilst this second block of code uses non-semantic elements:
```
<div id="header"></div>
<div class="section">
	<div class="article">
		<div class="figure">
			<img>
			<div class="figcaption"></div>
		</div>
	</div>
</div>
<div id="footer"></div>
```

First, it is  much **easier to read**. This is probably the first thing you will notice when looking at the first block of code using semantic elements. This is a small example, but as a programmer you can be reading through hundreds or thousands of lines of code. The easier it is to read and understand that code, the easier it makes your job.

It has **greater accessibility**. You are not the only one that finds semantic elements easier to understand. Search engines and assistive technologies (like screen readers for users with a sight impairment) are also able to better understand the context and content of your website, meaning a better experience for your users.

Overall, semantic elements also lead to more **consistent code**. When creating a header using non-semantic elements, different programmers might write this as `<div class="header">`, `<div id="header">`, `<div class="head">`, or simply `<div>`. There are so many ways that you can create a header element, and they all depend on the personal preference of the programmer. By creating a standard semantic element, it makes it easier for everyone.

### Learn more about the new HTML5 elements:
* [w3schools](https://www.w3schools.com/html/html5_semantic_elements.asp) provides simple and clear descriptions of many of the news elements and how/where they should be used.
* [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element) also provides a great reference for all HTML elements and goes deeper into each.