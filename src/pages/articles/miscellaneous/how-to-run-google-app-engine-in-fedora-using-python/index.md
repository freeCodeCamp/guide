---
title: How To Run Google App Engine In Fedora Using Python
---
This article covers step by step guide to install Google App Engine on your Fedora Operating System using python.

*   Follow the steps in this documentation by [Google.](https://cloud.google.com/appengine/docs/python/#uploading_the_application)

Testing the application as given in the above document may not work for many.

So, try [this](http://stackoverflow.com/a/16970921) as given by Brice Lin.

Also, follow the deployment strategy as provided by Brice Lin. To do this open another terminal (if you wish).

*   Before deploying, you have to create the project in the Google Cloud Platform. Follow the steps from [Uploading the app](https://cloud.google.com/appengine/docs/python/#uploading_the_application)

*   But still following the above deployment strategy may not work for many. And an error like this may follow:

 `ERROR appcfg.py:2396 An error occurred processing file '': HTTP Error 400: Bad Request Unexpected HTTP status 400\. Aborting. Error 400: --- begin server output --- A version or backend parameter is required. --- end server output ---` 

This error occurs because of the missing Version statement in file **app.yaml**. So add `version: 1` in the **app.yaml** file in the application repository. Here, `helloworld` is the repository. Now it will work. Happy Coding & Making Application.

Don't forget to check this link out: [Developing and deploying an application on Google App Engine on Youtube.](https://www.youtube.com/watch?v=bfgO-LXGpTM)