---
title: Setting up Firebase Storage
---

# Prerequisites
1. The latest version of Android Studio
2. Have connected with Firebase manually or via Firebase Assistant(See [Connecting to Firebase](guide/src/pages/android-development/firebase/connecting-to-firebase)). 
<br>
It is recommended that you do this so as to not be confused by partial instructions related to this in the docs mentioned below. 

# Setting it up with Android Studio
<br>
After adding Firebase to your project, you will need to add extra dependencies and do some other things in order to setup 
the Firebase Storage. There are following documentation about this:

* Firebase [docs](https://firebase.google.com/docs/storage/android/start)

There may be chance of confusion in that documentation or if you are new to firebase then you may face little bit hard to understand it. 
So follow the belows steps carefully:

<br>

**Add Gradle Dependencies**<sup>1</sup>
<br>
In your app-level build.gradle file, add the following
<br>
```java
dependencies {
	implementation 'com.google.firebase:firebase-storage:16.0.2'
}
```
# Installation of Firebase Android SDK, permissions and setup code
Detailed instructions for these can be found [here](https://firebase.google.com/docs/android/setup).

# Resources 
To learn about how to read from and write to the storage in your Android application, refer to the docs listed below.
<br>

#Upload files from Android
Firebase Guide [docs](https://firebase.google.com/docs/storage/android/upload-files)
<br>
#Download files to Android
Firebase Guide [docs](https://firebase.google.com/docs/storage/android/download-files)

#Sample Projects from Firebase Developers
You can follow up these samples from Firebase developers to get started Firebase storage
Firebase Quickstart-Android [android-sample](https://github.com/firebase/quickstart-android/tree/master/storage) 

#Note
You may have seen before or from any other resources, in adding dependencies 'compile' keyword is used since 'implementation' what i have added here. 
Then don't get confused because Google now deprecated 'compile' and in place of that you need to use 'implementation'
<br>
If anybody found anything wrong or you think need some improovements in this article then, please correct this or just ask me to correct it. 
