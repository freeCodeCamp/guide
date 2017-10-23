<p>A thread can be seen as a kind of process within a process. Usually, every process has its own address space and one single control thread. But in some cases it is better to have multiple threads who control the same address space. Thus, they act almost parallel, a litte bit like separate processes. </p>
<h2>Why threads can be useful</h2>
Threads are more light-weight than full processes. They make the program easier and more flexible because they can be easily created and destroyed. If one of them blocks, the other ones can continue unimpaired. This also leads to a better performance. 
