---
title: "Style Multiple Elements with a CSS Class"
parent: "certificates-guide"
---

You can attach classes to HTML elements by using `class="your-class-here"` within the relevant element's opening tag.

CSS selectors require a period at the beginning like this: `.blue-text { color: blue; }`, but that class declaration in the HTML doesn't use a period, like this: `<h2 class="blue-text">CatPhotoApp<h2>`.

    <style>
      .red-text {
        color: red;
      }
    </style>

    <h2 class="red-text">CatPhotoApp</h2>

    <p class="red-text">Kitty ipsum dolor sit amet, shed everywhere shed everywhere stretching attack your ankles chase the red dot, hairball run catnip eat the grass sniff.</p>
