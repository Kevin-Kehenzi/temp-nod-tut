const path = require('path')

console.log(path.sep)
    //path that joins and returns a normalised resulting path

const filePath = path.join('/content', 'subfolder', 'test.txt')
console.log(filePath)

//for getting the base name
const base = path.basename(filePath)
console.log(base)

const absolute = path.resolve(__dirname, 'content', 'subfolder', 'test.txt')
console.log(absolute)