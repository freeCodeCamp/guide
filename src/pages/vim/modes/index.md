---
title: Modes in Vim
---

# Vim Modes

Because vim is focused on changing existing code just as much as writing new
code, it is split into several modes that each have different purposes.

### Normal Mode

By default, vim starts in "normal" mode. Here, key presses don't work as one
would expect. That is, they don't insert text into the document; instead,
certain key presses can:

- Move the cursor
- Manipulate text
- Enter other modes

Normal mode is where one should spend most of their time while using vim. Remember,
this is what makes vim different.

Normal mode can be accessed from other modes by pressing `Esc` or `<C-[>`.

### Insert Mode

This is the second most used mode, and will be the most familiar behavior
to most people. Once in insert mode, typing inserts characters just like a regular
text editor. You can enter it by using an insert command from normal mode.

Insert commands include:
- `i` for '**i**nsert', this immediately switches vim to insert mode
- `a` for '**a**ppend', this moves the cursor after the current character and enters insert mode
- `o` inserts a new line below the current line and enters insert mode on the new line

These commands have an uppercase variety too:
- `I` moves the cursor to the beginning of the line and enters insert mode
- `A` moves the cursor to the end of the line and enters insert mode
- `O` inserts a new line above the current one and enters insert mode on the new line

There are so many more ways of inserting text in vim that can't be listed here
but these are the simplest. Also, beware of staying in insert mode for too long; vim is
not designed to be used in insert mode all the time.

To leave insert mode and return to normal mode, press `Esc` or `<C-[>`

### Visual Mode
Visual mode it used to select text, similar to how clicking and dragging with a
mouse behaves.  Press 'v' to enter visual mode, this begins the selection where
the cursor is, then move the cursor to the end of what you want to select and
now you can execute a command over the selecting text.
For example, after selecting text, press 'd' to delete the selected text or 'y'
to copy it.

### Command Mode
Command mode has a wide variety of commands and can do things that normal mode
can't do as easily.  To enter command mode type ':' from normal mode and then
type your command which should appear at the bottom of the window.
For example, to do a global find and replace type `:%s/foo/bar/g` to replace
all 'foo' with 'bar'
- `:` Enters command mode
- `%` Means across all lines
- `s` Means substitute
- `/foo` is regex to find things to replace
- `/bar/` is regex to replace things with
- `/g` means global, otherwise it would only execute once per line

Vim has a number of other methods that you can read about in the help
documentation, `:h` or `:help`.
