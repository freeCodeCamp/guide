---
title: "Generate Random Whole Numbers within a Range"
parent: "certificates-guide"
---

> We can use a certain mathematical expression to get a random number between two numbers.

`Math.floor(Math.random() * (max - min + 1)) + min`

**See Also:** ![:scroll:](https://forum.freecodecamp.com/images/emoji/emoji_one/scroll.png?v=3 ":scroll:") <a>**Explanation**</a> | [Explanation in SO](https://stackoverflow.com/questions/1527803/generating-random-numbers-in-javascript-in-a-specific-range/1527820#1527820)

## Explanation

> `Math.random()` creates a floating point number between `0` (inclusive) and `1` (exclusive)

**Q:** Create a random **whole** number between `2` (inclusive, min) and `6` (inclusive, max) i.e. create a random _whole_ number between `min` (_inclusive_) and `max` (_inclusive_)

**A:** `Math.floor(Math.random() * (6 - 2 + 1)) + 2`

Let's write `Math.random() * max` which creates a floating point number between `0` (inclusive) and `max` (_exclusive_).

E.g. `Math.random() * 6` generates a random floating point number between `0` (inclusive) and `6` (_exclusive_).

* * *

* * *

But we need to generate a whole number between `0` (_inclusive_) and `max` (_inclusive_) first. So we do a trick ![:wink:](https://forum.freecodecamp.com/images/emoji/emoji_one/wink.png?v=3 ":wink:").

What if we create a number between `0` and `max + 1`. That way, we also include the `max` number. And then apply the `Math.floor` method on the result to get a whole number between **`0`** (_inclusive_, min) and `max` (_inclusive_).

We can write it as `Math.floor(Math.random() * (max + 1))`.

E.g. `Math.floor(Math.random() * (6 + 1))` generates a random whole number between **`0`** (_inclusive_, min) and **`6`** (_inclusive_, max).

**`0 1 2 3 4 5 6`**

> The `Math.random() * (6 + 1)` part generates a floating point number between `0` (_inclusive_) and `7` (_exclusive_).

**`0..1..2..3..4..5..6..`**

But that doesn't solve our given question yet ![:disappointed:](https://forum.freecodecamp.com/images/emoji/emoji_one/disappointed.png?v=3 ":disappointed:"). We need to generate a random whole number between **`min`** (_inclusive_) and **`max`** (_inclusive_). So we need another trick ![:wink:](https://forum.freecodecamp.com/images/emoji/emoji_one/wink.png?v=3 ":wink:").

* * *

* * *

What if we write `Math.floor(Math.random() * ((max + 1) - min))` that will generate a whole number between `0` and `(max + 1) - min`.

E.g. `Math.floor(Math.random() * ((6 + 1) - 2))` **=** `Math.floor(Math.random() * 5)` that will generate a whole number between `0` (inclusive) and `4` (inclusive).

**`0 1 2 3 4`**

But still the question is unsolved ![:disappointed:](https://forum.freecodecamp.com/images/emoji/emoji_one/disappointed.png?v=3 ":disappointed:"). We need the random number between `min` (**inclusive**) and `max` (**inclusive**).

So we simply write `Math.floor(Math.random() * ((max + 1) - min)) + min` ![:stuck_out_tongue_winking_eye:](https://forum.freecodecamp.com/images/emoji/emoji_one/stuck_out_tongue_winking_eye.png?v=3 ":stuck_out_tongue_winking_eye:").

E.g. `Math.floor(Math.random() * ((6 + 1) - 2)) + 2` **=** `Math.floor(Math.random() * 5) + 2`

**`2 3 4 5 6`**

**Now this answers our given question. `Math.floor(Math.random() * (max - min + 1) + min` correctly generates a random number between `min` (_inclusive_) and `max` (_inclusive_) i.e. it generates a random whole number between `2` (inclusive) and `6` (inclusive).** ![:smiley:](https://forum.freecodecamp.com/images/emoji/emoji_one/smiley.png?v=3 ":smiley:")
