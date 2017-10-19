# What Exactly happens when you press the power button on PC ?


Operating system is defined as the low-level software that supports a computer’s basic functions,such as scheduling tasks and controlling peripherals. OS holds down these 6 high level stages of a typical Linux boot process.

![Steps](https://raw.githubusercontent.com/Ayushverma8/tech-interview-handbook/master/LinuxBootingProcess.jpg)


 

### 1. BIOS



- BIOS stands for Basic Input/Output System
- Performs some system integrity checks over the HDD
- Searches, loads, and executes the boot loader program , mostly in MBR
- It looks for boot loader in floppy, cd-rom, or hard drive. We can press a    key (typically F12 of F2, but it depends on your system) during the BIOS startup to change the boot sequence.
- Once the boot loader program is detected and loaded into the memory, BIOS gives the control to it.
- So, in simple terms BIOS loads and executes the MBR boot loader

### 2. MBR



- MBR stands for Master Boot Record.
- It is located in the 1st sector of the bootable disk. Typically /dev/hda, or /dev/sda. Why it’s sda and hda ? refer here for more.
- MBR is less than 512 bytes in size. This has three components 1) primary boot loader info in 1st 446 bytes 2) partition table info in next 64 bytes 3) mbr validation check in last 2 bytes.
- So, in simple terms MBR loads and executes the GRUB boot loader.

### 3. GRUB



-  GRUB
- It is located in the 1st sector of the bootable disk. Typically /dev/hda, or /dev/sda. Why it’s sda and hda ? refer here for more.
- If you have multiple kernel images installed on your system, you can choose which one to be executed, by default only the major one boots up .
- GRUB displays a splash screen, waits for few seconds, if you don’t enter anything, it loads the default kernel image as specified in the grub configuration file.
- Grub configuration file is /boot/grub/grub.conf (/etc/grub.conf is a link to this). The following is sample grub.conf of CentOS.

### 4. GRUB



-  GRUB
- It is located in the 1st sector of the bootable disk. Typically /dev/hda, or /dev/sda. Why it’s sda and hda ? refer here for more.
- If you have multiple kernel images installed on your system, you can choose which one to be executed, by default only the major one boots up .
- GRUB displays a splash screen, waits for few seconds, if you don’t enter anything, it loads the default kernel image as specified in the grub configuration file.
