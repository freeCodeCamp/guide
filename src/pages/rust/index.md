---
title: Rust
---
# Rust
## Introduction

Rust is a systems programming language focused on three goals: safety, speed, and concurrency. It maintains these goals without having a garbage collector, making it a useful language for a number of use cases other languages aren’t good at: embedding in other languages, programs with specific space and time requirements, and writing low-level code, like device drivers and operating systems.

For more information head to <a href='https://www.rust-lang.org' target='_blank' rel='nofollow'>Rust's Homepage</a>.

## Installation

The developers of rust make it extremely easy to install and manage rust on your system. This is achieved through the tool `rustup` which allows you to not only install the rust compiler `rustc`, but also easily switch between stable, beta, and nightly versions of the compiler and keep them all up to date.

The official installation documentation can be found [here](https://doc.rust-lang.org/book/second-edition/ch01-01-installation.html).

### Linux or Mac

If you're running Linux or Mac, installation of `rustup` is best done through the terminal:

```bash
$ curl https://sh.rustup.rs -sSf | sh
```
This will download and run a script to your machine that installs the tool. The installation script automatically adds Rust to your system `PATH` after your next login.

### Windows

On Windows, go to the [rustup website](https://rustup.rs) and follow the instructions to download `rustup-init.exe`. Run that and follow the rest of the instructions it gives you.

### Updating

Once you have installed `rustup`, updating to newer versions is simple. All you need to run is:

```bash
$ rustup update
```
To view the current version number, commit hash, and commit date of your rust compiler, run the following command:

```bash
$ rustc --version
rustc x.y.z (abcabcabc yyyy-mm-dd)
```

### Uninstalling

Uninstalling rust from your system is as easy as installing it:

```bash
$ rustup self uninstall
```
