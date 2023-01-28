const chalk = require("chalk");
const validator = require('validator');
console.log(chalk.red.underline.inverse("Hello world"));
res = validator.isEmail('usermouli.p@gmail.com');
console.log(res ? chalk.green.inverse(res) : chalk.red.inverse(res));
