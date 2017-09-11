---
title: Fcm Integration for Cordova Hybrid Apps
---
# Fcm Integration for Cordova Hybrid Apps
This is a basic straight forward walk through regarding how to implement push notification in Android as well as iOS using the <a href='https://github.com/fechanique/cordova-plugin-fcm' target='_blank' rel='nofollow'> cordova plugin for fcm </a> and Google Firebase FCM from scratch. 
I will be using Ubuntu 16.04 LTS for this, but OS used for development should not matter much.

## Fcm Integration for Cordova Hybrid Apps

### Android Implementation

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

![download google services json](https://github.com/T1TAN1UM/guides/blob/master/src/pages/articles/hybrid-application-development/fcm-integration-for-cordova-hybrid-apps/1-Wje-TClf8o9zDxw3W-wkpw.png)

Click on the **Download google-services.json** button, which should download the file to your PC.

Once you get the file paste it in the root folder of your cordova project, in my case :

```
/opt/lampp/htdocs/pushSample/pushSample
```

Next build the project

```
cordova build android
```

After adding the google-services.json file it should build successfully.

Next we have to write the client side code for handling push notifications :

```
FCMPlugin.getToken(function(token) {
    //this is the fcm token which can be used
    //to send notification to specific device 
    console.log(token);
    //FCMPlugin.onNotification( onNotificationCallback(data), successCallback(msg), errorCallback(err) )
    //Here you define your application behaviour based on the notification data.
    FCMPlugin.onNotification(function(data) {
        console.log(data);
        //data.wasTapped == true means in Background :  Notification was received on device tray and tapped by the user.
        //data.wasTapped == false means in foreground :  Notification was received in foreground. Maybe the user needs to be notified.
        // if (data.wasTapped) {
        //     //Notification was received on device tray and tapped by the user.
        //     alert(JSON.stringify(data));
        // } else {
        //     //Notification was received in foreground. Maybe the user needs to be notified.
        //     alert(JSON.stringify(data));
        // }
    });
});
```
The code basically first calls the **getToken** function to get an FCM token from firebase, then in the callback registers another callback **onNotification** to handle what happens when a push notification is received.

the **onNotification** function has a data value which contains the notification data. data.wasTapped indicates whether the notification is sent when the app is in foreground or background, so that we can define separate logic for each case.
Now to trigger a sample push notification click on the Notification section in the left side panel, this should now show you the firebase notification composer, showing the list of past notifications sent.

In case you have not sent any push notifications yet. You should see a **send your first notification** button.

**Note:** The Notification Composer will look like this :

![send your first notification](https://github.com/T1TAN1UM/guides/blob/master/src/pages/articles/hybrid-application-development/fcm-integration-for-cordova-hybrid-apps/1-sW2AdQJzJEFjto6rz1_8rA.png)

Note While sending push notification using firebase console you need to select app name **com.pushSample.hello** in my case.

To send the custom application specific data select advance options -> Key value pairs.

![advanced options](https://github.com/T1TAN1UM/guides/blob/master/src/pages/articles/hybrid-application-development/fcm-integration-for-cordova-hybrid-apps/1-qp9MzXBZvnPYawyo0TQBRA.png)

The data object in the onNotification callback will look as follows

```
{myKey2: "valuefor2", myKey: "valuefor1", wasTapped: false}
```

Also note while sending push notifications using REST APIs from your app server instead of the firebase notification composer, you have to use the following syntax :

```
//POST: https://fcm.googleapis.com/fcm/send
//HEADER: Content-Type: application/json
//HEADER: Authorization: key=AIzaSy*******************
{
  "notification":{
    "title":"Notification title",
    "body":"Notification body",
    "sound":"default",
    "click_action":"FCM_PLUGIN_ACTIVITY",
    "icon":"fcm_push_icon"
  },
  "data":{
    "param1":"value1",
    "param2":"value2"
  },
    "to":"/topics/topicExample",
    "priority":"high",
    "restricted_package_name":""
}
//sound: optional field if you want sound with the notification
//click_action: must be present with the specified value for Android
//icon: white icon resource name for Android >5.0
//data: put any "param":"value" and retreive them in the JavaScript notification callback
//to: device token or /topic/topicExample
//priority: must be set to "high" for delivering notifications on closed iOS apps
//restricted_package_name: optional field if you want to send only to a restricted app package (i.e: com.myapp.test)
```
**Note : “click_action”:”FCM_PLUGIN_ACTIVITY”** field is very important as not mentioning it will not execute the onNotification callback in foreground mode.

![done with android implementation](https://github.com/T1TAN1UM/guides/blob/master/src/pages/articles/hybrid-application-development/fcm-integration-for-cordova-hybrid-apps/0-QIzcJZH9Nqzpjygg.jpg)

### iOS Implementation



