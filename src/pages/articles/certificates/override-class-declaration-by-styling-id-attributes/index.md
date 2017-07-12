---
title: Override Class Declaration By Styling Id Attributes
---
We can use `id` to override styling too. `id` should have a higher priority than `class`, so its rules apply if a conflict occurs.

    <style>
      body {
        background-color: black;
        font-family: Monospace;
        color: green;
      }
      .pink-text {
        color: pink;
      }
      .blue-text {
        color: blue;
      }
      #orange-text{color:orange;}
    </style>
    <h1 class="pink-text blue-text" id="orange-text">Hello World!</h1>