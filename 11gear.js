const { readFileSync, writeFileSync } = require('fs')
console.log('start');
const first = readFileSync('./content/first.txt', 'utf8');
const second = readFileSync('./content/second.txt', 'utf8');

writeFileSync('./content/result-sync.txt',
    `Here is the result : ${first}, ${second}`, { flag: `a` }
)
console.log('done with this task');
console.log('starting the next one');
//javascript reads the code synchronously line by line ,we have START before our tasks for writing the results
//so if it takes a long time when one user is using ,no other user can use it
//we imagine these task of getting those files and the second one of reading those files might be very time consuming and imagine if we have more than 10 users and they are all using our application,
//and imagine that one user does both task and it takeslong time,it means that node is not gonna serve the other users and the end of the day it bwill be a problem