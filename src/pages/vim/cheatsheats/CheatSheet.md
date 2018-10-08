### VIM Movement Shortcuts
	i -- Insert at cursor
	a -- Append after the cursor
	I -- Insert at the start of the line
	A -- Insert at the end of the line
	j -- Move cursor down
	k -- Move cursor up
	h -- Move cursor left
	l -- Move cursor right
    w -- Move forward by words
    e -- Move to the end of the current word
    b -- Move backwards by words
    B -- Move backwards by WORDS(this is any sequence of letters without a whitespace)
    0 -- Jump to the start of the line
	^ -- Jump to the first non-whitespace character of the line
	$ -- Jump to the end of the line
    ( -- Jump to the previous sentence 
    ) -- Jump to the next sentence 
    { -- Jump to the previous paragraph
    } -- Jump to the next paragraph
	:<n> -- Jumpt to the line numbered n
		:0 -- For the first line
		:$ -- For the last line
    gg -- Jump to first line
    <n> gg -- Jump to n
    G -- Jump to last line
    f<char> -- Moves the cursor to the next <char>
    t<char> -- Moves the cursor to the cursor before the next <char>
        ; -- Moves the cursor to the next <char>
    <C-W> R -- Rotate window order
    <C-W> L -- Move Window to the far right
    <C-W> H -- Move Window to the far left
    <C-W> J -- Move Window to the very bottom
    <C-W> K -- Move Window to the very top
	
### VIM Edit Shortcuts
	u -- Undu
	C-r -- Redo
	<num> yy -- Yank 'num' number of lines
	<num> dd -- Cut 'num' number of lines
	p -- print lines
	r <char> -- Replaces character under the cursor with 'char'
	cw -- Change Word
    :digraph -- See all special characters and their digraph code
    C-k <char><char>-- In insert mode followed by character's two letter digraph code
    :r <filename> -- Insert the contents of this file below
    :r !<command> -- Execute the command and print it's output below
    x -- Delete character
    dw -- Delete word
    d{0/^/$} -- Delete till {beginning of line/first character of the line/end of the line}
    d{gg/G} -- Delete till {beginning of file/end of file}
    dd -- Delete line
    yy -- Copy line
    p -- Print after cursor
    P -- Print before cursor

### VIM Searching
    / <text> -- Searches for text
    n -- Next search result entry
    N -- Previous search result entry
    :%s/<original>/<replacement>/{/g/gc} -- Replaces the text {first instance/all instances in the file/All instances but asks for confirmation first} 

### VIM Visual Mode
    v -- Start visual mode
    V - Start line-wise visual mode
    C-v -- Start block-wise visual mode // Yet to understand
    Esc -- Exit visual mode
    ~ -- Switch case
    d -- Delete
    c -- Change
    y -- Yank
    > -- Shift right
    < -- Shift left

### VIM Sessions
    :mksession <session_name>.vim -- Store current session
    :source <session_name>.vim -- Open <session_name> session


### VIM Miscellaneous
    . -- Repeat previous command
    :!<command> -- Run shell command <command>

### VIM Random Stuff
    C-a -- Increment a number
    C-x -- Decrement a number

### VIM Tabs
	:tabnew -- Open a new tab
	gt -- Switch between tabs
	-o -- Flag to vim two open two tabs at the same time
	:sp <file2> -- To open another another by splitting the window horizontally 
	:vsp <file2> -- To open another another by splitting the window vertically
	C-w +/- -- Resize current window's height by one row more/less
	C-w >/< -- Resize current window's width by one column more/less
	C-w = -- Resize all windows to equal dimensions based on their splits

### Code Folding
    zf # j -- Creates a fold from the cursor down # lines.
    zf / -- String creates a fold from the cursor to string .
    zj -- Moves the cursor to the next fold.
    zk -- Moves the cursor to the previous fold.
    zo -- Opens a fold at the cursor.
    zO -- Opens all folds at the cursor.
    zc -- Close a fold at the cursor.
    zm -- Increases the foldlevel by one.
    zM -- Closes all open folds.
    zr -- Decreases the foldlevel by one.
    zR -- Decreases the foldlevel to zero -- all folds will be open.
    zd -- Deletes the fold at the cursor.
    zE -- Deletes all folds.
    [z -- Move to start of open fold.
    ]z -- Move to end of open fold.
