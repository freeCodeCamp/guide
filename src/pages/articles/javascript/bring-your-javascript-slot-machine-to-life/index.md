---
title: Bring Your javaScript Slot Machine To Life
---
Let's use the jQuery selector `$(".slot")` to select all of the slots.

Once they are all selected, we can use bracket notation to access each individual slot:

    $($(".slot")[0]).html(slotOne);
    $($(".slot")[1]).html(slotTwo);
    $($(".slot")[2]).html(slotThree);