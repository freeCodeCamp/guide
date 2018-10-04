---
title: Voice
---

## Voice

Speech recognition allows users affected by accessibility difficulties (such as permanent visual impairment or temporary impairment while driving) the ability to navigate content on a website or input text data (such as a form). 

Speech synthesis provides websites the ability to provide information to users by reading text.


### Javascript Web Speech API

The [Web Speech API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Speech_API) enables you to incorporate voice data into web apps using both speech recognition and speech synthesis. 

#### How the Web Speech API works

The WebSpeech API uses the device's native microphone system. When an utterance is recognized from a pre-defined grammar (see below), it is returned as a result (or list of results) as a text string, and callback functions can be provided to perform further actions. 

#### How to use the SpeechRecognition API

Here is a simple example of using the SpeechRecognition API. Note that the API is initated with the `new SpeechRecognition()` constructor, and starts when `recognition.start();` is called. It creates a transcript from what is received and then that is appended to the `<p class="transcript"`. [Click here for a working demo of this code](https://codepen.io/ashwoodall/pen/MPeyRm).

This is the html that the transcript is appended to:

```html
<main class="main">
  <span class="loader"></span>
  <p class="description">What I think you said: <p class="transcript" data-js="varValue"></p></p>
  
</main>
```

And here is the Javascript: 

```javascript
window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const span = document.querySelector('[data-js="varValue"]');
const main = document.querySelector('.main');
const loader = document.querySelector('.loader');

const recognition = new SpeechRecognition();
recognition.lang = 'en-US';

recognition.addEventListener('result', e => {
    const transcript = Array.from(e.results)
        .map(result => result[0].transcript)

    span.textContent = transcript;
    loader.textContent = '';
});

recognition.addEventListener('start', () => loader.textContent = 'Listening (enable your microphone)...');

recognition.addEventListener('end', recognition.start);
recognition.start();
```

### Alexa

The Alexa platform was created by Amazon, and formally released for development by external parties in 2015. It provides the ability for users to interact with Alexa enabled devices using just their voice, and no interaction with a touch screen. The platform contains both hardware and software components. Amazon manufactures and sells the hardware devices which come with a variety of features and price points.

The Amazon Echo Dot is a hockey puck sized device.

The Amazon Echo Tap is a battery powered device, and larger than the Dot.

The Amazon Echo is a full sized upright speaker that is roughly twice the size of the Tap.

The Amazon Echo Show is not only a voice activated speaker, but it also has a seven inch display, and shorter than the full sized unit.

Each of the devices have far field microphones, capable of hearing 25-30 feet away from the user.

The software components within the platform include both Natural Language Understanding (NLU) as well as Automated Speech Recognition (ASR).  These software components can be leveraged by custom written "skills" by independent software developers that are then certified to a set of standards by Amazon. There are already more than 20k of these custom skills available through their app store.

### IBM Watson Speech-to-Text API

IBM Watson Speech-to-Text uses machine learning to accurately predict speech in real time. Currently seven different languages are supported, as well as live voice and pre-recorded audio. The API can be used for free, or paid versions are available for larger scale apps. 


### More Information
[Web Speech API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Speech_API)
[Alexa API](https://developer.amazon.com/docs/alexa-voice-service/api-overview.html)
[IBM Watson API](https://www.ibm.com/watson/services/speech-to-text/)



