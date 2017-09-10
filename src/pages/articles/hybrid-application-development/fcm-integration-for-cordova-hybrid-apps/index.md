---
title: Fcm Integration for Cordova Hybrid Apps
---
# Fcm Integration for Cordova Hybrid Apps
This is a basic straight forward walk through regarding how to implement push notification in Android as well as iOS using the <a href='https://github.com/fechanique/cordova-plugin-fcm' target='_blank' rel='nofollow'> cordova plugin for fcm </a> and Google Firebase FCM from scratch. 
I will be using Ubuntu 16.04 LTS for this, but OS used for development should not matter much.

## Fcm Integration for Cordova Hybrid Apps
Create an empty folder pushSample
```
cd '/opt/lampp/htdocs'
mkdir pushSample
cd pushSample
cordova create pushSample
cd pushSample
cordova platform add android
cordova plugin add cordova-plugin-fcm
```
While adding the cordova fcm plugin will show an error :
```
Error: cordova-plugin-fcm: You have installed platform android but file 'google-services.json' was not found in your Cordova project root folder.
```

Note : This is because we have not added the google-services.json file which has to be created in the next following steps.

Next open the <a href='https://console.firebase.google.com/' target='_blank' rel='nofollow'> google firebase console </a> and Add Project ( basically means create a new project )

Once the project is created click on Notifications section in left side panel.

Now click on the Android icon to add **Android** platform support to our project.

In the next popup form fill the details as follows :
**Android package name :** Package name or ID is the unique identifier for an app in the play store. 
Note that it is a very important value which cannot be changed for an app once it is uploaded to the play store. 
It will be in reverse domain name syntax : eg hello.pushSample.com will have app id : com.pushSample.hello.
Also in the **config.xml** file in your cordova project set the same app id.
For our sample project it will be in :
```
pushSample/pushSample/config.xml
eg for me the contents of this file are :

<?xml version='1.0' encoding='utf-8'?>
<widget id="io.cordova.hellocordova" version="1.0.0" xmlns="http://www.w3.org/ns/widgets" xmlns:cdv="http://cordova.apache.org/ns/1.0">
    <name>HelloCordova</name>
    <description>
        A sample Apache Cordova application that responds to the deviceready event.
    </description>
    <author email="dev@cordova.apache.org" href="http://cordova.io">
        Apache Cordova Team
    </author>
    <content src="index.html" />
    <plugin name="cordova-plugin-whitelist" spec="1" />
    <access origin="*" />
    <allow-intent href="http://*/*" />
    <allow-intent href="https://*/*" />
    <allow-intent href="tel:*" />
    <allow-intent href="sms:*" />
    <allow-intent href="mailto:*" />
    <allow-intent href="geo:*" />
    <platform name="android">
        <allow-intent href="market:*" />
    </platform>
    <platform name="ios">
        <allow-intent href="itms:*" />
        <allow-intent href="itms-apps:*" />
    </platform>
</widget>
```
Note the tag
```
<widget id="io.cordova.hellocordova" version="1.0.0" xmlns="http://www.w3.org/ns/widgets" xmlns:cdv="http://cordova.apache.org/ns/1.0">
```

Here the attribute id is the package **id** which will by default be **io.cordova.hellocordova** change it to the app id you have specified in the firebase console. I will be using com.pushSample.hello

Next field to be filled in the firebase console popup is :
**App nickname (optional) :** This can be the same app name which is displayed in the menu for the app, this can also be changed in the config.xml, by default it will be HelloCordova, i will update it to **PushSample**
**Debug signing certificate SHA-1 (optional) :** This is optional please leave it blank.

Next click on **Register App**

Next step is to download the **google services json** file.
