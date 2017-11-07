# What is Perl?
Perl is a family of high-level, general-purpose, interpreted, dynamic programming languages. The languages in this family include Perl 5 and Perl 6.

Though Perl is not officially an acronym, there are various backronyms in use, including "Practical Extraction and Reporting Language". Perl was originally developed by Larry Wall in 1987 as a general-purpose Unix scripting language to make report processing easier. Since then, it has undergone many changes and revisions. Perl 6, which began as a redesign of Perl 5 in 2000, eventually evolved into a separate language. Both languages continue to be developed independently by different development teams and liberally borrow ideas from one another.

The Perl languages borrow features from other programming languages including C, shell script (sh), AWK, and sed. They provide powerful text processing facilities without the arbitrary data-length limits of many contemporary Unix commandline tools, facilitating easy manipulation of text files. Perl 5 gained widespread popularity in the late 1990s as a CGI scripting language, in part due to its then unsurpassed regular expression and string parsing abilities.

In addition to CGI, Perl 5 is used for system administration, network programming, finance, bioinformatics, and other applications, such as for GUIs. It has been nicknamed "the Swiss Army chainsaw of scripting languages" because of its flexibility and power, and also its ugliness. In 1998, it was also referred to as the "duct tape that holds the Internet together", in reference to both its ubiquitous use as a glue language and its perceived inelegance.

# Perl 5 vs Perl 6
## Perl 5

Perl 5 is a highly capable, feature-rich programming language with over 29 years of development. Perl 5 runs on over 100 platforms from portables to mainframes and is suitable for both rapid prototyping and large scale development projects.

Perl 5 development versions are released on a monthly basis, with major releases coming out once per year.

Future plans for Perl 5 include making the core language easier to extend from modules, and providing a small, extensible meta-object protocol in core.

## Perl 6

The Perl 6 design process was first announced on July 19, 2000, on the fourth day of that year's Perl Conference, by Larry Wall in his State of the Onion 2000 talk. At that time, the primary goals were to remove "historical warts" from the language; "easy things should stay easy, hard things should get easier, and impossible things should get hard"; a general cleanup of the internal design and APIs. The process began with a series of requests for comments or "RFCs". This process was open to all contributors, and left no aspect of the language closed to change.

As of 2017, only the Rakudo Perl 6 implementation is under active development. No implementation will be designated as the official Perl 6 implementation; rather, "Perl 6 is anything that passes the official test suite."

Rakudo Perl 6 targets a number of virtual machines, such as MoarVM, the Java Virtual Machine and JavaScript. MoarVM is a virtual machine built especially for Rakudo Perl 6 and the NQP Compiler Toolchain. There is a layer between Perl 6 and the virtual machines called Not Quite Perl 6, or NQP, which implements Perl 6 rules for parsing Perl 6, as well as an Abstract syntax tree and backend-specific code generation. Large portions of Rakudo are written in Perl 6 itself, or in its subset NQP. Rakudo is not a completely self-hosting implementation, nor are there concrete plans at this point to make Rakudo a bootstrapping compiler.

# Perl or perl

"Perl" is the name of the language. Only the "P" is capitalized. Traditionally, the name of the program which runs the Perl script is "perl" with a lowercase "p". Most references to the language should use "Perl"
