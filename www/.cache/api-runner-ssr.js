var plugins = [{
      plugin: require('/Users/kuriakinzeng/Developer/fcc/guides/www/node_modules/gatsby-remark-autolink-headers/gatsby-ssr.js'),
      options: {"plugins":[]},
    },{
      plugin: require('/Users/kuriakinzeng/Developer/fcc/guides/www/node_modules/gatsby-plugin-glamor/gatsby-ssr.js'),
      options: {"plugins":[]},
    },{
      plugin: require('/Users/kuriakinzeng/Developer/fcc/guides/www/node_modules/gatsby-plugin-manifest/gatsby-ssr.js'),
      options: {"plugins":[],"name":"GatsbyJS","short_name":"GatsbyJS","start_url":"/","background_color":"#f7f0eb","theme_color":"#a2466c","display":"minimal-ui"},
    },{
      plugin: require('/Users/kuriakinzeng/Developer/fcc/guides/www/node_modules/gatsby-plugin-offline/gatsby-ssr.js'),
      options: {"plugins":[]},
    },{
      plugin: require('/Users/kuriakinzeng/Developer/fcc/guides/www/node_modules/gatsby-plugin-google-analytics/gatsby-ssr.js'),
      options: {"plugins":[],"trackingId":"UA-93349937-1"},
    }]
"use strict";

// During bootstrap, we write requires at top of this file which looks like:
// var plugins = [
//   require('/path/to/plugin1/gatsby-ssr.js'),
//   require('/path/to/plugin2/gatsby-ssr.js'),
// ]

var apis = require(`./api-ssr-docs`);

module.exports = function (api, args, defaultReturn) {
  if (!apis[api]) {
    console.log(`This API doesn't exist`, api);
  }
  // Run each plugin in series.
  var results = plugins.map(function (plugin) {
    if (plugin.plugin[api]) {
      var result = plugin.plugin[api](args, plugin.options);
      return result;
    }
  }

  // Filter out undefined results.
  );results = results.filter(function (result) {
    return typeof result !== `undefined`;
  });

  if (results.length > 0) {
    return results;
  } else {
    return [defaultReturn];
  }
};
//# sourceMappingURL=api-runner-ssr.js.map