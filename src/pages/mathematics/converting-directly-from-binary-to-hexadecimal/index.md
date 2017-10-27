---
title: Converting Directly from Binary to Hexadecimal
---
## Converting Directly from Binary to Hexadecimal

The binary system contains two different characters, 0 and 1.

The hexadecimal system contains sixteen different characters, ten of them being numeric (0-9) and six of them being alphabetic (A-F).

In order to convert binary numbers to hexadecimal, you need to know that each hex character represents a decimal number between 0 and 15. In binary, you need 4 bits (0's or 1's) to represent a number in this range. So, we have a direct translation for each character:

| Hexadecimal|Binary|
|:-:|:-:|
|0|0000|
|1|0001|
|2|0010| 
|3|0011|
|4|0100|
|5|0101|
|6|0110|
|7|0111|
|8|1000|
|9|1001|
|A|1010|
|B|1011|
|C|1100|
|D|1101|
|E|1110|
|F|1111|

Basically, the steps for the conversion are:

1. Split your binary number in groups of four.
2. Translate each one to it's correspondent hexadecimal character.
3. Group up them.

### Example

Converting binary 001101001101 to hexadecimal:

```
Split 001101001101 in groups of four:

0011
0100
1101

Translate each one:

0011 - 3
0100 - 4
1101 - D

Result: 34D

```
    

#### More Information:
<!-- Please add any articles you think might be helpful to read before writing the article -->


