import favicons from './favicons';
import meta from './meta';
import styleSheets from './styleSheets';
import scripts from './scripts';

const metaAndStyleSheets = meta.concat(favicons, styleSheets, scripts)
  .map((element, i) => ({ ...element, key: i }));

export default metaAndStyleSheets;
