## Git rm

The ```git rm``` command allows you to remove files from the working tree and from the index.

### Remove file
Removes file from working tree and index.

```git rm file_name```

To remove file from index, but leave working tree files untouched use ```--cached``` option.

```git rm --cached file_name```

### Remove directory
To remove whole directory use ```-r``` option.

```gir rm -r dir_name```

To remove directory only from index use ```--cached``` option.

```git rm -r --cached dir_name```

**NOTE:** Do not forget to commit after removing files or directories. ```git commit -m 'Removed file_name'```
