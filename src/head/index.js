import favicons from './favicons';
import meta from './meta';
import styleSheets from './styleSheets';

const metaAndStyleSheets = meta.concat(favicons, styleSheets)
  .map((element, i) => ({ ...element, key: i }));

export default metaAndStyleSheets;
I want to get a Hacktoberfest shirt! And in a few years I will try my skills in a Hackathon.
