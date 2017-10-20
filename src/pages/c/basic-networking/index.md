---
title: Basic Networking
---
## Basic Networking

This is a stub. <a href='https://github.com/freecodecamp/guides/tree/master/src/pages/agile/acceptance-testing/index.md' target='_blank' rel='nofollow'>Help our community expand it</a>.

<a href='https://github.com/freecodecamp/guides/blob/master/README.md' target='_blank' rel='nofollow'>This quick style guide will help ensure your pull request gets accepted</a>.

<!-- The article goes here, in GitHub-flavored Markdown. Feel free to add YouTube videos, images, and CodePen/JSBin embeds  -->

#### More Information:
<!-- Please add any articles you think might be helpful to read before writing the article -->

Basic Networking in C Mainly Invloves opening a socket and communicating throught them. Hence then comes the question, what is a Socket?

##What is Socket
A socket is one endpoint of a two-way communication link between two programs running on the network. A socket is bound to a port number so that the TCP layer can identify the application that data is destined to be sent to. An endpoint is a combination of an IP address and a port number.

Hence, when a program is running on a network, it is available to access from different locations other than the local location. By different locations i mean all the computers on the same network can access it. But, how will they?. Hence every program registers itself with a Port number. Think of port number as the Apartment Number in a huge apartment. So, if a post comes till the apartment, the apartment number tells it to go to a specific Apartment.

But how will it come till the Apartment. So every apartment will have a unique wordings which we call as Address. Post office looks at those unique string(Address) and decides the destination of the letter. In this case, every computer connected to a network will have an IP Address which is like an address in the real life.

Hence, for a computer connected to a network, to communicate with other computers on the same network it needs to know their IPAddresses. To communicate with specific program on a specific computer, you also need the port number( Apt number from Analogy).



