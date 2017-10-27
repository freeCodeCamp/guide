---
title: What is an API?
---
## What is an API?

API stands for Application Programming Interface. Don’t worry about the AP, just focus on the I. An API is an interface. You use interfaces all the time. A computer operating system is an interface. Buttons in an elevator are an interface. A gas pedal in a car is an interface.

An interface sits on top of a complicated system and simplifies certain tasks, a middleman that saves you from needing to know all the details of what’s happening under the hood. A web API is the same sort of thing. It sits on top of a web service, like Twitter or YouTube, and simplifies certain tasks for you. It translates your actions into the technical details for the computer system on the other end.

## Why Are APIs Useful?

Having access to an API generally means having access to a large amount of organized data. The gatekeeper of that data gives a developer permission (in the form of an *API key*) to query a server for information. If the request is successful, the server responds with a message that may look something like this:

```
{
  "coord": {
    "lon":139,
    "lat":35
  },
  "wind": {
    "speed":7.31,
    "deg":187.002
  },
  "rain": {
    "3h":0
  },
  "clouds": {
    "all":92
  }
}
```
Source: [Open Weather API](https://openweathermap.org/current)

In the example above, a developer made a request for the current weather at a specific latitude and longitude, and the server responded with a *JSON object* about wind, rain, and clouds for that location. Services that you use every day are made with tons of request and response cycles like this.

#### More Information:
* <a href='https://schoolofdata.org/2013/11/18/web-apis-for-non-programmers/' target='_blank' rel='nofollow'>API for non-programmers</a>
* <a href='https://en.wikipedia.org/wiki/Application_programming_interface' target='_blank' rel='nofollow'>Wikipedia</a>
