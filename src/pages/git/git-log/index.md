---
title: Git Log
---
## Git Log

The `git log` command allows you to view history of commits that have been downloaded to your local machine.

Command syntax:

    git log OPTIONS REVISION-RANGE -- PATH

where:
* **OPTIONS** are the command options, like `--follow`. You can see all available options in the [Git Documentation](https://git-scm.com/docs/git-log#_options).
* **REVISION-RANGE** is a parameter that specifies range of commits, that user wants to see. If this parameter is not specified, then the whole history of current commit is shown by default. Full list of ways to use this parameter is available in [Specifying Ranges](https://git-scm.com/docs/gitrevisions) documentation.
* **-- PATH** is a file path that can be specified is user wants to see history about one file only.

## Formatting

Developers often create alias for this command to make its output more pretty and readable. You can see examples of pretty `git log` in [Pretty git logs with `git lg`](https://www.jacobtomlinson.co.uk/quick%20tip/2016/01/18/pretty-git-logs-with-git-lg/) article or read StackOverflow thread [Pretty git branch graphs](https://stackoverflow.com/questions/1057564/pretty-git-branch-graphs).

## Other Resources

* [Git Documentation on git-log](https://git-scm.com/docs/git-log)
