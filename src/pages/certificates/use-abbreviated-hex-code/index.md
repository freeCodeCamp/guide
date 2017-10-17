---
title: Use Abbreviated Hex Code
---
Red, which is `#FF0000` in hex code, can be shortened to `#F00`. That is, one digit for red, one digit for green, one digit for blue.

This reduces the total number of possible colors to around 4,000\. But browsers will interpret `#FF0000` and `#F00` as exactly the same color.

    <style>
      body {
        background-color: #F00;
      }
    </style>