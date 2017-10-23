---
title: Ddos Denial of Service Attacks
---
## Ddos Denial of Service Attacks

This is a stub. <a href='https://github.com/freecodecamp/guides/tree/master/src/pages/security/ddos-denial-of-service-attacks/index.md' target='_blank' rel='nofollow'>Help our community expand it</a>.

<a href='https://github.com/freecodecamp/guides/blob/master/README.md' target='_blank' rel='nofollow'>This quick style guide will help ensure your pull request gets accepted</a>.

 DDOS Attacks

	A DDOS attack is a type of denial of service cyber attack. Cyber attackers seek to make a machines or other network resources unavailable to users by disrupting services of online hosts. This is accomplished by overloading the servers. Flooding servers with fake requests in an attempt to overload systems and prevent some or all legitimate requests from being fulfilled. The legitimate traffic can’t get in because the malicious traffic has overwhelmed resources. 
	In a distributed denial-of-service attack (DDoS attack), the incoming traffic flooding the victim originates from many different sources. This effectively makes it impossible to stop the attack simply by blocking a single source. Multiple IP (internet protocol) addresses are often used. Sometimes thousands of IP addresses are used. This makes commonplace security measures such as filtering less effective. 
	Attackers use networks of infected computers, or smart devices, known as 'botnets', by spreading malicious software through emails, websites and social media. Once infected, these machines can be controlled remotely, without their owners' knowledge, and used like an army to launch an attack against any target.  
	There are many many types of denial of service and distributed denial of service attacks. Types of attacks are created or modified daily. Here is a basic overview courtesy of Webedia: For more info:  (https://www.webopedia.com/TERM/D/DDoS_attack.html)

Types of DDOS attacks:  

Traffic attacks: Traffic flooding attacks send a huge volume of TCP (Transmission Control Protocol), UDP (User Datagram Protocol) and ICPM (Internet Control Message Protocol) packets to the target. Legitimate requests get lost and these attacks may be accompanied by malware exploitation.
Bandwidth attacks: This DDoS attack overloads the target with massive amounts of junk data. This results in a loss of network bandwidth and equipment resources and can lead to a complete denial of service.

Application attacks: Application-layer data messages can deplete resources in the application layer, leaving the target's system services unavailable.

Prevention:
	Keep routers and network hardware up to date and current. Make sure your firewall is configured properly. Consider 3rd party solutions for corporations. Contact your ISP early if your network performance is significantly decreased.

If you run your own server: 

• rate limit your router to prevent your Web server being overwhelmed

• add filters to tell your router to drop packets from obvious sources of attack

• timeout half-open connections more aggressively

• drop spoofed or malformed packages

• set lower SYN, ICMP, and UDP flood drop thresholds

(courtesy of https://www.esecurityplanet.com/network-security/5-tips-for-fighting-DDoS-attacks.html)

If you don’t run your own server: Contact your ISP or hosting provider.
#### More Information:
<!-- Please add any articles you think might be helpful to read before writing the article -->
Sources:
(https://www.webopedia.com/TERM/D/DDoS_attack.html)
https://www.esecurityplanet.com/network-security/5-tips-for-fighting-DDoS-attacks.html)
