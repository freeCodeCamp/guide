---
title: Voice
---

## Voice

Speech recognition allows users affected by accessibility difficulties (such as permanent visual impairment or temporary impairment while driving) the ability to navigate content on a website or input text data (such as a form). 

Speech synthesis provides websites the ability to provide information to users by reading text.


#### Javascript Web Speech API

The [Web Speech API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Speech_API) enables you to incorporate voice data into web apps using both speech recognition and speech synthesis. 

##### How the Web Speech API works

The WebSpeech API uses the device's native microphone system. When an utterance is recognized from a pre-defined grammar (see below), it is returned as a result (or list of results) as a text string, and callback functions can be provided to perform further actions. 

##### How to use the SpeechRecognition API

The grammar:
```
var colors = [ 'aqua' , 'azure' , 'beige', 'bisque', 'black', 'blue', 'brown', 'chocolate', 'coral' ... ];
var grammar = '#JSGF V1.0; grammar colors; public <color> = ' + colors.join(' | ') + ' ;'
```

Plugging the grammar into our speech recognition:
```
var recognition = new SpeechRecognition();
var speechRecognitionList = new SpeechGrammarList();
speechRecognitionList.addFromString(grammar, 1);
```

Starting the speech recognition:
```
SpeechRecognition.start()
```

Receiving and handling results:
```
SpeechRecognition.onresult
SpeechRecognition.onerror
```
##### How to use the SpeechSynthesis API

Set voice:
```
SpeechSynthesisVoice
SpeechSynthesis.getVoices()
```

Speaking the entered text:
```
SpeechSynthesisUtterance()
```

Set pitch and rate values:
```
SpeechSynthesisUtterance.pitch
SpeechSynthesisUtterance.rate
```
Set pitch and rate values:
```
SpeechSynthesis.speak()
```

##### More Information
[Web Speech API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Speech_API)

#### Other APIs

##### Alexa

The Alexa platform was created by Amazon, and formally released for development by external parties in 2015. It provides the ability for users to interact with Alexa enabled devices using just their voice, and no interaction with a touch screen. The platform contains both hardware and software components. Amazon manufactures and sells the hardware devices which come with a variety of features and price points.

The Amazon Echo Dot is a hockey puck sized device.

The Amazon Echo Tap is a battery powered device, and larger than the Dot.

The Amazon Echo is a full sized upright speaker that is roughly twice the size of the Tap.

The Amazon Echo Show is not only a voice activated speaker, but it also has a seven inch display, and shorter than the full sized unit.

Each of the devices have far field microphones, capable of hearing 25-30 feet away from the user.

The software components within the platform include both Natural Language Understanding (NLU) as well as Automated Speech Recognition (ASR).  These software components can be leveraged by custom written "skills" by independent software developers that are then certified to a set of standards by Amazon. There are already more than 20k of these custom skills available through their app store.

##### IBM Watson API

