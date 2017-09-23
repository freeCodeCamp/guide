---
title: How to Create a Sudo User on Ubuntu
---
## How to Create a Sudo User on Ubuntu

Your installed Linux distribution might have already a root account. This is how you can let an exisiting
user use the <i>sudo</i> command. The sudo command is required if you want to install software or better 
packages like for instance the npm package. 

In order to do this you must login as root or being able to sudo. 
Afterwards you write 
<pre>usermod -a -G sudo <username></pre>

Make sure that &lt;username&gt; is actually an existing user. In case it isn't just type in 
  <pre>adduser &lt;username&gt;</pre> 


<!-- The article goes here, in GitHub-flavored Markdown. Feel free to add YouTube videos, images, and CodePen/JSBin embeds  -->

#### More Information:
I recommend to check out articles and question on <a href="askubuntu.com">askubuntu.com</a> . 
Especially <a href="https://askubuntu.com/questions/7477/how-can-i-add-a-new-user-as-sudoer-using-the-command-line">this question</a>. 



