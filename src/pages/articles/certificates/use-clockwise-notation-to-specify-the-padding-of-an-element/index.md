---
title: Use Clockwise Notation To Specify the Padding of An Element
---
Instead of specifying an element's `padding-top`, `padding-right`, `padding-bottom`, and `padding-lef`t attributes, you can specify them all in one line, like this: `padding: 10px 20px 10px 20px;`.

These four values work like a clock: top, right, bottom, left, and will produce the exact same result as using the side-specific padding instructions.

    .green-box {
      background-color: green;
      padding: 40px 20px 20px 40px
    }