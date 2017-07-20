/* eslint-disable camelcase */
const preFormatted = {
  css: 'CSS',
  css3: 'CSS3',
  deleteproperty: 'deleteProperty',
  html: 'HTML',
  html5: 'HTML5',
  javascript: 'javaScript',
  jquery: 'jQuery',
  sql: 'SQL',
  aws: 'AWS',
  mongodb: 'MongoDB',
  dynamodb: 'DynamoDB',
  json: 'JSON',
  foreach: 'forEach',
  indexof: 'indexOf',
  copywithin: 'copyWithin',
  findindex: 'findIndex',
  lastindexof: 'lastIndexOf',
  reduceright: 'reduceRight',
  tolocalstring: 'toLocalString',
  tolowercase: 'toLowerCase',
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
  isarray: 'isArray',
  isextensible: 'isExtensible',
  isfrozen: 'isFrozen',
  isealed: 'isSealed',
  __definegetter__: '__defineGetter__',
  __definesetter__: '__defineSetter__',
  hasownproperty: 'hasOwnProperty',
  __lookupgetter__: '__lookupGetter__',
  __lookupsetter__: '__lookupSetter__',
  propertyisenumerable: 'propertyIsEnumerable',
  tostring: 'toString',
  todatestring: 'toDateString',
  totimestring: 'toTimeString',
  toisostring: 'toISOString',
  toutcstring: 'toUTCString',
  getdate: 'getDate',
  setdate: 'setDate',
  getday: 'getDay',
  getfullyear: 'getFullYear',
  setfullyear: 'setFullYear',
  gethours: 'getHours',
  sethours: 'setHours',
  getmilliseconds: 'getMilliseconds',
  setmilliseconds: 'setMilliseconds',
  getminutes: 'getMinutes',
  setminutes: 'setMinutes',
  getmonth: 'getMonth',
  setmonth: 'setMonth',
  getseconds: 'getSeconds',
  setseconds: 'setSeconds',
  gettime: 'getTime',
  settime: 'setTime',
  getomezoneoffset: 'getTimezoneOffset',
  getutcdate: 'getUTCDate',
  setutcdate: 'setUTCDate',
  getutcday: 'getUTCDay',
  getutcfullyear: 'getUTCFullYear',
  setutcfullyear: 'setUTCFullYear',
  getutchours: 'getUTCHours',
  setutchours: 'setUTCHours',
  getutcmilliseconds: 'getUTCMilliseconds',
  setutcmilliseconds: 'setUTCMilliseconds',
  getutcminutes: 'getUTCMinutes',
  setutcminutes: 'setUTCMinutes',
  getutcmonth: 'getUTCMonth',
  setutcmonth: 'setUTCMonth',
  getutcseconds: 'getUTCSeconds',
  setutcseconds: 'setUTCSeconds',
  getyear: 'getYear',
  setyear: 'setYear',
  tojson: 'toJSON',
  tolocaledatestring: 'toLocaleDateString',
  tolocaletimestring: 'toLocaleTimeString',
  displayname: 'displayName',
  isgenerator: 'isGenerator',
  columnnumber: 'columnNumber',
  linenumber: 'lineNumber',
  filename: 'fileName',
  epsilon: 'EPSILON',
  max_safe_integer: 'MAX_SAFE_INTEGER',
  max_value: 'MAX_VALUE',
  min_safe_integer: 'MIN_SAFE_INTEGER',
  min_value: 'MIN_VALUE',
  nan: 'NaN',
  negative_infinity: 'NEGATIVE_INFINITY',
  positive_infinity: 'POSITIVE_INFINITY',
  isnan: 'isNaN',
  isfinite: 'isFinite',
  isinteger: 'isInteger',
  issafeinteger: 'isSafeInteger',
  parsefloat: 'parseFloat',
  parseint: 'parseInt',
  toexponential: 'toExponential',
  tofixed: 'toFixed',
  toprecision: 'toPrecision',
  e: 'E',
  ln2: 'LN2',
  ln10: 'LN10',
  log2e: 'LOG2E',
  log10e: 'LOG10E',
  pi: 'PI',
  sqrt1_2: 'SQRT1_2',
  sqrt2: 'SQRT2',
  arraybuffer: 'ArrayBuffer',
  bytelength: 'byteLength',
  isview: 'isView',
  compareexchange: 'compareExchange',
  islockfree: 'isLockFree',
  regexp: 'RegExp',
  ignorecase: 'ignoreCase'
};

const stopWords = [
  'a',
  'am',
  'an',
  'and',
  'as',
  'at',
  'but',
  'by',
  'for',
  'from',
  'if',
  'in',
  'into',
  'it',
  'it\'s',
  'its',
  'no',
  'nor',
  'not',
  'of',
  'off',
  'on',
  'or',
  'the',
  'to',
  'with'
];

module.exports = {
  preFormatted,
  stopWords
};
