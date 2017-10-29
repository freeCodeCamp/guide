---
title: Tor (The Onion Router)
---
## Tor
Tor stands for "The Onion Router", which is a free software that helps anonymize its users Internet usage, maintained by the Tor Project.
In addition to the Onion Router, the Tor Project maintains a bundle of software, most notably a web browser, which is often also
called Tor.

The Onion Network works by bouncing a user's requests through a large worldwide, volunteer network of computers. It sends the requests through the system encrypted, only decrypting them when they get to the 'exit node', the last computer in the network for any given request before the request is sent to its destination. This makes the message look like its coming from somewhere other than where it actually originated.

Tor has gotten a lot of negative attention because of its criminal use case. Criminals, such as drug dealers, can and often do use Tor to cover their tracks, and to set up 'dark markets' to sell their wares without compromising themselves. The 2017 shutdowns of AlphaBay and Hansa certainly prove that this is hardly foolproof.

Tor has many other usecases. Journalists reporting from areas where their lives may be endangered by the nature of the stories they are breaking, whistleblowers, and people living in oppressive regimes all fit into Tor's more benign usecases, along with anyone more interested in online anonymity.

Edward Snowden, the NSA whistleblower, has mentioned Tor favorably as a very well put-together program. Famously, an internal NSA memo that was leaked referred to it as "the king of high-secure, low-latency internet anonymity There are no contenders to the throne in waiting".

#### How it Work

Tor works on the concept of ‘onion routing’ method in which the user data is first encrypted and then transferred through different relays present in the Tor network, thus creating a multi-layered encryption (layers like an onion), thereby keeping the identity of the user safe.

One encryption layer is decrypted at each successive Tor relay, and the remaining data is forwarded to any random relay until it reaches its destination server. For the destination server, the last Tor node/exit relay appears as the origin of the data. It is thus tough to trace the identity of the user or the server by any surveillance system acting in the mid-way.

Other than providing anonymity to standalone users, Tor can also provide anonymity to websites and servers in the form of Tor Hidden Services. Also, P2P applications like BitTorrent can be configured to use the Tor network and download torrent files.

#### More Information:
<a href='https://www.torproject.org' target='_blank' rel='nofollow'>The Tor Project</a>
<a href='https://www.theguardian.com/world/2013/oct/04/nsa-gchq-attack-tor-network-encryption' target='_blank' rel='nofollow'>NSA and GCHQ try to crack Tor</a>
