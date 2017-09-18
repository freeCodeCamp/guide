---
title: Cordova iOS Application Development Setup to Deployment
---
# Cordova iOS Application Development Setup to Deployment
<img src="https://preview.ibb.co/iRkkR5/iphone_1737513_1920.jpg" alt="iphone_1737513_1920" width="100%">

Hybrid Application development for android is a breeze, be it for development or production configuration, however i personally find cordova iOS setup, development and deployment a bit complicated.

Most of the Hybrid Application Developers who are in learning stage are not able to explore hybrid iOS app development process due to the simple reason that they dont own a mac, since developing iOS apps requires the iOS SDK and XCode unlike Android SDK which runs on any Desktop OS. Therefore the aim of this guide is to show the basic workflow of hybrid iOS app development on a mac, so that a develoer even if he/she cannot develop iOS apps, is atleast familiar with how its done.

Begin by opening the terminal and creating a new cordova project ( use sudo only if you have permission issues, ie. EACCESS errors ) :
```
sudo cordova create iosdemo
cd iosdemo
sudo cordova platform add ios
```
At the time of writing this guide cordova iOS platform version is : 4.3.1

We wont modify any source code of the app and simple continue with the default sample code that is added by cordova automatically when we run the create command. However it is assumed we will add plugins modify code in the ```www``` folder during normal development flow. 

Next step is to run the cordova build command. This will convert our app code to an .xcodeproj file which we will use next.
```
sudo cordova build ios
```

The generated Xcode Project file will be in : 
```
[Your App Folder]/platforms/ios/[Your App Name].xcodeproj
```

Next, double tap the .xcodeproj file which should open it in Xcode.
( Please use the latest version of Xcode, i have used Xcode 8.3.2 )

<img src="https://preview.ibb.co/dApdYk/Screen_Shot_2017_09_18_at_11_06_55_AM.png" alt="Project opening in Xcode" width="100%">
The Xcode screen should look something like this.

Now incase of Android the code signing is done using the Keystore file which is in .jks format.
However incase of iOS for distributing iOS apps it is required that you have a Apple developer account,
This is so that we can generate the *Certificates* and *Provisioning Profiles* required for distributing the app.

For pricing of Developer account refer <a href='https://developer.apple.com/support/purchase-activation/' alt='apple developer account pricing' target='_blank'>this page</a>

Once you have the account ready we can proceed further and login to <a href='https://developer.apple.com/account/' alt='apple developer dashboard' target='_blank'>Apple developer account</a>
