## Zsh?

Oh-My-Zsh is a framework for [Zsh](http://www.zsh.org), the Z shell.

- In order for Oh-My-Zsh to work, Zsh must be installed.
  - Please run `zsh --version` to confirm.
  - Expected result: `zsh 5.1.1` or more recent
- Additionally, Zsh should be set as your default shell.
  - Please run `echo $SHELL` from a new terminal to confirm.
  - Expected result: `usr/bin/zsh` or similar

## Install and set up zsh as default

If necessary, follow these steps to install Zsh:

1. There are two main ways to install Zsh
  - with the package manager of your choice, _e.g._ `sudo apt-get install zsh` (see [below for more examples](#how-to-install-zsh-in-many-platforms))
  - from [source](http://zsh.sourceforge.net/Arc/source.html), following
        [instructions from the Zsh FAQ](http://zsh.sourceforge.net/FAQ/zshfaq01.html#l7)
2. Verify installation by running `zsh --version`. Expected result: `zsh 5.1.1` or more recent.
3. Make it your default shell: `chsh -s $(which zsh)`
  - Note that this will not work if Zsh is not in your authorized shells list (`/etc/shells`)
    or if you don't have permission to use `chsh`. If that's the case [you'll need to use a different procedure](https://www.google.com/search?q=zsh+default+without+chsh).
4. Log out and login back again to use your new default shell.
5. Test that it worked with `echo $SHELL`. Expected result: `/bin/zsh` or similar.
6. Test with `$SHELL --version`. Expected result: 'zsh 5.1.1' or similar

## How to install zsh in many platforms

### macOS

**Try `zsh --version` before installing it from Homebrew. If it's newer than 4.3.9
you _might_ be OK. Preferably newer than or equal to `5.0`.**

```sh
brew install zsh zsh-completions
```

Assuming you have [Homebrew](http://brew.sh/) installed. If not, most versions of
**macOS** ship zsh by default, but it's normally an older version.  Alternatively, you may
also use [MacPorts](https://www.macports.org/)

```sh
sudo port install zsh zsh-completions
```

### Ubuntu, Debian & derivatives

```sh
apt install zsh
```

If you don't have `apt`, the recommended package manager for end users
[ [1] ](http://askubuntu.com/a/446484)
[ [2] ](http://askubuntu.com/a/775264)
[ [3] ](https://help.ubuntu.com/lts/serverguide/apt.html)
[ [4] ](http://www.howtogeek.com/234583/simplify-command-line-package-management-with-apt-instead-of-apt-get/)
, you can try `apt-get` or `aptitude`.

[Other distributions that apply](https://en.wikipedia.org/wiki/List_of_Linux_distributions#Debian-based) include:
Linux Mint, elementary OS, Zorin OS, Raspbian, MX Linux.

### OpenSUSE

```sh
zypper install zsh
```

### Arch Linux

```sh
pacman -S zsh
```

### Void Linux

```sh
xbps-install zsh
```

### Fedora

```sh
dnf install zsh
```
### OpenBSD
To install the package:
```sh
pkg_add zsh
```
### FreeBSD
To install the package:
```sh
pkg install zsh
```
To install the port: 
```sh
cd /usr/ports/shells/zsh/ && make install clean
```
To reduce memory usage, optionally enable zsh-mem options with
![](https://i.imgur.com/l4id6Ek.png)
```sh
make config
```
before running "make install".

### Centos/RHEL
```sh
sudo yum update && sudo yum -y install zsh
```
### Cygwin
Install the zsh package using the installer. Unfortunately Cygwin doesn't have a standard command line interface.

The easiest way to change the default shell is to set your SHELL user environment variable. Search for "Edit Environment variables for your account" to bring up the environment variables window, create a new variable named "SHELL" and give it the value "/usr/bin/zsh/".

*Alternatively:*
Open Cygwin (in BASH) then type: 
```sh
sudo nano ~/.bashrc
```
Once the .bashrc file is open, add this line to the very top:
```sh
exec zsh
```
Close and save the file. 
Close and reopen Cygwin. 
It will execute the command every time you load the terminal and run your zsh shell.

### Solus

```sh
eopkg it zsh
```

### Funtoo/Gentoo
```sh
emerge app-shells/zsh
```

### Alpine Linux
```sh
apk add zsh
```

### Add yours

If you know a platform that is not covered, edit this page and add it!
