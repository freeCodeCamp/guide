---
title: Guidelines for Translating Free Code Camp To Any Language
---
Thank you so much for your interest in translating FreeCodeCamp. Reading this document is recommended for participating in a collective effort to bring FreeCodeCamp to more and more people all around the world.

## How to Contribute to Translations?

There are various ways in which you can contribute collaboratively to the translations. Every translation effort usually follows the workflow below.

> _Pro tip: You can contribute to any or all of below phases in the work flow as per your interest._

*   [Review the work of another translator](http://forum.freecodecamp.com/t/guidelines-for-translating-free-code-camp-to-any-language/19111/3).
*   [Create `Translation` issues to track the progress](http://forum.freecodecamp.com/t/guidelines-for-translating-free-code-camp-to-any-language/19111/4).
*   [Implement Translations](http://forum.freecodecamp.com/t/guidelines-for-translating-free-code-camp-to-any-language/19111/5).
*   [Create Pull requests to add the Translations to code base](http://forum.freecodecamp.com/t/guidelines-for-translating-free-code-camp-to-any-language/19111/6)

## Guidelines and Resources

### General guidelines

*   Try not to be too formal yet not too casual, just to keep things friendly.
*   In order to make contents more understandable for native speakers of your target language (think of those who don't speak English), translate as much as you can, try to use a word in English only if it is already widely used in the countries where your target language is spoken.

### Glossary

It is efficient if all the translators working on the same language create a glossary showing the translation of words in English employed in FreeCodeCamp's challenges. Sometimes there is more than one way of translating some terms, and regional differences might create confusion (for example, some terms might differ between Spanish from Spain and from Latin America, or between the French language employed in Canada and in France). Be democratic! Choose the most appropriate translation by voting and keep a record of the results. One example of such record can be found here: [FreeCodeCamp Glossary (English to Spanish)](https://docs.google.com/spreadsheets/d/1c60Sl4MAAsZ7biCPgur7A4aVqhErIfwrE1SulPqbOGo/edit#gid=0) Use the chat room for discussing the glossary, so no one will miss anything.

### If you need some help with the Google Translator Toolkit

You may find help automating the translation process by employing the Google Translator Toolkit, please see: [Spanish guide](https://github.com/vtamara/fcc_trad)

### Creating a test instance of FreeCodeCamp

Seeing the final product as you advance with the translation can help you to stay motivated. That's why it is a good idea to create a test instance of FreeCodeCamp where you can include the most recent changes of the translation of the language you're working on and use FreeCodeCamp including those changes. The following test instance was created for the Spanish version of FreeCodeCamp: [Getting Started](https://github.com/freeCodeCamp/freeCodeCamp/blob/staging/seed/challenges/00-getting-started/getting-started.json). In order to create a test instance, go through the following steps:

1.  Follow the instructions of [Contributing page](https://github.com/FreeCodeCamp/FreeCodeCamp/blob/staging/CONTRIBUTING.md) be sure you can see a running instance in English
2.  Open [Supported Languages.js](https://github.com/freeCodeCamp/freeCodeCamp/blob/staging/common/utils/supported-languages.js) and add the language of your instance.(e.g `es: 'Spanish'`), restart your instance.
3.  Change the url with a prefix of your language (e.g for Spanish, `/en/challenges/` to `/es/challenges/`), if the page has been translated, you should be able to see it.
4.  Look up the language file, try to search keywords in your repository, you can find all challenges under `/seed/challenges/` for example, the _[Getting Started](https://github.com/freeCodeCamp/freeCodeCamp/blob/staging/seed/challenges/00-getting-started/getting-started.json)_ page is located at `freeCodeCamp/seed/challenges/00-getting-started/getting-started.json`
5.  Happy translating!
6.  Before you submit PR, please make sure **DO NOT** include `supported-lamguages.js` in your commit, (`$ git reset -- common/utils/supported-languages.js`)
7.  The last but not the least, make sure you follow all rules in [Contributor's Guide](https://github.com/freeCodeCamp/freeCodeCamp/blob/staging/CONTRIBUTING.md).
8.  Thanks for your contribution!

### References

*   [Documentation of the source code of FreeCodeCamp.](https://github.com/FreeCodeCamp/FreeCodeCamp/blob/staging/README.md)
*   [Pull Request Contribute](https://github.com/FreeCodeCamp/FreeCodeCamp/wiki/Pull-Request-Contribute)
*   [Help files for translating FreeCodeCamp's challenges and indications using Google Translator Toolkit.](https://github.com/vtamara/fcc_trad/blob/master/README.md)
*   [Contributor's Guide](https://github.com/freeCodeCamp/freeCodeCamp/blob/staging/CONTRIBUTING.md)

If you find it useful, you can translate these instructions to your language and adapt them for your translation team (see for example, [original in Spanish.](https://github.com/vtamara/fcc_trad/blob/master/Recomendaciones.md))

_This guide is based on [this writeup](https://github.com/vtamara/fcc_trad/blob/master/Recomendaciones.EN.md)._