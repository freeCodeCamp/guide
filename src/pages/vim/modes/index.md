---
title: Modes in Vim
---

# Vim Modes

Because vim is focused on changing existing code just as much as writing new code, it is split into several modes that each have different purposes.

### Normal Mode
When you open vim, normal mode is where you will be and where you will spend most time when using vim.  In normal mode, keyboard keys don't type letters.  Instead they can:
- Move the cursor
- Delete/Replace text
- Copy/Paste text
- Control several windows/buffers

### Insert Mode
This is the second most used mode.  You can enter it by using an insert command from normal mode.  These include:
- 'i' for 'insert', switches to insert mode where the cursor is
- 'a' for 'append', switches to insert mode 1 character after the cursor
- 'I', moves the cursor to the beginning of the line and inserts
- 'A', moves the cursor to the end of the line and inserts
There are so many more ways of inserting text in vim that can't be listed here but these are the simplest
Once in insert mode, typing inserts characters before the cursor.  To leave insert mode and return to normal mode, press <esc> or ctrl-[

### Visual Mode
Visual mode it used to select text, similar to how clicking and dragging with a mouse behaves.  Press 'v' to enter visual mode, this begins the selection where the cursor is, then move the cursor to the end of what you want to select and now you can execute a command over the selecting text.
For example, after selecting text, press 'd' to delete the selected text or 'y' to copy it.

### Ex Mode
Ex mode has a wide variety of commands and can do things that normal mode can't do as easily.  To enter ex mode type ':' from normal mode and then type your command which should appear at the bottom of the window.
For example, to do a global find and replace type ':%s/foo/bar/g' to replace all 'foo' with 'bar'
- ':' Enters ex mode
- '%' Means accross all lines
- 's' Means substitute
- '/foo' is regex to find things to replace
- '/bar/ is regex to replace things with
- '/g' means global, otherwise it would only execute once per line

Vim has a number of other methods used more rarely, but these four are used most in my experience.
