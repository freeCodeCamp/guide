---
title: Autocompleting bash scripts
---

As you might know, you can use the [TAB] button to autocomplete you commands in bash. For example, you can press [tab] when typing out a filename, and it will autocomplete:

```
zach@marigold:~$ cat myFi#[tab]#
zach@marigold:~$ cat myFile.txt
```

If you have a bash script that you've written that takes a set of static parameters, you can create a file in /etc/bash_completion.d/$COMMAND_NAME. Then, by pressing <tab>, bash will suggest the parameters you've selected.

Read more:
<a href="https://askubuntu.com/questions/68175/how-to-create-script-with-auto-complete">Askubuntu</a>
<a href="http://www.gnu.org/s/bash/manual/bash.html#Programmable-Completion">GNU documentation</a>


## Creating your script

Let's say your script is called myping.sh, and it takes a single parameter: the IP address you want to ping:

```
#/bin/bash
echo "Pinging server ${1}..."
ping "$1"
```

Maybe you want to have a set of IP addresses that you want to be able to quickly ping, like google's DNS servers (8.8.8.8, 8.8.4.4). 


## Creating the bash completion script

Now that you have your script all set, you can configure your autocompletion settings. Create a file "/etc/bash_completion.d/scriptName" (in your case, "/etc/bash_completion.d/myping,sh"), and enter the following lines:

```
# /etc/bash_completion.d/foo
_foo() 
{
    local cur prev opts
    COMPREPLY=()
    cur="${COMP_WORDS[COMP_CWORD]}"
    prev="${COMP_WORDS[COMP_CWORD-1]}"

	# Replace the contents of this variable, $opts, with the autocompletion words you want in your script.

    opts="8.8.8.8 8.8.4.4 www.google.com www.myserver.ca"

    if [[ ${cur} == -* ]] ; then
        COMPREPLY=( $(compgen -W "${opts}" -- ${cur}) )
        return 0
    fi
}
complete -F _foo foo
```

Make sure to change the $opts variable in this file for your own script, if you want a different autocompletion suggestion for your script.


## Testing it out

Open a new terminal, and test out your command with tab completion:

```
zach@marigold:~$ myping.sh [tab x2]
8.8.8.8		8.8.4.4		www.google.com		www.myserver.ca

zach@marigold:~$ myping.sh www.mys[tab]
zach@marigold:~$ myping.sh www.myserver.ca
```

As you can see, the bash terminal suggested those addresses for your script, just like how you configured it in "/etc/bash_completion.d/".
