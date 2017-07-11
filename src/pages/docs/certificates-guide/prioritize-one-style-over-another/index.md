---
title: "Prioritize One Style Over Another"
parent: "certificates-guide"
---

Classes to individual elements take priority over general styles.

    <style>
      body {
        background-color: black;
        font-family: Monospace;
        color: green;
      }
      .pink-text{color: pink;}
    </style>
    <h1 class="pink-text">Hello World!</h1>

This makes for a pink h1 instead of a green one.
