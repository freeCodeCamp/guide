---
title: Match All Letters and Numbers
---
## Match All Letters and Numbers

## Solution:
let quoteSample = "The five boxing wizards jump quickly.";
let alphabetRegexV2 = /[a-zA-Z0-9_*]/gi; // it's an answer
let result = quoteSample.match(alphabetRegexV2).length;
