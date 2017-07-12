---
title: Npm Behind A Proxy Server
---
## Use-cases

You might need to modify `npm install` commands that access remote repositories ([npmjs](https://www.npmjs.com/), for example) for installing Node JS modules; if your internet access is through a [proxy server](https://en.wikipedia.org/wiki/Proxy_server).

Proxy servers are common in college and business type environments.

You can [locate your proxy settings](http://www.wikihow.com/Change-Proxy-Settings) from your browser's settings panel.

## Using Proxy with NPM

Once you have obtained the proxy settings (server URL, port, username and password); you need to configure your `npm` configurations as follows.

    $ npm config set proxy http://<username>:<password>@<proxy-server-url>:<port>
    $ npm config set https-proxy http://<username>:<password>@<proxy-server-url>:<port>

You would have to replace `<username>`, `<password>`, `<proxy-server-url>`, `<port>` with the values specific to your proxy server credentials.

These fields are optional. For instance, your proxy server might not even require `<username>` and `<password>`, or that it might be running on port 80 (in which case `<port>` is not required).

Once you have set these, your `npm install`, `npm i -g` etc. would work properly.

## When Not to Use

You should not have to use `npm` commands with proxy settings, if either of the following happens:

> *   Your system administrator or corporate policy does not allow you to access remote `npm` repositories from NPM-JS, for instance.
> *   The remote repository of Node modules in question is not in your machine, but it's within the internal network.

## Unset Proxy Settings

Use [this](http://luxiyalu.com/how-to-remove-all-npm-proxy-settings/) blog post to unset your proxy settings. You can also manually remove the lines specifying your proxy settings from your `.npmrc` [file](https://docs.npmjs.com/files/npmrc).

## Resources

You may use the following resources for further reading on this:-

> *   [Can I Log In Behind A Proxy Server](https://github.com/npm/npm/issues/9401#issuecomment-134569585)
> *   [NPM Behind A Corporate Proxy](http://intenseagile.com/2015/09/04/npm-behind-proxy.html)