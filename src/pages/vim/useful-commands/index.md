---
title: Useful Commands
---
## Moving in "normal" mode

Vim allows a wide range of movement in normal mode.

Basic one character movements (using key from the keyboard homerow):
- **h**   move one character left
- **j**   move one row down
- **k**   move one row up
- **l**   move one character right

As many vim commands, row movement can be prefixed by a number to move several lines at a time:
- **4j**  move 4 rows down
- **6k**  move 6 rows up

Basic word movements:
- **w**   move to beginning of next word
- **b**   move to previous beginning of word
- **e**   move to end of word
- **W**   move to beginning of next word after a whitespace
- **B**   move to beginning of previous word before a whitespace
- **E**   move to end of word before a whitespace

As said above all these commands can be prefixed with a number to specify the number of word to used:
-- **2w** move to the beginning of the "second" next word

Beginning/End of line movement:
- **0**   move to the beginning of the line
- **$**   move to the end of the line

## Exiting Vi, Vim, Nvim, Gvim
1. Press escape to get you into "normal" mode
2. Type `:q`, press enter. If you receive an error try `:q!`

**OR**
- Type ZZ (save and quit)
- Close your terminal
- Shut down your computer

## Bare minimum functionality
Most likely you'll find yourself in "normal" mode, it allows you to enter commands by pressing the colon `:` key.
To get here from other modes you can type `ctrl + c` or `escape`.


To edit text and move around in a familiar way press `i`, for "insert" mode.
Try to move around with the arrow keys in "insert" mode.


Depending on the configuration, you may enter a file browser by typing and entering the command `:e .` in "normal" mode. The 'e' stands for edit, and the period for the file or directory.

## I Want to Learn Vim!
Start by pressing `escape` to check if you're in normal mode, press colon `:`, type `Tutor`, and press `enter`.

Read the rest of our Vim Guides to get a better understanding of this powerful editor.
