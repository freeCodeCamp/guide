---
title: Open Whisper and Signal
---
## Open Whisper and Signal

Open Whisper Systems is a software organization that was founded by Moxie Marlinspike in 2013. Its main focus is the development of the Signal Protocol. It also maintains an encrypted communications application called Signal.

### The Signal Protocol
The Signal Protocol is a non-federated cryptographic protocol that can be used to provide end-to-end encryption for voice calls, video calls,[3] and instant messaging conversations.

#### Protocol Features

The protocol provides confidentiality, integrity, authentication, participant consistency, destination validation, forward secrecy, backward secrecy (aka future secrecy), causality preservation, message unlinkability, message repudiation, participation repudiation, and asynchronicity. It does not provide anonymity preservation, and requires servers for the relaying of messages and storing of public key material.

#### Group Chats Support

The Signal Protocol also supports end-to-end encrypted group chats. The group chat protocol is a combination of a pairwise double ratchet and multicast encryption. In addition to the properties provided by the one-to-one protocol, the group chat protocol provides speaker consistency, out-of-order resilience, dropped message resilience, computational equality, trust equality, subgroup messaging, as well as contractible and expandable membership.

#### Authentication
For authentication, users can manually compare public key fingerprints through an outside channel.[18] This makes it possible for users to verify each other's identities and avoid a man-in-the-middle attack. An implementation can also choose to employ a trust on first use mechanism in order to notify users if a correspondent's key changes.

#### Implementations
Open Whisper Systems maintains the following Signal Protocol libraries on GitHub:

- <a href='https://github.com/WhisperSystems/libsignal-protocol-c' target='_blank' rel='nofollow'>libsignal-protocol-c</a>: A library written in C and published under the GPLv3 license with additional permissions for Apple's App Store.
- <a href='https://github.com/WhisperSystems/libsignal-protocol-java' target='_blank' rel='nofollow'>libsignal-protocol-java</a>: A library written in Java and published under the GPLv3 license.
- <a href='https://github.com/WhisperSystems/libsignal-protocol-javascript' target='_blank' rel='nofollow'>libsignal-protocol-javascript</a>: A library written in JavaScript and published under the GPLv3 license.

### The Signal App

![Signal App Icon][signalappicon]

[signalappicon]: https://lh3.googleusercontent.com/l2UcWONe0L_UWIIuD3zTgwNRaW9n6cmJdofaEV2LD6U4Ngg8YiUs2wUD9EU8xo2ne9w=w300 "Signal App Icon"
Signal is an encrypted communications application for Android and iOS. It uses the Internet to send one-to-one and group messages, which can include files, voice notes, images and videos, and make one-to-one voice and video calls. Signal messages are encrypted with the Signal Protocol.

Signal uses standard cellular mobile numbers as identifiers, and uses end-to-end encryption to secure all communications to other Signal users. The applications include mechanisms by which users can independently verify the identity of their messaging correspondents and the integrity of the data channel. In addition, a Chrome app that can link with a Signal client has been released.

![Signal App][signalapp]

[signalapp]: https://cdn57.androidauthority.net/wp-content/uploads/2016/11/android-authority-signal-app.jpg "Signal App"

#### Features 
- All calls are made over a Wi-Fi or data connection and with the exception of data fees are free of charge, including long distance and international. Signal also allows users to send text messages, files, voice notes, pictures, and video messages over a Wi-Fi or data connection to other Signal users on iOS, Android and a Chrome app. The app also supports group messaging.

- All communications to other Signal users are automatically end-to-end encrypted. The keys that are used to encrypt the user's communications are generated and stored at the endpoints (i.e. by users, not by servers). Signal also has a built-in mechanism for verifying that no man-in-the-middle attack has occurred. For authentication, Signal users can compare key fingerprints (or scan QR codes) out-of-band. The app employs a trust on first use mechanism in order to notify the user if a correspondent's key changes.

- On Android, users can opt into making Signal the default SMS/MMS application, allowing them to send and receive unencrypted SMS messages in addition to the standard end-to-end encrypted Signal messages. Users can also opt into allowing Signal to fall back to unencrypted SMS/MMS when communicating with contacts who do not have Signal.

- The Android version of Signal allows the user to set a passphrase that encrypts the local message database and the user's encryption keys. This does not encrypt the user's contact database or message timestamps. The user can define a time period after which the application "forgets" the passphrase, providing an additional protection mechanism in case the phone is lost or stolen. On iOS, the local message database is encrypted by the operating system if the user has a passphrase on their lock screen.

- Signal also allows users to set timers to messages. After a specified time interval, the messages will be deleted from both the sender's and the receivers' devices. The time interval can be between five seconds and one week long, and the timer begins for each recipient once they have read their copy of the message. The developers have stressed that this is meant to be "a collaborative feature for conversations where all participants want to automate minimalist data hygiene, not for situations where your contact is your adversary".

- Signal excludes users' messages from non-encrypted cloud backups by default.

## References

- <a href='https://github.com/whispersystems/' target='_blank' rel='nofollow'>Open Whisper Systems Repositories</a>
- <a href='https://signal.org/' target='_blank' rel='nofollow'>Signal App Site</a>
- <a href='https://freedom.press/news/signal-beginners/' target='_blank' rel='nofollow'>Signal, the secure messaging app: a guide for beginners</a>
