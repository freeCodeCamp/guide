## Threads

For faster execution of the program, you might consider using asynchronous programming. That way you can split the work between multiple threads. You can specify a custom ammount (there are limits tho) of thread for your program. 
One example of how spliting the work between multiple threads might help is doing requests to the servers. You can have your program executing basic tasks on UI thread and run API requests in the background.
