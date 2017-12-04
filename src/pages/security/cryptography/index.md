---
title: Cryptography
---

## Cryptography

The basic objective of cryptography is to enable two people to communicate through the unsecure channel in such a way that a third person cannot understand what is being said. This channel could be a telephone line or a computer network. 

Cryptography started being used by the Romans in order to make messages in battle unreadable by the enemy if decyphered. 

Modern cryptography is used in data so that only one party or only authorised partys have the ability to access the information. 

Encryption over the years has become more advanced.

### Example

The information that Person1 wants to send to Person2, which we call "plaintext", can be text, numerical data, or any type of data at all. Person1 encrypts the plaintext, using a predetermined key, and sends the resulting "ciphertext" over the channel. Person3, upon seeing the ciphertext in the channel, cannot determine what the plaintext was, but Person2, who knows the encryption key, can decrypt the ciphertext and reconstruct the plaintext.

### Cesar Cypher

The first known cypher was the Cesar cypher. The Cesar cypher worked by shifting the letters of the word by a specific amount up or down in the alphabet. 

From a random person's perspective, the message was just random letters with random spaces in between.

### Modern Cryptography

Modern encryption is randomized numbers and letters and it takes time to generate as well as cracking. 

Cracking modern encryption even with the best computers on the market can make hundreds of thousands of years. 

There are 2 types of encryption:

### 1) Symmetric or Private Key or Single Key:

Single key is used for both encryption and decryption. Since both sender and receiver are equivalent, either can encrypt or decrypt messages using that common key.

Some popular Symetric encryption techniques are: Data Encryption Standard(DES), Advance Encryption Standard(AES), Blow Fish, Two Fish, RC4.

### 2) Asymmetric or Public Key:

Asymmetric algorithms provides each user with a pair of keys: one public and one private. Any message encrypted with one key from the pair can only be decrypted with the other key from the pair. 

Some techniques are: RSA, Diffie-Hellman, DSS(Digital Signature Standard), ElGamal.

#### More Information:

- <a href='https://www.crcpress.com/Cryptography-Theory-and-Practice-Third-Edition/Stinson/p/book/9781584885085' target='_blank' rel='nofollow'>Cryptography: Theory and Practice by Douglas Stinson</a>
- <a href='http://searchsecurity.techtarget.com/definition/encryption' target='_blank' rel='nofollow'>TechTarget on Encryption</a>
- <a href='https://www.tutorialspoint.com/cryptography/index.htm' target='_blank' rel='nofollow'>Cryptography Guide</a>