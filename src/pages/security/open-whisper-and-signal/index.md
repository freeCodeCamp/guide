---
title: Open Whisper and Signal
---
## Open Whisper and Signal

Open Whisper Systems (OWS) is an organization was founded in 2013 with the goal of simplifying the implementation of privacy in online communications platforms. OWS is fully funded by donations and grants and provides all of its software free and open-sourced.

The group's main product is the Signal Protocol, a cryptographic protocol that provides end-to-end encryption for instant messaging, voice calls, and video. This type of encryption ensures that only the participants in a conversation have the means to decrypt the messages, thereby preventing any third party from listening in on the conversation. The protocol consists of four components:

1. [Edwards-curve Digital Signature Algorithm (EdDSA)](https://signal.org/docs/specifications/xeddsa/)-compatible signatures, created and verified using public-private key pairs.
1. An [Extended Triple Diffie-Hellman (X3DH)](https://signal.org/docs/specifications/x3dh/) key agreement that creates a shared secret key and allows the two parties to mutually authenticate based their public keys.
1. [Double Ratchet](https://signal.org/docs/specifications/doubleratchet/) is the algorithm by which a shared secret key is used by the two parties to encrypted/decrypt messages.
1. The [Sesame](https://signal.org/docs/specifications/sesame/) algorithm manages asynchronous and multi-device encryption sessions.<sup>1</sup>

The Signal Protocol was initially released as part of the TextSecure messaging app, which was later renamed Signal. It has since been used more widely to add encryption to other communications apps such as WhatsApp and (in a more limited capacity) Facebook Messenger and Google's Allo.

## Sources
1. [Open Whisper Systems. "Technical Information". Accessed: October 31, 2017 ](https://signal.org/docs/)
