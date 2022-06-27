const { readFileSync, writeFileSync } = require('fs')

const first = readFileSync('./content/first.txt', 'utf8');
const second = readFileSync('./content/second.txt', 'utf8');

//console.log(first, second) this comment is a function to for detailing the first and second text
writeFileSync('./content/result-sync.txt',
        `Here is the result : ${first}, ${second}`, { flag: `a` }
    )
    //the writeFileSync function is for adding another text file

//write File Sync and readFileSync Aare the two methods that we can use with node to read files as well as create files from scratch.They are synchronous methods