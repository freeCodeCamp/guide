---
title: Useful Commands
---
# Useful Vim Commands

## Changing Modes:
- to enter `Normal Mode` press `Esc` or `Ctrl-C`
- to enter `Insert Mode` press `i` 

## Saving
- Type `:w` to write (save) the file

## Exiting
- Type `:q` to quit the file (you will recieve an error if your file has unsaved changes)
- Type `:q!` to quit without saving

## Save and Exit with one command
- Type `:x` will save the file only if it has been modified and exit
- Type `:wq` will save the file even if no changes have been made and exit
- Type `ZZ` (equivalent to :x)

## Navigation
- Cursor movement: you can use either the arrow keys or `h`, `j`, `k`, `l` (left, up, down, right)
- `gg` brings you to the start of the file
- `G` brings you to the end of the file
- `:(num)` brings you to a specific line in your file (ex- :42 brings you to line 42)

## Cut, Copy, and Paste
- `dd` deletes (cuts) a single line
- `yy` yanks (copies) a single line
- you can use `yy` and `dd` preceded by a number to cut or copy multiple lines (ex- `13dd` will cut 13 lines)
- `p` pastes everything from paste buffer

### Preserve indentation when pasting
- if you copy text from an outside, vim may not preserve indentation unless you are in paste mode
- `:set paste` to enter paste mode, type `i` to enter insert mode, and finally paste 
- `:set nopaste` to exit paste mode

## Search
- `\(word)` searches for the first instance of the word in the file (ex- \foo)
- `n` brings you to the next instance of the word, `N` brings you to the previous instance of the word
- `*` searches for the word underneath the cursor
- `:set noh` turns off highlighting until the next search

## Other Useful Commands
- `u` undo
- `^R` redo
- `:set number` turns on line numbers, displayed on the left side of the editor
- `gg=G` fixes the indentation of the entire file
- If you want to learn more about a specific command, type `:help` followed by the command name (ex- :help :w)

This is far from a comprehensive list of Vim's capabilities, but it is a good start for anyone who wants to get the most out of Vim.

## Other Resources
- <a href='http://www.openvim.com/' target='_blank' rel='nofollow'>Open Vim</a> - An interactive vim tutorial that teaches basic commands
- <a href='https://vimgolf.com/' target='_blank' rel='nofollow'>Vim Golf</a> - A good way to learn from doing vim challenges to get the lowest amount of keystrokes. You can see solutions submitted by others if you can't figure the challenge out.
- Read the rest of our Vim Guides to get a better understanding of this powerful editor.
