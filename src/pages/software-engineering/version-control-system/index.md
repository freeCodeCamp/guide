---
title: Version Control System
---
## Version Control System

A version control system (VCS) is an important part of any software engineering system. Version control allows the developer to backup and collaborate on code that they write. Version control is also sometimes used to separate things like the code being used in production, the code being used for experimental features, the code for proposed features, and more. 

Although there are many options for version control systems available, two are predominant: Subversion (SVN) and Git. Subversion is the older system. It starts with an initial code base, and when changes are added to the repository, they are marked as modifications with all the information needed to transform the original code base to the new codebase with the modification. To go back and forth between the versions, SVN undoes or reapplies the changes it has marked as having been made. In this way, it can help track and merge code easily. Git alternately takes a less efficient but arguably more stable solution. Each "commit" takes a snapshot of the current state of the code and saves it. Going back and forth is simply done by unpacking the versions of your choice. It is not as efficient as SVN with space, but is often chosen as the VCS for many projects today because of its ease of use and robustness.

Another important feature of version control systems is the ability to commit to a central repository. Often, this is the primary reason they are used. Companies or teams can host a central repository of the code base on a server that everyone can access. Then the team members can "pull" the latest version of the code, make edits to it then "push" it back to the central repository for everyone to access. This saves time and effort because it not only centralizes access but also automates for the most part the process of merging code written synchronously on different parts of the project. One popular service that acts as a repository for many projects is [GitHub](https://www.github.com/).

Don't forget, however, that a VCS may still be useful to you, even if your project is small or will not involve collaboration. Saving your code is good practice, and VCS's will help you to make more permanent saves and the ability to backtrack and undo changes if something unfortunate should happen to your code. Also, backing up your code on a remote location is always a good idea, and systems like Git will make that trivially easy to begin doing should you already be using it for version control.

<!-- The article goes here, in GitHub-flavored Markdown. Feel free to add YouTube videos, images, and CodePen/JSBin embeds  -->

#### More Information:
<!-- Please add any articles you think might be helpful to read before writing the article -->
- [Subversion](https://en.wikipedia.org/wiki/Apache_Subversion)  
- [Git](https://en.wikipedia.org/wiki/Git)

