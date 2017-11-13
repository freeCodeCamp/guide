---
title: Ddos Denial of Service Attacks
---
## DDoS (Distributed Denial of Service) Attacks

Denial of service attacks prevent an internet service from working at normal capacity by consuming resources. This can take the form of 
bandwidth congestion that prevents legitimate traffic from reaching a site, or an application layer attack that floods a server with requests, resulting in socket exhaustion.

A distributed denial of service attack involves many machines participating in an attack on a target. Internet-connected computers or devices infected with malware, known collectively as "botnets," can be coordinated by an attacker with software.

The attacks often exploit features of common internet protocols. 

- Flood attacks overwhelm a target and exhaust resources
	- SYN floods employ malformed packets and half-open TCP connections
	- ICMP floods use a high volume of ICMP "echo" requests 
	- STOMP (Simple Text Oriented Messaging Protocol) floods

- Amplification attacks receive a larger answer than the original request. They are often seen in conjunction with Reflection attacks, where the attacker spoofs the source of the requests to the IP address of the target.
	- [DNSSEC UDP payloads] (https://isc.sans.edu/forums/diary/How+have+reflective+DNS+DDOS+attacks+changed/15094/)
	- [NTP reflection with monlist](https://isc.sans.edu/forums/diary/NTP+reflection+attack/17300/)
	- [chargen] (https://isc.sans.edu/forums/diary/A+Chargenbased+DDoS+Chargen+is+still+a+thing/15647/)


####Example mitigation methods:
Firewall filters
volumetric ratelimiting by protocol type
[BCP38](https://tools.ietf.org/pdf/bcp38.pdf)- a recommendation suggesting that ISPs filter forged traffic


#### More Information:
[DDoS Quick Guide - US-CERT](https://www.us-cert.gov/sites/default/files/publications/DDoS%20Quick%20Guide.pdf)
[SANS Security Laboratory - Methods of Attack: Denial of Service](https://www.sans.edu/cyber-research/security-laboratory/article/denial-of-service)


