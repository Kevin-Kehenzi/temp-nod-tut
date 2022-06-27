//as an alternative we  have the async approach,where we set up some simple logs 

const { readfile, writeFile } = require('fs')
const { readFile } = require('fs/promises')

console.log('start')


readFile('./content/first.txt', 'utf8', (err, result) => {
    if (err) {
        console.log(err)
        return
    }
    const first = result
    readfile('./content/second.txt', 'utf8', (err, result) => {
        if (err) {
            console.log(err)
            return
        }
        const second = result
        writeFile(
            './content/result-async.txt',
            `Here is the result : ${first}, ${second}`,
            (err, result) => {
                if (err) {
                    console.log(err)
                    return
                }
                console.log('done with this task')
            }

        )
    })
})
console.log('starting next task')