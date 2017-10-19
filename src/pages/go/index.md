---
title: Go
---
## Go

Go is a programming language created at Google in 2007 by Robert Griesemer, Rob Pike, and Ken Thompson. It is a compiled, statically-typed language in the tradition of Algol and C. It has garbage collection, limited structural typing, memory safety features, and CSP-style concurrent programming features added.

Go is a general purpose language so it can be used for almost anything. It has garbage collection so it is unsuitable for embedded or real-time software. Otherwise you can do whatever you want in it.

On the other hand Go is very much designed with server-side development in mind. Channels, goroutines, non-blocking IO built-in—all point to the preference for creating highly concurrent servers. In reality most Go projects are either web applications, pure socket servers (games, streaming media, proxies, load balancers, etc.) or clients connecting to multiple servers (like web crawlers).

For more information head to <a href='https://golang.org/' target='_blank' rel='nofollow'>Go's Homepage</a>.

Want a quick <a href='https://tour.golang.org/welcome/1' target='_blank' rel='nofollow'>Tour of Go?</a>

### Examples

Read input from stdin:

	func openStdinOrFile() io.Reader {
    var err error
    r := os.Stdin
    if len(os.Args) > 1 {
        r, err = os.Open(os.Args[1])
        if err != nil {
            panic(err)
        }
    }
    return r
}

	func main() {
    r := openStdinOrFile()
    readSomething(r)
}
