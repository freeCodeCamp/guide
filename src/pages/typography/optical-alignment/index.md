---
title: Optical Alignment
---
## Optical Alignment

Typography: Optical Bounds<BR>
Problem 1: Unless you make certain adjustments, glyphs (characters) can seem to line up incorrectly at the margins.<BR>
Problem 2: Because of certain optical effects, curved lines do not appear to line up properly with straight lines. To remedy this, when creating typefaces, you can design curved glyphs such as "C" or "S" so that they extend slightly below the baseline, thereby appearing to line up with straight glyphs such as "H."<BR>
<img src=https://developer.apple.com/fonts/TrueType-Reference-Manual/RM06/FF15.gif>

This same optical effect occurs at the extreme edges of lines. In both halves of the following figure, the uppercase "O" glyph is aligned with the uppercase "H" glyphs, in the sense that the leftmost edge of the "H" is even with the left-most edge of the "O." However, without the vertical line to convince the viewer the letters do not appear to align correctly.<BR>
<img src=https://developer.apple.com/fonts/TrueType-Reference-Manual/RM06/FF16.gif>


To compensate for these effects when setting type, you can manipulate character spacing, ever so slightly, to achieve correct vertical optical alignment.

#### More Information:
Reference: Kerning<BR>
Kerning is the fine adjustment to the normal spacing that occurs between two or more glyphs. Kerning does not refer to glyphs that overhang their bounds or to glyphs that extend beyond their leading or trailing edges defined by the character origin and advance width.<BR>
<img src=https://developer.apple.com/fonts/TrueType-Reference-Manual/RM06/FF20.gif> <BR>
(The kerned pair on the right is the correct scenario for well-attended typography). 


