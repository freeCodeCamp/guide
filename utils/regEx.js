const httpsRE = /https?\:\/\//;
const isAFileRE = /(\.md|\.jsx?|\.html?)$/;
const isAStubRE = /This\sis\sa\sstub.+?Help\sour\scommunity\sexpand\sit/;
const markdownLinkRE = /\!?\[.*?\]\(.+?\)/g;
const metaTitleRE = /---\s*title:([^\n]*)\n---/;
const shouldBeIgnoredRE = /^(\_|\.)/;

module.exports = {
  httpsRE,
  isAFileRE,
  isAStubRE,
  markdownLinkRE,
  metaTitleRE,
  shouldBeIgnoredRE
};
