---
title: Copy and Paste
---

# Copying and Pasting in Vim

In vim, copying is commonly refered to as 'yanking', and pasting remains the same.

### Command Keys
The keys used for yanking and pasting in vim are:
- `y` to yank
- `p` to paste
- `d` to cut
- `"` to cut or yank to a register

### Copying
To yank or cut, type `y` or `d`, followed by a 'text object'.  These describe how much text should be yanked or deleted.  For example, `yw` copies one word and `d$` deletes from the cursor to the end of the line.  They can also both be used in visual mode, pressing `v` and moving the cursor and then pressing `d` deletes all text inside of the selection.

### Registers
When you copy or cut, you do so to a register.  Where most programs have one clipboard where copied text can go, vim has many.  To yank or delete to a register, type `"{REGISTER}` followed by the command.  The default register that is stored to when no register is specified is `"` and the system clipboard that can be accessed in other programs is `+`.  You can also use lower case characters to access registers and use upper case characters to append to registers.  For example `"dyy` copies the current line to the `d` register, typing `"D3yw` copies the next 3 words and adds them to what is already stored in `d`.

### Pasting
Pasting can be done in normal mode or in insert mode.
In normal mode:
- `p` pastes after the cursor
- `P` pastes before the cursor
- `gp` pastes after the cursor and moves the cursor to the end of the paste
- `gP` pastes before the cursor and moves the cursor to the end of the paste

In insert mode type `Ctrl-r` to paste and then type a register, normally `"`, this will paste from that register where the cursor is and move the cursor to after the paste.
