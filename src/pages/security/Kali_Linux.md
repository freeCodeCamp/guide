---
title: Kali Linux
---
# Kali Linux
It is a Debian-derived Linux distribution designed for digital forensics and penetration testing. It is maintained and funded by Offensive Security Ltd. 
Aharoni, Devon Kearns and Raphaël Hertzog are the core developers.It is a Debian-based Linux distribution aimed at advanced Penetration Testing and Security Auditing.
Kali contains several hundred tools which are geared towards various information security tasks, such as Penetration Testing, Security research, Computer Forensics and
Reverse Engineering.Kali Linux was released on the 13th March, 2013 as a complete, top-to-bottom rebuild of BackTrack Linux, adhering completely to Debian development
standards.
# What’s Different About Kali Linux?
Kali Linux is specifically geared to meet the requirements of professional penetration testing and security auditing. To achieve this, several core changes have been 
implemented in Kali Linux which reflect these needs:

1- Single user, root access by design: Due to the nature of security audits, Kali Linux is designed to be used in a “single, root user” scenario. Many of the tools used 
in penetration testing require escalated privileges, and while it’s generally sound policy to only enable root privileges when necessary, in the use cases that Kali Linux is aimed at, this approach would be a burden.

2- Network services disabled by default: Kali Linux contains systemd hooks that disable network services by default. These hooks allow us to install various services on 
Kali Linux, while ensuring that our distribution remains secure by default, no matter what packages are installed. Additional services such as Bluetooth are also 
blacklisted by default.

# Custom Linux kernel: 
Kali Linux uses an upstream kernel, patched for wireless injection.

A minimal and trusted set of repositories: given the aims and goals of Kali Linux, maintaining the integrity of the system as a whole is absolutely key. With that 
goal in mind, the set of upstream software sources which Kali uses is kept to an absolute minimum. Many new Kali users are tempted to add additional repositories to 
their sources.list, but doing so runs a very serious risk of breaking your Kali Linux installation.

# Where to Get Official Kali Linux Images

## ISO Files for Intel-based PCs
In order to run Kali “Live” from a USB drive on standard Windows and Apple PCs, you’ll need a Kali Linux bootable ISO image, in either 32-bit or 64-bit format.
VMware Images
If you want to run Kali Linux as a “guest” under VMware, Kali is available as a pre-built VMware virtual machine with VMware Tools already installed. The VMware image
is available in a 64-bit (amd64), 32-bit (i686), and 32-bit PAE (i486) formats.

## Installing Kali Linux
Installing Kali Linux on your computer is an easy process. First, you’ll need compatible computer hardware. Kali is supported on i386, amd64, and ARM (both armel and 
armhf) platforms.

# Features
Kali Linux has a dedicated project set aside for compatibility and porting to specific Android devices, called Kali Linux NetHunter.
It is the first Open Source Android penetration testing platform for Nexus devices, created as a joint effort between the Kali community member “BinkyBear” and 
Offensive Security. It supports Wireless 802.11 frame injection, one-click MANA Evil Access Point setups, HID keyboard (Teensy like attacks), as well as Bad USB MITM 
attacks.
BackTrack (Kali's predecessor) contained a mode known as forensic mode, which was carried over to Kali via live boot. This mode is very popular for many reasons, 
partly because many Kali users already have a bootable Kali USB drive or CD, and this option makes it easy to apply Kali to a forensic job. When booted in forensic 
mode, the system doesn't touch the internal hard drive or swap space and auto mounting is disabled. However, the developers recommend that users test these features 
extensively before using Kali for real world forensics.

## Tools
Kali Linux includes security tools, such as
#### Aircrack-ng
#### Burp suite
#### Cisco Global Exploiter, a hacking tool used to find and exploit vulnerabilities in Cisco Network systems
#### Ettercap
#### John the Ripper
#### Kismet
#### Maltego
#### Metasploit framework
#### Nmap
#### OWASP ZAP
#### Social engineering tools
#### Wireshark

## Read more about it on - 
https://www.kali.org/kali-linux-documentation/
