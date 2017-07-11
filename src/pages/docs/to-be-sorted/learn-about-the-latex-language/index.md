---
title: "Learn about the LaTeX Language"
parent: "to-be-sorted"
---

LaTeX is designed for the production of technical and scientific documentation. You can create matrix, arrays or several other mathmatical functions.

`$$ (latex language) $$`

You can embed Latex in GitterIM. Examples:

## Array

    $$\begin{array} {c c}
    arr11 & arr12\\
    arr21 & arr22\\
    \end{array}$$

## Matrix

    $$\begin{pmatrix} 1 & 0 \\ 0 & 1 \end{pmatrix}$$

## Formatting

    $$\huge\textstyle\color{#F00}{BigRed}\small\textstyle\color{#0F0}{SmallGreen}$$

[Function Support](https://github.com/Khan/KaTeX/wiki/Function-Support-in-KaTeX)

## Details

[KaTeX Github Repo](https://github.com/Khan/KaTeX) LaTeX is a high-quality typesetting system; it includes features designed for the production of technical and scientific documentation. LaTeX is the de facto standard for the communication and publication of scientific documents. His advantages are noticable in long documents like books, papers or thesis.

Gitter uses Katex (an custom implementation of LaTeX) and it can be used introducing the following code:

    $$\begin{array} {c c}
    item11 & item12\
    item21 & item 22\
    \end{array}
    $$

Text:

*   `$$\huge\textstyle{some text}$$` -> $$\huge\textstyle{some text}$$
*   `$$\color{#F90}{some text}$$` -> $$\color{#F90}{some text}$$
