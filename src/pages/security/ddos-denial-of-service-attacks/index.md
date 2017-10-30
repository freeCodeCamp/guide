---
title: Ddos Denial of Service Attacks
---
## Ddos Denial of Service Attacks

This is a stub. <a href='https://github.com/freecodecamp/guides/tree/master/src/pages/security/ddos-denial-of-service-attacks/index.md' target='_blank' rel='nofollow'>Help our community expand it</a>.

<a href='https://github.com/freecodecamp/guides/blob/master/README.md' target='_blank' rel='nofollow'>This quick style guide will help ensure your pull request gets accepted</a>.

<!-- The article goes here, in GitHub-flavored Markdown. Feel free to add YouTube videos, images, and CodePen/JSBin embeds  -->
When you punch someone, maybe they can walk away, but what about if they are punched 10 times, or even 100 or 1000 times? He can get injured maybe unconscious or even die. Similarly, when we are using a website (watching the video, filling forms or just clicking stuff) we are punching it once and the website runs normally. Have you ever faced a situation like “The website is currently busy or unavailable”? It happens when a lot of people are punching it (surfing it). For example, when they announce our board results, a website often crashes. So how can you crash a website without using 100000 people? The answer lies in how you can beat a person alone? Kung fu possibly? Well, we don’t need Kung fu but instead a technique called DoS (Denial Of Service). This attack is used to crash the website or make it slow. There are many programs/scripts that can send many requests to a website in one second and make it crash. Interesting…Isn’t it? Oh, you want to know about DDoS too? When a DoS is performed, many computers (or should I say systems) are simultaneously on the same website. So now imagine 10 people punching one guy constantly…Can he survive? What about 100 people?
There are three types of DoS attacks. Just like Kung Fu has different techniques like “Snake, Mentis, Dragon etc.” There is no best style. Every attack has its own specialty. You can’t defeat all enemies with one type of attack (I will not talk about Tekken here). Every opponent (website) has its own weakness. It’s time for me to introduce you to three styles (types) of DoS:
1) Protocol Level Attack: Simply, this type of attack directly attack the server. It tries to eat up all resources of the server or intermediate systems as Firewall/Load Balancers.It includes SYN floods, fragmented packet attacks, Ping of Death, Smurf DDoS and more. Actually, this attack resembles your simple kicks and punches, it means this attack works well.It is measured in Packets per second.
2) Application Layer Based Attacks: This attack is your special attack.It can finish the target in minutes if the target is vulnerable to it.It targets the software (Application layer) like windows, OpenBSD, Apache etc.Its magnitude is measured in Requests per second.
3) Volume Based Attack: When everything fails (this is just an example, do not think that this is the last thing you can try) you just try attacking as fast as you can like (like you press W A S D keys like mads in Tekken). It includes UDP floods, ICMP floods, and other spoofed-packet floods. The attack’s goal is to saturate the bandwidth of the attacked site, and magnitude is measured in bits per second (Bps).
So you guys want tools to DoS? But there are two things before you start DoSing a site:
1) Internet Speed: This will determine the power and number of punches you are going to attack the person (website) with. So make sure you have a REALLY GOOD internet connection
2) Anonymity: So you nearly killed him with your new skills but what if he reports to police. They will make a sketch of yours and will put you in prison. So always wear a mask. You can check my post about anonymity.
Now let’s talk about DoS tools:
1. GoldenEye:http://tinyurl.com/hkjwf2qIt is a powerful python script. It can even destroy a server in less than a minute.
2. HULK:http://tinyurl.com/hx5vzsx HULK is another nice DOS attacking tool that generates a unique request for each and every generated request to obfuscated traffic at a web server. This tool uses many other techniques to avoid attack detection via known patterns.It has a list of known user agents to use randomly with requests. It also uses referrer forgery and it can bypass caching engines, thus it directly hits the server’s resource pool.The developer of the tool tested it on an IIS 7 web server with 4 GB RAM. This tool brought the server down in under one minute.
3. R-U-Dead-Yet:http://tinyurl.com/3yysat3R-U-Dead-Yet is an HTTP post-DOS attack tool.For short, it is also known as RUDY. It performs a DOS attack with a long form field submission via the POST method. This tool comes with an interactive console menu.It detects forms on a given URL and lets users select which forms and fields should be used for a POST-based DOS attack.
4. Tor’s Hammer:http://tinyurl.com/jofb2cgIt is a slow post tool written in Python. This tool has an extra advantage: It can be run through a TOR network to be anonymous while performing the attack.It is an effective tool that can kill Apache or IIS servers in few seconds.
5. PyLoris:http://tinyurl.com/2wmopkePyLoris is said to be a testing tool for servers.It can be used to perform DOS attacks on a service. This tool can utilize SOCKS proxies and SSL connections to perform a DOS attack on a server.It can target various protocols, including HTTP, FTP, SMTP, IMAP, and Telnet.The latest version of the tool comes with a simple and easy-to-use GUI. Unlike other traditional DOS attacking tools, this tool directly hits the service.
6. DAVOSET: http://tinyurl.com/hxemn9eDAVOSET is yet another nice tool for performing DDOS attacks. The latest version of the tool has added support for cookies along with many other features.
7. Sloworis: http://tinyurl.com/zyu73jlIts an awesome tool which makes a server busy by sending partial requests.
You can google for how to use them like “How to use GoldenEye dos”.
So now we know how to attack, but opponents may also try to fight using a Web Application like CloudFlare. It’s their shield (some sort of Firewall) against our Kung Fu (DoS attack).So how to break this shield?Well you cant* break it, but there is a thing that you try, Punch him in the face, not on the shield. It means we should not attack the IP address of the website if it is using CloudFlare (shield) instead we should attack its real IP address (On face). Now the question is how to find the real IP address? Well, there are four basic methods.
Method 1: You can use following commands to check for real IP address in cmd/terminal.pingdirect-connect.domain.comORpingdirect.domain.comORpingftp.domain.comORpingcpanel.domain.comORpingmail.domain.com.
Method 2: If there is an option to sign up/register then create an account by using your Email ID. When they will send any welcome email, just check its header.
Method 3: It uses NMap, type in terminal# nmap –script dns-brute -sn <target>It will give you the real IP address of the website.
Method 4: Use an online service like www.crimeflare.com/cfs.htmlORiphostinfo.com/cloudflare/.

#### More Information:
<!-- Please add any articles you think might be helpful to read before writing the article -->


