import navData from '../../../navData.json';

export const pages = Object.keys(navData)
  .map(key => navData[key]);

export const parents = pages
  .filter(x => x.parent === 'pages');

export const expandedState = {};
