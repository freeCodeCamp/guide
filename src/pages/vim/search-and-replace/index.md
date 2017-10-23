---
title: Search and Replace Basics
---
## Search
- `/pattern` - search for `pattern`. Note that you can use regular expressions for this.
- `?pattern` - search for a `pattern` backwards.
- `n` - search for the next occurrence of the searched pattern.
- `N` - search for the previous occurrence of the searched pattern.

## Replace
- `:s/old/new/g` - change all `old` in the current line and replace them with `new`
- `:%s/old/new/g` - search all `old` in all lines and replace them with `new`. Note that you can use regular expressions for this.

## Other Resources
- [Vim CheatSheet](https://vim.rtorr.com/) - A collection of the most commonly used commands and patterns in vim.
- [Interactive Vim Tutorial](http://www.openvim.com/) - An interactive tutorial that teaches most of the the commands that you need to get started in vim.