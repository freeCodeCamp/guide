---
title: "Use Clockwise Notation to Specify the Margin of an Element"
parent: "certificates-guide"
---

Instead of specifying an element's`margin-top`, `margin-right`, `margin-bottom`, and `margin-left` attributes, you can specify them all in one line, like this: `margin: 10px 20px 10px 20px;`.

These four values work like a clock: top, right, bottom, left, and will produce the exact same result as using the side-specific margin instructions.

    .green-box {
      background-color: green;
      margin: 40px 20px 20px 40px;
    }
