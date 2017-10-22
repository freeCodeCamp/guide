---
title: Brute Force Algorithms
---
## Brute Force Algorithms

Brute Force Algorithms usually represent the most naive, basic, and straight - forward solution to a problem. All possibilities or combinations of the input parameters are taken and each one of them is evaluated to see whether they solve the problem (such solutions are also called 'candidate solutions') or not. 

##Example - Brute Force String Search

In C:

```C
    int stringSearch(char needle[],char haystack[],int needleLen,int haystackLen)
    {
        
        //  Input: needle   - The substring to be found
        //         haystack - The string to be searched against
        //         needleLen - Length of 'needle' string
        //         haystackLen - Length of 'haystack' string
        //  Output: Index of first match of needle in haystack, -1 if not found

        int i,j;
        i = j = 0;
        while(i < haystackLen)
        {
            j = 0;
            while(haystack[i] == needle[j] && j < needleLen)
                j += 1;
            if(j == needleLen) return i;
            i += 1;
        }
        return -1;
    }
```
Complexity : ```O(n * m)``` (```(n - m + 1) * (n)``` comparison operations in worst case)

##Combinatorial Explosion

Brute Force involves taking all possible combinations of input parameters and thus it is usually bogged down by ```O(a ^ n)```(Big - O - Exponential) or even ```O(n!)```(Big - O - Factorial) complexity.  

These are not attractive complexities, especially considering the humongous sizes of real world problems. Thus, only problems with a small input size can be solved with brute - force.      

##Speedup And Optimizations

Most problems with a brute force solution can be sped up. A case in point, the 8 queens problem (Laying down 8 alike ueens on an 8 * 8 chessboard, such that no two queens are in attacking positions, following traditional chess - rules. 

From brute force, we get 64 possibilities for each different queen - resulting in total input possibility as 64 ^ 8 (~ 281 trillion). Since all queens are alike, we can narrow it down to 64!/(56! * 8!)(~ 4 trillion). We can reduce it even more by avoiding combinations that have queens in attacking diagonal, vertical, or horizontal positions.

Often, you might find solutions of brute force problems detailed in other coding subsections, such as Backtracking and Dynamic Programming.

##NP - Complete

Non - deterministic Polynomial (NP) problems are a class of problems which do not have a known fast solution. A given solution to a NP problem, however, can be verified rather quickly (in polynomial time). A special property of this class of problems is that each one of these can be transformed into NP - Complete (NPC or NP - C) one in polynomial time, which also suffer from the same high complexity.

It is not yet known whether NP or NP - C problems have a polynomial ```O(x ^ n)``` complexity solution. In fact, this conundrum is one of the holy - grails of mathematical and computer science, also known as P versus NP problem, and it still remains unsolved. If the challenge of trumping thousands of bearded, glib, and grumpy mathematicians is not enough, [a miilion dollars await you](https://en.wikipedia.org/wiki/Millennium_Prize_Problems#P_versus_NP "P versus NP Wiki"). 

Some classic problems in NPC are listed below:

   * [Subset Sum Problem](https://en.wikipedia.org/wiki/Subset_sum_problem "Subset Sum Problem Wiki")
   * [Traveling Salesman Problem](https://en.wikipedia.org/wiki/Travelling_salesman_problem "TSP Wiki")
   * [Graph Coloring Problem](https://en.wikipedia.org/wiki/Graph_coloring_problem "Graph Coloring Problem Wiki")
   * [N - Queens Problem](http://www.math.utah.edu/~alfeld/queens/queens.html "N queens problem")

Further readings:

   * [Brute force search Wiki](https://en.wikipedia.org/wiki/Brute-force_search)
   * [A reading on Brute - Force attacks (Cryptography)](https://en.wikipedia.org/wiki/Brute-force_attack)
