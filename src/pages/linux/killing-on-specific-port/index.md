## Killing a program running on specific port in Linux

### Intro to Problem
One day you could be asking yourself: can I open multiple web instances of my software and test it while developing? Of course, you can! This is one of reasons that every day we need to run software on distinct ports on computer socket.

Sometimes you can encounter a path that leads to cannot run something on a specific port because your previous execution is still running and you cant stop.

### The Solution
So, it is simple, `fuser 8080/tcp` this command will show you which program in running on port  8080` and its PID.
but we are interested in kill this thing so, lets add a `-k` on our command.

And `fuser -k 8080/tcp` this is it!

This command will kill the running instance at port `8080`. So now you can keep using the same port to rung your web instance.
