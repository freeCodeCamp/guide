const isAFileRE = /(\.md|\.jsx?|\.html?)$/;
const isAStubRE = /This\sis\sa\sstub.+?Help\sour\scommunity\sexpand\sit/;
const metaTitleRE = /^---\s*title:([^\n]*)\n---$/m;
const markdownLinkRE = /([^!])\[([^\n]*)\]\((https?\:\/\/[^\n]*)\)/g;
const shouldBeIgnoredRE = /^(\_|\.)/;

module.exports = {
  isAFileRE,
  isAStubRE,
  markdownLinkRE,
  metaTitleRE,
  shouldBeIgnoredRE
};
