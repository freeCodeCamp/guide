---
title: Useful Commands
---
## Useful Commands

## Saving
1. Press `Escape` to make sure you're in `normal mode`;
2. Type in `:w` ("w" stands for "write");
3. Press `Enter`.

## Exiting Vi, Vim, Nvim, Gvim
1. Press escape to get you into "normal" mode
2. Type `:q`, press enter. If you receive an error try `:q!`
3. To exit and save, type `:q`
(NOTE: The command `:q!` will force Vim to exit without saving. Make sure you save first by typing the command `:w` if you do not want to lose any changes you've made.)

**OR**

- Type ZZ (save and quit)
- Type `:wq` (save and quit but using with the commonly used "w" and "q" commands)

## Setting line numbers
1. Press escape to get you into "normal" mode
2. Type `:set number`, press enter

To set line numbers on by default:
1. Open/create the vim configuration file with `vim ~/.vimrc`
2. Add the line `set number`, press enter

## Bare minimum functionality

Most likely you'll find yourself in "normal" mode, it allows you to enter commands by pressing the colon `:` key.
To get here from other modes you can type `ctrl + c` or `escape`.

To edit text and move around in a familiar way press `i`, for "insert" mode.
Try to move around with the arrow keys in "insert" mode. You can also use j, k, h, and l to navigate down, up, left, and right respectively. 

Depending on the configuration, you may enter a file browser by typing and entering the command `:e .` in "normal" mode. The 'e' stands for edit, and the period for the file or directory.

## Searching a file in Vim

When in normal mode (press the `escape` key to make sure), you can search for any term in the document by typing `/`, followed by the term you're looking for, and then pressing `enter`. For example, type `/hello` and press `enter` to search for the word "hello" in the current file.

You can skip to the next occurrence of your search term by pressing `n`, or the previous occurrence by pressing `N`.

If you want to highlight all the search matches type `:set hlsearch` or use the abbreviated command `:set hls`.

## Pasting blocks of code

Very often you will find yourself looking for solutions to problems, and finding someone has written a block of code that does exactly what you want.
If you try to copy and paste the code directly into Vim you might find that the code is weirdly formatted or hasnt't been pasted correctly.
This is due to the fact that Vim reads each character that you paste one after the other, meaning any key-combinations that activates a Vim shortcut will be executed and Vim will try (and fail) to automatically indent the pasted code.

To overcome this you can use Vim's **Paste mode** which you can activate by entering normal mode (press `escape` or `crtl + c`) and type `:set paste`, then press ENTER.
You are now in *paste* mode.
You can then enter insert mode with `i` and paste the block of text/code without any issues!
To return to regular Vim without paste mode you can enter normal mode (`escape` or `crtl + c`) and type `:set nopaste`, and press ENTER

## I Want to Learn Vim!

For total beginners, Vim comes with a built in tutorial! You can access it by running `vimtutor` from your terminal and this will launch an interactive tutorial on *how to get started with Vim* (takes around 15 minutes to work through).

If you are not as confident in English, you can lanch `vimtutor` in your language of choice. For example `vimtutor fr` will launch the tutorial in french!

## Find and Replace
1. Press `Escape` to make sure your are in `normal mode`;
2. Type in `:` (You will switch to `command mode`);
3. Type `%s,word_to_be_replaced,new_word,g`;
4. Press `ENTER`.

Important: if you want to replace the first occurence of the word, remove the at the end.

Play Vim(https://vim-adventures.com/) - A fun way to learn vim plating a step-by-step game.

Read the rest of our Vim Guides to get a better understanding of this powerful editor.

## Other Resources
- [Vim Golf](https://vimgolf.com/) - A good way to learn from doing vim challenges to get the lowest amount of keystrokes. You can see solutions submitted by others if you can't figure the challenge out.
- Read the rest of our Vim Guides to get a better understanding of this powerful editor.
