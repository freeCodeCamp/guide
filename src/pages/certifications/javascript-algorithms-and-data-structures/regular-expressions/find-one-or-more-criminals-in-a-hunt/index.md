---
title: Find One or More Criminals in a Hunt
---
## Find One or More Criminals in a Hunt

## Solution of Find One or More Criminals in a Hunt:
// example crowd gathering
let crowd = 'P1P2P3P4P5P6CCCP7P8P9';

let reCriminals = /C+/ig; // Change this line

let matchedCriminals = crowd.match(reCriminals);
console.log(matchedCriminals);
