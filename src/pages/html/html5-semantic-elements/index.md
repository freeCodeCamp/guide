---
title: HTML5 Semantic Elements
---
## HTML5 Semantic Elements

This is a stub. <a href='https://github.com/freecodecamp/guides/tree/master/src/pages/html/html5-semantic-elements/index.md' target='_blank' rel='nofollow'>Help our community expand it</a>.

<a href='https://github.com/freecodecamp/guides/blob/master/README.md' target='_blank' rel='nofollow'>This quick style guide will help ensure your pull request gets accepted</a>.

<!-- The article goes here, in GitHub-flavored Markdown. Feel free to add YouTube videos, images, and CodePen/JSBin embeds  -->
# New Semantic Elements in HTML5

Many web sites contain HTML code like: ```<div id="nav"> <div class="header"> <div id="footer">``` to indicate navigation, header, and footer.

HTML5 offers new semantic elements to define different parts of a web page:  

![alt text](https://www.w3schools.com/html/img_sem_elements.gif)
+ article    
+ aside
+ details
+ figcaption
+ figure
+ footer
+ header
+ main
+ mark
+ nav
+ section
+ summary
+ time

# HTML5 ```<section>``` Element
The ```<section>``` element defines a section in a document.
```
<section>
  <h1>WWF</h1>
  <p>The World Wide Fund for Nature (WWF) is....</p>
</section>
```
[Test It](https://www.w3schools.com/html/tryit.asp?filename=tryhtml5_section)

# HTML5 ```<article>``` Element
The ```<article>``` element specifies independent, self-contained content.

An article should make sense on its own, and it should be possible to read it independently from the rest of the web site.

Examples of where an ```<article>``` element can be used:

+ Forum post
+ Blog post
+ Newspaper article
```
<article>
  <h1>What Does WWF Do?</h1>
  <p>WWF's mission is to stop the degradation of our planet's natural environment,
  and build a future in which humans live in harmony with nature.</p>
</article>
```
[Test It](https://www.w3schools.com/html/tryit.asp?filename=tryhtml5_article)

# Nesting ```<article>``` in ```<section>``` or Vice Versa?
The ```<article>``` element specifies independent, self-contained content.

The ```<section>``` element defines section in a document.

Can we use the definitions to decide how to nest those elements? No, we cannot!

So, on the Internet, you will find HTML pages with ```<section>``` elements containing ```<article>``` elements, and ```<article>``` elements containing ```<sections>``` elements.

You will also find pages with ```<section>``` elements containing ```<section>``` elements, and ```<article>``` elements containing ```<article>``` elements.

# HTML5 ```<header>``` Element
The ```<header>``` element specifies a header for a document or section.

The ```<header>``` element should be used as a container for introductory content.

You can have several ```<header>``` elements in one document.

The following example defines a header for an article:
```
<article>
  <header>
    <h1>What Does WWF Do?</h1>
    <p>WWF's mission:</p>
  </header>
  <p>WWF's mission is to stop the degradation of our planet's natural environment,
  and build a future in which humans live in harmony with nature.</p>
</article>
```
[Test It](https://www.w3schools.com/html/tryit.asp?filename=tryhtml5_header)

# HTML5 ```<footer>``` Element
The ```<footer>``` element specifies a footer for a document or section.

A ```<footer>``` element should contain information about its containing element.

A footer typically contains the author of the document, copyright information, links to terms of use, contact information, etc.

You may have several ```<footer>``` elements in one document.
```
<footer>
  <p>Posted by: Hege Refsnes</p>
  <p>Contact information: <a href="mailto:someone@example.com">
  someone@example.com</a>.</p>
</footer>
```
[Test it](https://www.w3schools.com/html/tryit.asp?filename=tryhtml5_footer)

# HTML5 ```<nav>``` Element
The <nav> element defines a set of navigation links.

Notice that NOT all links of a document should be inside a <nav> element. The <nav> element is intended only for major block of navigation links.
```
  <nav>
  <a href="/html/">HTML</a> |
  <a href="/css/">CSS</a> |
  <a href="/js/">JavaScript</a> |
  <a href="/jquery/">jQuery</a>
</nav>
```
[Test It](https://www.w3schools.com/html/tryit.asp?filename=tryhtml5_nav)

# HTML5 ```<aside>``` Element
The ```<aside>``` element defines some content aside from the content it is placed in (like a sidebar).

The aside content should be related to the surrounding content.
```
<p>My family and I visited The Epcot center this summer.</p>

<aside>
  <h4>Epcot Center</h4>
  <p>The Epcot Center is a theme park in Disney World, Florida.</p>
</aside>
```
[Test It](https://www.w3schools.com/html/tryit.asp?filename=tryhtml5_aside)

# HTML5 ```<figure>``` and ```<figcaption>``` Elements
The purpose of a figure caption is to add a visual explanation to an image.

In HTML5, an image and a caption can be grouped together in a ```<figure>``` element:

```
<figure>
  <img src="pic_mountain.jpg" alt="The Pulpit Rock" width="304" height="228">
  <figcaption>Fig1. - The Pulpit Rock, Norway.</figcaption>
</figure>
```
[Test It](https://www.w3schools.com/html/tryit.asp?filename=tryhtml5_figcaption)
#### More Information:
<!-- Please add any articles you think might be helpful to read before writing the article -->



