---
title: Deploying To Openshift
---
If you deploy your applications to Heroku you can only upload 5 applications, if you want to deploy a new one, you need to verify you account with your credit card.

![Heroku Error](//discourse-user-assets.s3.amazonaws.com/original/2X/2/27219029fea50142009b1521d5268c06ded15b57.jpg)

These are the steps you need to follow to deploy to [OpenShift](https://www.openshift.com/app/account/new).

## Requirements

*   An account in [OpenShift](https://www.openshift.com/app/account/new)
*   Our app in a [Git](//forum.freecodecamp.com/t/wiki-git-resources/13136) Repository

## Changes in your code

*   `app.listen` with `process.env.OPENSHIFT_NODEJS_PORT` and `process.env.OPENSHIFT_NODEJS_IP`, both requires.
*   In your **package.json** set your `"main": 'yourMainFile.js` and `"script": { "start": "node yourMainFile.js" }`

## Deploying our app

*   [Add a new application](https://openshift.redhat.com/app/console/application_types)

![Choose a web programming cartridge](//discourse-user-assets.s3.amazonaws.com/original/2X/e/e07c056ab351ee6bd728b8d5f648b3fac9c6bf86.jpg)

*   Choose a name (second input will be same for all you apps)

<div class="lightbox-wrapper">[![Fill our name and our domain](//discourse-user-assets.s3.amazonaws.com/optimized/2X/9/9e929388f653ca9725e4dc2ca823f06cee493bc2_1_690x106.jpg)

<div class="meta"><span class="filename">gzMcQ3m.jpg</span><span class="informations">943x145 12.9 KB</span><span class="expand"></span></div>](//discourse-user-assets.s3.amazonaws.com/original/2X/9/9e929388f653ca9725e4dc2ca823f06cee493bc2.jpg "gzMcQ3m.jpg") </div>

*   Fill our Git URL and our branch name

<div class="lightbox-wrapper">[![Where you can find your Git URL and your branch name at Github](//discourse-user-assets.s3.amazonaws.com/optimized/2X/1/1a720934d9c2fd79a4aaa14b4ca07e6c1df7f2ce_1_690x130.jpg)

<div class="meta"><span class="filename">w4n0lNl.jpg</span><span class="informations">992x188 21.8 KB</span><span class="expand"></span></div>](//discourse-user-assets.s3.amazonaws.com/original/2X/1/1a720934d9c2fd79a4aaa14b4ca07e6c1df7f2ce.jpg "w4n0lNl.jpg") </div>

![Fill your Git URL and your branch name](//discourse-user-assets.s3.amazonaws.com/original/2X/9/989e44c1af80c9b8f26883a3d897f377b3a27ca4.jpg)

*   "Create Application". It will take some time

<div class="lightbox-wrapper">[![You will be redirected here when you finish deployment](//discourse-user-assets.s3.amazonaws.com/optimized/2X/f/f0de3f67ec78b75df6786301560a903f76aec022_1_690x363.jpg)

<div class="meta"><span class="filename">ddcWa4r.jpg</span><span class="informations">1163x613 105 KB</span><span class="expand"></span></div>](//discourse-user-assets.s3.amazonaws.com/original/2X/f/f0de3f67ec78b75df6786301560a903f76aec022.jpg "ddcWa4r.jpg") </div>

*   Enter to "Application", then into your App and check it's started.

<div class="lightbox-wrapper">[![Your applications list](//discourse-user-assets.s3.amazonaws.com/optimized/2X/d/d71ea954dd23eb341243bf568a3d67b682590274_1_690x272.jpg)

<div class="meta"><span class="filename">ALzAaXp.jpg</span><span class="informations">777x307 14.1 KB</span><span class="expand"></span></div>](//discourse-user-assets.s3.amazonaws.com/original/2X/d/d71ea954dd23eb341243bf568a3d67b682590274.jpg "ALzAaXp.jpg") </div>

<div class="lightbox-wrapper">[![Details of your application](//discourse-user-assets.s3.amazonaws.com/optimized/2X/4/497bacfd85fd2c8e815413df1e942a1a42f045f0_1_690x60.jpg)

<div class="meta"><span class="filename">uTedlZP.jpg</span><span class="informations">1158x102 10.1 KB</span><span class="expand"></span></div>](//discourse-user-assets.s3.amazonaws.com/original/2X/4/497bacfd85fd2c8e815413df1e942a1a42f045f0.jpg "uTedlZP.jpg") </div>

## Enviroment variables

In my case I have my database in mLab, so I need to create some enviroment variables.

*   [Install Ruby and rhc.](https://developers.openshift.com/getting-started/windows.html#client-tools)

**rhc** only works with versions 1.9.3 and 2.0.0 of Ruby.

*   [Setting up Your Machine](https://developers.openshift.com/getting-started/windows.html#rhc-setup)

If you are having trouble with setting up `rhc`, try [this](http://stackoverflow.com/questions/28896733/rhc-setup-gives-error-no-such-file-dl-import) answer on StackOverflow.

*   [Custom Environment Variables](https://developers.openshift.com/managing-your-applications/environment-variables.html#custom-variables)

`rhc env set VARIABLE=value VARIABLE2=value2 -a App_Name`.

You need to restart your app to load the variables.

If you find a better way to solve this limitation. Feel free to contribute to our <a>Wiki</a> and share it with us.

You can check the app working at [http://voting-pitazo.rhcloud.com/#/polls](http://voting-pitazo.rhcloud.com/#/polls)