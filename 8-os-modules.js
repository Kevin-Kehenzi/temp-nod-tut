const os = require('os')

//info about current user
const user = os.userInfo()
console.log(user);
// this comment is a function when in need of the user info

//method returns the system uptime in seconds


console.log(`The System Uptime is ${os.uptime()} seconds`)

const currentOs = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem(),
}
console.log(currentOs)