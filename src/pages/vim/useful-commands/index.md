---
title: Useful Commands
---
## Saving
1. Press `Escape` to make sure you're in `normal mode`;
2. Type in `:w` ("w" stands for "write");
3. Press `Enter`.

## Exiting Vi, Vim, Nvim, Gvim
1. Press escape to get you into "normal" mode
2. To exit, type `:q` but if you made any changes in file Vim gives error code `E37` in this case:
- To save and exit, type `:wq`
- To ignore changes and exit, type `:q!`

**OR**
- Type ZZ (same as `:wq`)

## Bare minimum functionality
Most likely you'll find yourself in "normal" mode, it allows you to enter commands by pressing the colon `:` key.
To get here from other modes you can type `ctrl + c` or `escape`.


To edit text and move around in a familiar way press `i`, for "insert" mode.
Try to move around with the arrow keys in "insert" mode.


Depending on the configuration, you may enter a file browser by typing and entering the command `:e .` in "normal" mode. The 'e' stands for edit, and the period for the file or directory.

## Pasting blocks of code
Very often you will find yourself looking for solutions to problems, and finding someone has written a block of code that does exactly what you want.
If you try to copy and paste the code directly into Vim you might find that the code is weirdly formatted or hasnt't been pasted correctly.
This is due to the fact that vim reads each character that you paste one after the other, meaning any key-combinations that activates a Vim shortcut will be executed and Vim will try (and fail) to automatically indent the pasted code.

To overcome this you can use Vim's **Paste mode** which you can activate by entering normal mode (press `escape` or `crtl + c`) and type `:set paste`, then press ENTER.
You are now in *paste* mode.
You can then enter insert mode with `i` and paste the block of text/code without any issues!
To return to regular Vim without paste mode you can enter normal mode (`escape` or `crtl + c`) and type `:set nopaste`, and press ENTER

## Other Useful Commands
Vim is a very powerful editor when used correctly. Below are some useful commands you can quickly pick up to improve your Vim skills. You should give these a try (First make sure you're in `normal mode`!):
- `cc` - Clears the contents of the current line and places you in insert mode at the correct indentation. Essentially a 'reset' button for the current line.
- `dd` - Deletes the current line.
- `ci)` or `ci(` - Deletes the contents inside two opposite parentheses and places you in `insert` mode. Use this to change the paramaters of a function quickly. `ci{`, `ci[`, `ci"`, and `ci'` work in a similar way!
- `ciw` - Changes the body of the word (token) the cursor is over. You can avoid a lot of movement and selection with this command.
- Use `f` in combination with another character to jump to the next occurence of that letter in the line. E.g. `f,` jumps to the next comma after the cursor; `f)` jumps to the next closing parenthesis. You can use `;` afterwords to repeat this! So if you wanted to jump to the third comma after the cursor, type `f,;;`. To go in the reverse direction, you can use `F` instead.
- Use `<C-O>` (Control + O) to retrace your movements. `<C-I>` lets you go forward through your movements, opposite to `<C-O>`. 
- `*` - Search for the current word under the cursor. After this, you can use `n` and `N` to move fowards and backwards through matches!

## I Want to Learn Vim!
Start by pressing `escape` to check if you're in normal mode, press colon `:`, type `Tutor`, and press `enter`.

## Other Resources
- <a href='https://vimgolf.com/' target='_blank' rel='nofollow'>Vim Golf</a> - A good way to learn from doing vim challenges to get the lowest amount of keystrokes. You can see solutions submitted by others if you can't figure the challenge out.
- <a href='http://vim.wikia.com/wiki/Best_Vim_Tips' target='_blank' rel='nofollow'>Vim Wikia: Best Vim Tips</a> - A collection of basic and advanced Vim tips. Very long and cryptic, but it's worth a read over.
- <a href='http://www.viemu.com/a-why-vi-vim.html' target='_blank' rel='nofollow'>Why, oh WHY, do those #?@! nutheads use vi?</a> - An article with great insight on reasons to use Vim.
- Read the rest of our Vim Guides to get a better understanding of this powerful editor.
