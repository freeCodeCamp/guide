---
title: HTML and CSS Cheat Sheet
---
This a page that (hopefully) in time will grow to cover the basic and simple HTML and CSS solutions.

Please add to your alternate solutions if you know a different way.

## Making a `<hr>` horizontal rule smaller

    hr {
      width: 75%;
      margin-left: auto;
      margin-right: auto;
    }

## Giving a `<div>` non scrolling background

    #divName {
      padding-top: 50px;
      height: 500px;
      color: #fff;
      background-image: url("your_url.jpg");
      background-repeat: no-repeat;
      background-attachment: fixed;
      background-size: 100%;
    }

Try different values to see the how it affects the div and over in the html

`<div id="divName" class="container-fluid">`

## Center a horizontal list

[http://csswizardry.com/2011/01/create-a-centred-horizontal-navigation/](http://csswizardry.com/2011/01/create-a-centred-horizontal-navigation/)

## Sections and Outlines of an HTML Document

[https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Sections_and_Outlines_of_an_HTML5_document](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Sections_and_Outlines_of_an_HTML5_document)