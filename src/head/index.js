import favicons from './favicons';
import meta from './meta';
import styleSheets from './styleSheets';
import frameworks from './frameworks';

const metaAndStyleSheets = meta.concat(favicons, styleSheets, frameworks)
  .map((element, i) => ({ ...element, key: i }));

export default metaAndStyleSheets;
