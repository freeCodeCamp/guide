---
title: Certbot
---
## Certbot

Certbot is an easy-to-use automatic client that fetches and deploys SSL/TLS certificates for your webserver. Certbot was developed by EFF and others as a client for Let’s Encrypt and was previously known as “the official Let’s Encrypt client” or “the Let’s Encrypt Python client.” Certbot will also work with any other CAs that support the ACME protocol.

While there are many other clients that implement the ACME protocol to fetch certificates, Certbot is the most extensive client and can automatically configure your webserver to start serving over HTTPS immediately. For Apache, it can also optionally automate security tasks such as tuning ciphersuites and enabling important security features such as HTTP → HTTPS redirects, OCSP stapling, HSTS, and upgrade-insecure-requests.

Certbot is part of EFF’s larger effort to encrypt the entire Internet. Websites need to use HTTPS to secure the web. Along with HTTPS Everywhere, Certbot aims to build a network that is more structurally private, safe, and protected against censorship.

Certbot is the work of many authors, including a team of EFF staff and numerous open source contributors.

#### More Information:
<!-- Please add any articles you think might be helpful to read before writing the article -->
https://certbot.eff.org/
Automatically enable HTTPS on your website with EFF's Certbot, deploying Let's Encrypt certificates.
