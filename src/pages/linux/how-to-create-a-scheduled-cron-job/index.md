---
title: How to create a scheduled cron job
---
## What is cron? 

Cron can best be described as a time-based job-scheduler for UNIX like systems. 

It typically automates system maintenance or administration

Read more about <a href='https://en.wikipedia.org/wiki/Cron' target='_blank' rel='nofollow'>CRON</a>


## Create a basic cronjob

When logged in to your shell, run the command `crontab -e`

Typically there is a short explanation already in the crontab. 

The syntax is written in the following order `# m h dom mon dow command`

1. m is for minutes 0-59

2. h is for hour 0-23

3. is for day of month 0-31

4. is for month 0-12

5. is for day of week 0-7 where both 0 and 7 is sunday.

6. is the command you want to run (e.g `sh exampleScript.sh`)


So let's say you wanted to make a cronjob that runs at midnight every night that makes a text-file named 'test.txt' in the folder /tmp

that would be written like `# 0 0 * * * touch /tmp/test.txt`

Essetially that runs at 00:00 all days of the months, all months and all days of the week. 

The * is a wildcard operator and selects all available values.


To know more about CRON and CRONTAB you can always run ´man cron´ or ´man crontab´
