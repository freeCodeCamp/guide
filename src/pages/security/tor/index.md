---
title: Tor (The Onion Router)
---
## Tor
Tor stands for "**The Onion Router**", which is a free software that helps anonymize its users Internet usage, maintained by the Tor Project.
In addition to the Onion Router, the Tor Project maintains a bundle of software, most notably a web browser, which is often also
called Tor.

The Onion Network works by bouncing a user's requests through a large worldwide, volunteer network of computers. It sends the requests through the system encrypted, only decrypting them when they get to the 'exit node', the last computer in the network for any given request before the request is sent to its destination. This makes the message look like its coming from somewhere other than where it actually originated.

Tor has gotten a lot of negative attention because of its criminal use case. Criminals, such as drug dealers, can and often do use Tor to cover their tracks, and to set up 'dark markets' to sell their wares without compromising themselves. The 2017 shutdowns of AlphaBay and Hansa certainly prove that this is hardly foolproof.

Tor has many other usecases. Journalists reporting from areas where their lives may be endangered by the nature of the stories they are breaking, whistleblowers, and people living in oppressive regimes all fit into Tor's more benign usecases, along with anyone more interested in online anonymity.

Edward Snowden, the NSA whistleblower, has mentioned Tor favorably as a very well put-together program. Famously, an internal NSA memo that was leaked referred to it as "the king of high-secure, low-latency internet anonymity There are no contenders to the throne in waiting".

### Why we need Tor

Using Tor protects you against a common form of **Internet surveillance** known as "**traffic analysis.**" Traffic analysis can be used to infer who is talking to whom over a public network. Knowing the source and destination of your Internet traffic allows others to track your behavior and interests. This can impact your checkbook if, for example, an e-commerce site uses price discrimination based on your country or institution of origin. It can even threaten your job and physical safety by revealing who and where you are. For example, if you're travelling abroad and you connect to your employer's computers to check or send mail, you can inadvertently reveal your national origin and professional affiliation to anyone observing the network, even if the connection is encrypted.

How does traffic analysis work? Internet data packets have two parts: a data payload and a header used for routing. The data payload is whatever is being sent, whether that's an email message, a web page, or an audio file. Even if you encrypt the data payload of your communications, traffic analysis still reveals a great deal about what you're doing and, possibly, what you're saying. That's because it focuses on the header, which discloses source, destination, size, timing, and so on.

A basic problem for the privacy minded is that the recipient of your communications can see that you sent it by looking at headers. So can authorized intermediaries like Internet service providers, and sometimes unauthorized intermediaries as well. A very simple form of traffic analysis might involve sitting somewhere between sender and recipient on the network, looking at headers.

But there are also more powerful kinds of traffic analysis. Some attackers spy on multiple parts of the Internet and use sophisticated statistical techniques to track the communications patterns of many different organizations and individuals. Encryption does not help against these attackers, since it only hides the content of Internet traffic, not the headers. 

###Staying anonymous

Tor can't solve all anonymity problems. It focuses only on protecting the transport of data. You need to use protocol-specific support software if you don't want the sites you visit to see your identifying information. For example, you can use Tor Browser while browsing the web to withhold some information about your computer's configuration.

Also, to protect your anonymity, be smart. Don't provide your name or other revealing information in web forms. Be aware that, like all anonymizing networks that are fast enough for web browsing, Tor does not provide protection against end-to-end timing attacks: If your attacker can watch the traffic coming out of your computer, and also the traffic arriving at your chosen destination, he can use statistical analysis to discover that they are part of the same circuit. 

###Where can I get Tor?

In some countries the Tor Project website is blocked or censored and it is not possible to download Tor directly. The Tor Project hosts a Tor Browser (mirror on Github)[https://github.com/TheTorProject/gettorbrowser].

Using the GetTor service is another way to download Tor Browser when the Project website and mirrors are blocked.

#### More Information:
<a href='https://www.torproject.org' target='_blank' rel='nofollow'>The Tor Project</a>
<a href='https://www.theguardian.com/world/2013/oct/04/nsa-gchq-attack-tor-network-encryption' target='_blank' rel='nofollow'>NSA and GCHQ try to crack Tor</a>
