const path = require('path');
console.log(path.sep); //gives the current path i'm in


//having to join the file paths, we use the join() method
const filePath = path.join('/content/', 'subfolder', 'text.txt');
console.log(filePath);


//to find the base file we user the basename method
const base = path.basename(filePath)

console.log(base);


//to give the absolte path we use the resolve method
const absolute = path.resolve(__dirname, 'content', 'subfolder', 'text.txt');
console.log(absolute);