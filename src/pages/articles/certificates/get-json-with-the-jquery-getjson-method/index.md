---
title: Get Json with the Jquery Getjson Method
---
Application Programming Interfaces - are tools that computers use to communicate with one another.

Most web APIs transfer data in a format called JSON. JSON stands for JavaScript Object Notation. JSON is nothing more than object properties and their current values, sandwiched between a `{` and a `}`.

These properties and their values are often referred to as "key-value pairs".

Here is a sample of what it looks like.

    $.getJSON("/json/cats.json", function(json) {

       $(".message").html(JSON.stringify(json));

     });