---
title: Packet Filtering
---
## Packet Filtering

This is a stub. <a href='https://github.com/freecodecamp/guides/tree/master/src/pages/security/packet-filtering/index.md' target='_blank' rel='nofollow'>Help our community expand it</a>.

<a href='https://github.com/freecodecamp/guides/blob/master/README.md' target='_blank' rel='nofollow'>This quick style guide will help ensure your pull request gets accepted</a>.

<!-- The article goes here, in GitHub-flavored Markdown. Feel free to add YouTube videos, images, and CodePen/JSBin embeds  -->
Packet filtering is a network security mechanism that works by controlling what data can flow to and from a network.

To transfer information across a network, the information has to be broken up into small pieces, each of which is sent separately. Breaking the information into pieces allows many systems to share the network, each sending pieces in turn. In IP networking, those small pieces of data are called packets . All data transfer across IP networks happens in the form of packets.

The basic device that interconnects IP networks is called a router . A router may be a dedicated piece of hardware that has no other purpose, or it may be a piece of software that runs on a general-purpose UNIX or PC ( MS-DOS , Windows, Macintosh, or other) system. Packets traversing an internetwork (a network of networks) travel from router to router until they reach their destination. The Internet itself is sort of the granddaddy of internetworks - the ultimate "network of networks."

A router has to make a routing decision about each packet it receives; it has to decide how to send that packet on towards its ultimate destination. In general, a packet carries no information to help the router in this decision, other than the IP address of the packet's ultimate destination. The packet tells the router where it wants to go, but not how to get there. Routers communicate with each other using "routing protocols" such as the Routing Information Protocol ( RIP ) and Open Shortest Path First ( OSPF ) to build routing tables in memory to determine how to get the packets to their destinations. When routing a packet, a router compares the packet's destination address to entries in the routing table and sends the packet onward as directed by the routing table. Often, there won't be a specific route for a particular destination, and the router will use a "default route;" generally, such a route directs the packet towards smarter or better-connected routers. (The default routes at most sites point towards the Internet.)

In determining how to forward a packet towards its destination, a normal router looks only at a normal packet's destination address and asks only " How can I forward this packet?" A packet filtering router also considers the question " Should I forward this packet?" The packet filtering router answers that question according to the security policy programmed into the router via the packet filtering rules.

    NOTE: Some unusual packets do contain routing information about how they are to reach their destination, using the "source route" IP option. These packets, called source-routed packets , are discussed in the section called " IP Options" below.

Why Packet Filtering?

Packet filtering lets you control (allow or disallow) data transfer based on:

    The address the data is (supposedly) coming from

    The address the data is going to

    The session and application protocols being used to transfer the data

Most packet filtering systems don't do anything based on the data itself; they don't make content-based decisions.[1] Packet filtering will let you say:

    [1] Some packages, like CheckPoint's FireWall-1 product, are limited exceptions to this rule.

    Don't let anybody use Telnet (an application protocol) to log in from the outside.

or:

    Let everybody send us email via SMTP (another application protocol).

or even:

    That machine can send us news via NNTP (yet another application protocol), but no other machines can do so.

However, it won't let you say:

    This user can Telnet in from outside, but no other users can do so.

because "user" isn't something a packet filtering system can identify. And, it won't let you say:

    You can transfer these files but not those files.

because "file" also isn't something the packet filtering system can identify.

The main advantage of packet filtering is leverage: it allows you to provide, in a single place, particular protections for an entire network. Consider the Telnet service as an example. If you disallow Telnet by turning off the Telnet server on all your hosts, you still have to worry about someone in your organization installing a new machine (or reinstalling an old one) with the Telnet server turned on. On the other hand, if Telnet is not allowed by your filtering router, such a new machine would be protected right from the start, regardless of whether or not its Telnet server was actually running. 

Routers also present a useful choke point for all of the traffic entering or leaving a network. Even if you have multiple routers for redundancy, you probably have far fewer routers, under much tighter control, than you have host machines.

Certain protections can be provided only by filtering routers, and then only if they are deployed in particular locations in your network. For example, it's a good idea to reject all packets that have internal source addresses - that is, packets that claim to be coming from internal machines but that are actually coming in from the outside - because such packets are usually part of address-spoofing attacks. In such attacks, an attacker is pretending to be coming from an internal machine. Decision-making of this kind can be done only in a filtering router at the perimeter of your network. Only a filtering router in that location (which is, by definition, the boundary between "inside" and "outside") is able to recognize such a packet, by looking at the source address and whether the packet came from the inside (the internal network connection) or the outside (the external network connection). 
Advantages of Packet Filtering

Packet filtering has a number of advantages.
One screening router can help protect an entire network

One of the key advantages of packet filtering is that a single, strategically placed packet filtering router can help protect an entire network. If there is only one router that connects your site to the Internet, you gain tremendous leverage on network security, regardless of the size of your site, by doing packet filtering on that router.
Packet filtering doesn't require user knowledge or cooperation

Unlike proxying,Proxy Systems , packet filtering doesn't require any custom software or configuration of client machines, nor does it require any special training or procedures for users. When a packet filtering router decides to let a packet through, the router is indistinguishable from a normal router. Ideally, users won't even realize it's there, unless they try to do something that is prohibited (presumably because it is a security problem) by the packet filtering router's filtering policy.

This "transparency" means that packet filtering can be done without the cooperation, and often without the knowledge, of users. The point is not that you can do this subversively, behind your users' backs (while actions like that are sometimes necessary - it all depends on the circumstances - they can be highly political). The point is that you can do packet filtering without their having to learn anything new to make it work, and without your having to depend on them to do (or not do) anything to make it work.
Packet filtering is widely available in many routers

Packet filtering capabilities are available in many hardware and software routing products, both commercial and freely available over the Internet. Most sites already have packet filtering capabilities available in the routers they use.

Most commercial router products, such as the routers from Livingston Enterprises and Cisco Systems, include packet filtering capabilities. Packet filtering capabilities are also available in a number of packages, such as Drawbridge, KarlBridge, and screend , that are freely distributed on the Internet. 
   

Disadvantages of Packet Filtering

Although packet filtering provides many advantages, there are some disadvantages to using packet filtering as well:
Current filtering tools are not perfect

Despite the widespread availability of packet filtering in various hardware and software packages, packet filtering is still not a perfect tool. The packet filtering capabilities of many of these products share, to a greater or lesser degree, common limitations:

    The packet filtering rules tend to be hard to configure. Although there is a range of difficulty, it mostly runs from slightly mind-twisting to brain-numbingly impossible.

    Once configured, the packet filtering rules tend to be hard to test.

    The packet filtering capabilities of many of the products are incomplete, making implementation of certain types of highly desirable filters difficult or impossible.

    Like anything else, packet filtering packages may have bugs in them; these bugs are more likely than proxying bugs to result in security problems. Usually, a proxy that fails simply stops passing data, while a failed packet filtering implementation may allow packets it should have denied.




#### More Information:
<!-- Please add any articles you think might be helpful to read before writing the article -->


