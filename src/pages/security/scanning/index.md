---
title: Scanning
---
## Scanning

Scanning is the second phase out of the typical five phases of penetration testing. The phase of scanning requires the application of technical tools to gather further intelligence on your target, but in thise case, the intel being sought is more commonly about the systems that they have in place.<sup>1</sup> 

There are three main goals:
<ol>
  <li>Determining if a system is alive</li>
  <li>Port scanning the system</li>
  <li>Scanning the system for vulnerabilities<sup>2</sup></li>
</ol>

### Determining if the system is alive

One way to determine if the target system is alive is by using the <b>ping</b> command. 

For example:
```
ping <target_ip_address> -c <number_of_packets_to_send>
ping 10.10.0.1 -c 4
```

If the target system is alive, you should get a response back that looks similar to below.

```
Pinging 10.10.0.1 with 32 bytes of data:

Reply from 10.0.0.1: bytes=32 time=26ms TTL=240
Reply from 10.0.0.1: bytes=32 time=26ms TTL=240
Reply from 10.0.0.1: bytes=32 time=26ms TTL=240
Reply from 10.0.0.1: bytes=32 time=26ms TTL=240

Ping statistics for 10.10.0.1:
    Packets: Sent = 4, Received = 4, Lost = 0 (0% loss),
Approximate round trip times in milliseconds:
    Minimum = 26ms, Maximum = 26ms, Average = 26ms
```
<ul>
  <li><b>Reply from</b> indicates that our ICMP Echo Request packet was received an ICMP Echo Reply packet was sent back.</li>
  <li><b>Bytes=32</b> tells us that the size of the packet that was sent.</li>
  <li><b>time=26ms</b> lets us know how the combined time it took the ICMP Echo Request packet to get to the target and for the ICMP Echo Reply packet to come back to our machine.</li>
  <li><b>TTL=240</b> is a Time To Live value that tells us the maximum number of hops that the packet would take before it would drop.</li>
</ul>

<!-- Could have more information about ping sweeps in order to ping multiple hosts -->

### Port scanning the system
<!-- Need more help with Port scanning -->

### Scanning the system for vulnerabilities
<!-- Need more help with Vulnerability scanning -->

#### More Information:
<ul>
  <li>How to Ping in Linux https://www.wikihow.com/Ping-in-Linux </li>
</ul>

### Sources
<ol>
  <li>Summarizing The Five Phases of Penetration Testing. (2015, May 06). Retrieved October 26, 2017, from https://www.cybrary.it/2015/05/summarizing-the-five-phases-of-penetration-testing/<li>
  <li>Engebretson, P. (2013). The Basics of Hacking and Penetration Testing: Ethical Hacking and Penetration Testing Made Easy Ed. 2. Syngress.</li>
</ol>
