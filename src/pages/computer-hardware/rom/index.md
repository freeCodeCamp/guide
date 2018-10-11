---
title: ROM
---
## Read Only Memory

**ROM** stands for **R**ead **O**nly **M**emory.  ROM chips are not only used in the computer but also in other electronic items like washing machine and microwave oven.

Strictly, read-only memory refers to memory that is hard-wired, such as diode matrix and the later mask ROM (MROM), which cannot be changed after manufacture. Although discrete circuits can be altered in principle, integrated circuits (ICs) cannot, and are useless if the data is bad or requires an update. That such memory can never be changed is a disadvantage in many applications, as bugs and security issues cannot be fixed, and new features cannot be added. A ROM stores such instructions that are required to start a computer. This operation is referred to as bootstrap.

More recently, ROM has come to include memory that is read-only in normal operation, but can still be reprogrammed in some way. Erasable programmable read-only memory (EPROM) and electrically erasable programmable read-only memory (EEPROM) can be erased and re-programmed, but usually this can only be done at relatively slow speeds, may require special equipment to achieve, and is typically only possible a certain number of times.

![RAM](https://www.tutorialspoint.com/computer_fundamentals/images/rom.jpg)

### Characteristics of ROM:

1. Store permanent data called firmware except for special types of ROM that allow reprogramming.
2. Data is not lost when power is lost.(involatile)
3. Ones data is stored, one can only retrieve it but can not edit it except if it was written on a special type of ROM.

### Types of ROM:

#### MROM (Masked ROM)
The very first ROMs were hard-wired devices that contained a pre-programmed set of data or instructions. These kind of ROMs are known as masked ROMs, which are inexpensive.

#### PROM (Programmable Read Only Memory)
PROM is read-only memory that can be modified only once by a user. The user buys a blank PROM and enters the desired contents using a PROM program. Inside the PROM chip, there are small fuses which are burnt open during programming. It can be programmed only once and is not erasable.

#### EPROM (Erasable and Programmable Read Only Memory)
EPROM can be erased by exposing it to ultra-violet light for a duration of up to 40 minutes. Usually, an EPROM eraser achieves this function. During programming, an electrical charge is trapped in an insulated gate region. The charge is retained for more than 10 years because the charge has no leakage path. For erasing this charge, ultra-violet light is passed through a quartz crystal window (lid). This exposure to ultra-violet light dissipates the charge. During normal use, the quartz lid is sealed with a sticker.

#### EEPROM (Electrically Erasable and Programmable Read Only Memory)
EEPROM is programmed and erased electrically. It can be erased and reprogrammed about ten thousand times. Both erasing and programming take about 4 to 10 ms (millisecond). In EEPROM, any location can be selectively erased and programmed. EEPROMs can be erased one byte at a time, rather than erasing the entire chip. Hence, the process of reprogramming is flexible but slow.

#### NAND Flash
The most recent development is NAND flash. Its designers explicitly broke from past practice, stating plainly that "the aim of NAND Flash is to replace hard disks," rather than the traditional use of ROM as a form of non-volatile primary storage. NAND has partially achieved this goal by offering throughput comparable to hard disks, higher tolerance of physical shock, extreme miniaturization (in the form of USB flash drives and tiny microSD memory cards, for example), and much lower power consumption.

### Advantages of ROM:

* Can store data for long periods of time.
* Information stored on it can not be tampered with unless for the special types of ROM.
* Preferred memory to be used in special purpose computer. 

#### Sources:
* [ROM](https://www.tutorialspoint.com/computer_fundamentals/computer_rom.htm)
* [Other](http://pami.uwaterloo.ca/~basir/ECE124/RAM_ROM_And_Plds.pdf)
