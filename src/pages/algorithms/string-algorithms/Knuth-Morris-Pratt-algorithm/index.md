---
title: KMP (Knuth Morris Pratt) Pattern Searching
---
## KMP (Knuth Morris Pratt) Pattern Searching

KMP is a string pattern searching algorithm. We encounter string searching almost regularly while searching words in a text document or in the browser and many other applications.

Time complexity: O(n), where n is the length of the string where the pattern is to be searched.

Advantages:

> KMP is preferred over the Naive solution for pattern searching as it takes into account cases where there are repititions of sub-patterns more than once in the text or string.

> Whenever we find a mismatched character in our string after some matches, we already know there are characters that we dont need to match again since they have already been found.

> This preprocessing helps save us a lot of time and hence has a significant improvement in time complexity compared to that of the naive solution.


### Example:(Dots are used to show the current window of pattern in the string)

Lets assume we have string str= "AAAABAAABA" and pattern = "AAA"

str= ".AAA.ABAAABA"
pattern = ".AAA."

When we compare, we find a match with the first 3 characters using the same method as the naive solution. 

str= "A.AAA.BAAABA"
pattern = ".AAA."

When we move on to the fourth A in the new window, we do not need to compare all the characters again. We just compare the fourth A and the last character of the pattern, since we know the rest of the characters are already a match. Hence, we save time.

The example mentioned above is just one instance. However, we will not always have the same characters in the pattern, so we need to know how many characters to skip in the string.
To do this we require some preprocessing as I mentioned above. We do this by using an auxilliary integer array called lps[] or longest proper prefix(also suffix).
A proper prefix is prefix with whole string not allowed. For example, prefixes of “ABC” are “”, “A”, “AB” and “ABC”. Proper prefixes are “”, “A” and “AB”. Suffixes of the string are “”, “C”, “BC” and “ABC”.

Using lps[] to know the number of characters to be skipped:

> We start comparison of pattern[j] with j = 0 with characters of current window of text.
> We keep matching characters str[i] and pattern[j] and keep incrementing i and j as long as str[i] and pattern[j] match.
> When we find a mismatch:
  > We know that characters pattern[0..j-1] match with str[i-j+1…i-1].
  > lps[j-1] is count of characters of pattern[0…j-1] that are both proper prefix and suffix.
  > From above points, we can conclude that we don't need to match the lps[j-1] characters with str[i-j…i-1] because we know that these characters will anyway match. 
  
Let us consider the above example to understand this:

str[] = "AAAABAAABA" 
pattern[] = "AAA"
lps[] = {0, 1, 2} 

i = 0, j = 0
str[] = "AAAABAAABA" 
pattern[] = "AAA"
str[i] and pattern[j] match, 
do i++,
do j++

i = 1, j = 1
str[] = "AAAABAAABA" 
pattern[] = "AAA"
txt[i] and pattern[j] match, 
do i++, 
do j++

i = 2, j = 2
str[] = "AAAABAAABA" 
pattern[] = "AAA"
str[i] and pattern[j] match, 
do i++, 
do j++

i = 3, j = 3
Since j == M, print pattern found and reset j to 0,
j = lps[j-1] = lps[2] = 2

Here unlike Naive solution, we do not match first two characters of this window. 
Value of lps[j-1] (in above step) is index of next character to match.
i = 3, j = 2
str[] = "AAAABAAABA" 
pattern[] =  "AAA"
str[i] and pattern[j] match, 
do i++, 
do j++

i = 4, j = 3
Since j == M, print pattern found and reset j to 0,
j = lps[j-1] = lps[2] = 2

Again unlike Naive algorithm, we do not match first three characters of this window. 
Value of lps[j-1] (in above step) is index of next character to match.
i = 4, j = 2
str[] = "AAAABAAABA" 
pattern[] =   "AAA"
str[i] and pattern[j] do NOT match and j > 0, change only j
j = lps[j-1] = lps[1] = 1 

i = 4, j = 1
str[] = "AAAABAAABA" 
pattern[] =     "AAA"
str[i] and pattern[j] do NOT match and j > 0, change only j
j = lps[j-1] = lps[0] = 0

i = 4, j = 0
str[] = "AAAABAAABA" 
pattern[] =      "AAA"
str[i] and pattern[j] do NOT match and j is 0, 
we do i++.

i = 5, j = 0
txt[] = "AAAABAAABA" 
pattern[] =       "AAA"
txt[i] and pat[j] match, 
do i++, 
do j++

We keep going like this. The auxilliary array lps[] is used for other purposes as well where we need to store any recurring patterns in our algorithm.


