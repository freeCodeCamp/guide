---
title: Article
---
## Article

According to the official W3C specs for this element, "The article element represents a complete, or self-contained, composition in a document, page, application, or site and that is, in principle, independently distributable or reusable, e.g. in syndication. This could be a forum post, a magazine or newspaper article, a blog entry, a user-submitted comment, an interactive widget or gadget, or any other independent item of content."<sup>1</sup> Basically, you should use the article element to hold a piece of content that could be used on it's own and still make sense. 

Generally, each article should have a heading title using an ```<h1> - <h6>``` heading tag. This title should generally be inside of a ```<header></header>``` tag as well with any other heading information you might have such as author or publication date. 

An ```<article>``` might contain several ```<section>``` elements depending on the content contained in the ```<article>```. Make sure to also look at the [section](https://guide.freecodecamp.org/html/elements/section) page to get a better idea of when to use each.


### Sources:
1. “HTML5 - The Article Element” W3C, 28 Oct. 2014, www.w3.org/TR/html5/sections.html#the-article-element.