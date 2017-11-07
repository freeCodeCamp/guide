---
title: Scanning
---
## Scanning

This is a stub. <a href='https://github.com/freecodecamp/guides/tree/master/src/pages/security/scanning/index.md' target='_blank' rel='nofollow'>Help our community expand it</a>.

<a href='https://github.com/freecodecamp/guides/blob/master/README.md' target='_blank' rel='nofollow'>This quick style guide will help ensure your pull request gets accepted</a>.

<!-- The article goes here, in GitHub-flavored Markdown. Feel free to add YouTube videos, images, and CodePen/JSBin embeds  -->

When we talk about security, different types of scanning can be found, like Network scanning, Web Application security scanning and footprinting.
Network scanning consists in both network port scanning and vulnerability scanning.

Network port scanning is the method of sending data packets via the network to a computing system's service port number, in order to identify the network services available on that system
This method is useful for troubleshooting system issues or for tightening the system's security.
This type of scanning is an information-gathering technique, but it can be seen as a prelud to an attack when performed by anonymous individuals.
One of the best tools to achive this type of scanning is Nmap (Network mapper).
As a result of the scan (like port scans or ping sweeps) we find details about which hosts are live on a IP addresses map, and the type of services they provide.
Inverse mapping is also used to ghater details about IP addresses that do not map live hosts.

Vulnerability scanning is a method used to discover vulnerabiities of the systems available on the network.
It is used to detect weak spots in software application or the operating system, and then to compromise or crash it.
One of the best tools used to achieve this type of scanning is nessus.

Network scanning is one of the three method used to gather information about a target.

Footprinting is the firts stage of a scan, during wich the attacker makes a profile of the targeted organization, analyzing the DNS (organization's Domain Name System), e-mail servers and IP addresses range.
This can be done using various tools, like dnslookup.
Then there is the network scanning.
The third part is enumaration stage. In this stage the attacker collects data like routing tables, network user and group names, SNMP (Simple Network Management Protocol), and so on.
#### More Information:
<!-- Please add any articles you think might be helpful to read before writing the article -->


