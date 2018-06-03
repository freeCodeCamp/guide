---
title: Converting Directly from Binary to Hexadecimal
---
## Converting Directly from Binary to Hexadecimal

<!-- The article goes here, in GitHub-flavored Markdown. Feel free to add YouTube videos, images, and CodePen/JSBin embeds  -->

### Binary Number System:-
In binary system(Base- 2), all the numeric values are stored in the form of 0(zero) and 1(one). Each digit in a binary number is referred to as "bit". The leftmost digit is known as Most Significant Bit(MSB) and the rightmost digit is known as Least Significant Bit(LSB).

The weights of binary numbers are in powers from 2 beginning from right with 2^0 = 1 and increasing in powers of 2 as we move towards right i.e. ...2^5 2^4> 2^3 2^2 2^1^ 2^0 e.g. the decimal number 11 is represented as 1011 in binary number system (To verify, see 1011 as 2^3 2^2 2^1 2^0 and add the weights which correspond to 1 in binary notation i.e 8(2^3) + 2(2^1) + 1(2^0) = 11.)

All the machine level task is done in the form of 0s and 1s in all the computers.

### Hexadecimal Number System:-
In hexadecimal number system(Base-16), the numerical  values contain in the ranges 0-9 and A-F. Decimal number 62 is represented as 003E (3 * 16^1 + 14 * 16^ 0 = 62)

### To convert a binary number to hexadecimal number :-
Step 1 : Create groups of 4 bits starting from right and going towards left(because 4 binary digits represent 1 hexadecimal digit). If the group is incompelte then pad the group with 0 on the right.

Step 2 : Represent each group as a hexadecimal digit by converting to decimal number and write its hexadecimal notation.
0-9 same as decimal number system, 10 - A, 11 - B, 12 - C, 13 - D, 14 - E, 15 - F.

e.g. Consider the binary number 110110111110100

Now creating groups of 4 starting from right

0110 1101 1111 0100(Notice, the first group is padded with 0 to complete a group of 4)

6DF4 (0110 -> 6 , 1101 -> 13 -> D, 1111 -> 15 -> F, 0100 ->4)
