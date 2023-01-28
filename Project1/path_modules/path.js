const path = require('path');

console.log(path.dirname('F:/nodejs/Project1/path_modules/path.js'));
console.log(path.extname('F:/nodejs/Project1/path_modules/path.js')); //file extension
console.log(path.basename('F:/nodejs/Project1/path_modules/path.js'));
console.log(path.parse('F:/nodejs/Project1/path_modules/path.js'));
data = path.parse('F:/nodejs/Project1/path_modules/path.js');
console.log(data.name);