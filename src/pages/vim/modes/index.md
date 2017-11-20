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
This is the second most used mode.  You can enter it by using an insert command
from normal mode.

These include:
- `i` for 'insert', switches to insert mode where the cursor is
- `I` moves the cursor to the beginning of the line and inserts
- `a` for 'append', switches to insert mode 1 character after the cursor
- `A` moves the cursor to the end of the line and inserts
- `o` moves the cursor to a next line and inserts
- `O` creates a new line and inserts at the cursor's current position

There are so many more ways of inserting text in vim that can't be listed here
but these are the simplest.  Once in insert mode, typing inserts characters before the cursor.  To leave
insert mode and return to normal mode, press `<esc>` or `ctrl-[`

### Visual Mode
Visual mode is used to select text, similar to how clicking and dragging with a
mouse behaves.  Press 'v' to enter visual mode, this begins the selection where
the cursor is, then move the cursor to the end of what you want to select and
now you can execute a command over the selecting text.
For example, after selecting text, press 'd' to delete the selected text or 'y'
to copy it.

The visual mode actually has multiple subtypes:  *visual*, *block-visual* and *linewise-visual*
- *visual*: like described above. Enter by pressing `v`
- *block-visual*: select any rectangular region. Enter by pressing `<ctrl>+v`
- *linewise-visual*: always select full lines. Enter by pressing `<shift>+v`

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
