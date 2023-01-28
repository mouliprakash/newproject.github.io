const os = require('os');

console.log(os.arch());  // prints the os architecture
console.log(os.hostname()); //prints host name
console.log(os.platform()); 
console.log(os.type());
const freememory = os.freemem()/1024/1024/1024; //prints free ram
console.log(freememory);

const totmem = os.totalmem()/1024/1024/1024; //prints total ram
console.log(totmem);