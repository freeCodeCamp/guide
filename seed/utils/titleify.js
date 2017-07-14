const preFormatted = {
  css: 'CSS',
  css3: 'CSS3',
  html: 'HTML',
  html5: 'HTML5',
  javascript: 'javaScript',
  foreach: 'forEach',
  indexof: 'indexOf',
  copywithin: 'copyWithin',
  findindex: 'findIndex',
  lastindexof: 'lastIndexOf',
  reduceright: 'reduceRight',
  tolocalstring: 'toLocalString',
  tolowercase: 'toLowersCase',
  touppercase: 'toUpperCase',
  tosource: 'toSource',
  tosrting: 'toString',
  fromcharcode: 'fromCharCode',
  frompointcode: 'fromPointCode',
  charat: 'charAt',
  charcodeat: 'charCodeAt',
  codepointat: 'codePointAt',
  endswith: 'endsWith',
  localcompare: 'localCompare',
  padend: 'padEnd',
  padstart: 'padStart',
  startswith: 'startsWith',
  tolocalelowercase: 'toLocaleLowerCase',
  tolocaleuppercase: 'toLocaleUpperCase',
  trimleft: 'trimLeft',
  trimRight: 'trimRight',
  valueof: 'valueOf',
  getownpropertydescriptor: 'getOwnPropertyDescriptor',
  getownpropertydescriptors: 'getOwnPropertyDescriptors',
  getownpropertynames: 'getOwnPropertyNames',
  getownpropertysymbols: 'getOwnPropertySymbols',
  preventextentions: 'preventExtensions',
  defineproperties: 'defineProperties',
  defineproperty: 'defineProperty',
  getprototypeof: 'getPrototypeOf',
  setprototypeof: 'setPrototypeOf',
  isextensible: 'isExtensible',
  isfrozen: 'isFrozen',
  isealed: 'isSealed',
  __definegetter__: '__defineGetter__',
  __definesetter__: '__defineSetter__',
  hasownproperty: 'hasOwnProperty',
  __lookupgetter__: '__lookupGetter__',
  __lookupsetter__: '__lookupSetter__',
  propertyisenumerable: 'propertyIsEnumerable'
};

const stopWords = [
  'and',
  'for',
  'of',
  'the',
  'up',
  'with'
];

const prototypeRE = /prototype/i;
const prototypesRE = /prototypes/i;

const removeProto = x => x !== 'prototype';

function prototyper(str) {
  const formatted = str
    .replace(/javascript/i, '')
    .split('-')
    .map(str => {
      if (prototypeRE.test(str)) {
        if (str.length > 9) {
          return prototyper(
            str.trim().split('prototype').join('-prototype-')
          );
        }
        return str;
      }
      return titleify(str);
    })
    .join(' ')
    .split(' ');
  const noProto = formatted
    .filter(removeProto)
    .filter(x => !!x);
  if (noProto.length === 2) {
    const [ first, second ] = noProto;
    const secondLC = second.toLowerCase();
    const finalSecond = preFormatted[secondLC] ?
      preFormatted[secondLC] :
      secondLC;
    return `${titleify(first)}.prototype.${finalSecond}`;
  }
  if (noProto.length === 1) {
    return prototyper(
      noProto[0]
        .toLowerCase()
        .split('.')
        .join('-')
      );
  }
  return titleify(str, true);
}

function titleify(str, triedPrototyper) {
  if (str.match(prototypeRE) && !triedPrototyper && !prototypesRE.test(str)) {
    return prototyper(str);
  }
  return str
    .toLowerCase()
    .split('-')
    .map(word => {
      if (!word) {
        return '';
      }
      if (stopWords.indexOf(word) !== -1) {
        return word;
      }
      return preFormatted[word] ?
        preFormatted[word] :
        word[0].toUpperCase() + word.slice(1);
    })
    .join(' ');
}

module.exports = titleify;
