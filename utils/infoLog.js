const chalk = require('chalk');

module.exports = function info(str, colour = 'red',size =5) {
  console.info(chalk[colour](str));
};
