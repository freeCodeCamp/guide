---
title: Android core components
---
# Android core components
Core components are the essential elements which an app for Android consists of. Each of them has its own purpose and lifecycle but not all of them are independent. They are:

- Activities
- Services
- Broadcast receivers
- Content providers

## [Activities](https://developer.android.com/guide/components/activities/)
An _activity_ is a component that has a user interface and represents a single screen. An app can have multiple activities, each of those can be an entry point to the application itself for the user or the system (an app's activity that wants to open another activity that belongs to the same application or to a different one).

## [Services](https://developer.android.com/guide/components/services)
A _service_ is a component without user interface to perform long-running operations in the background.
There are two kinds of services:

- _foreground_ services: they are strictly related to user's interaction (for example music playback), so it's harder for the system to kill them.
- _background_ services: they are not directly related to user's activities, so they can be killed if more RAM is needed.

## Broadcast receivers

## Content providers

For detailed information about the topic, see the official [Android fundamentals](https://developer.android.com/guide/components/fundamentals) documentation 