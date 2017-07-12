---
title: Target A Specific Child of An Element Using Jquery
---
jQuery uses CSS Selectors to target elements. `target:nth-child(n)` css selector allows you to select all the nth element with the target class or element type.

Here's how you would give the third element in each well bounce: `$(".target:nth-child(3)").addClass("animated bounce");`

    $(".btn:nth-child(2)").addClass("animated bounce");