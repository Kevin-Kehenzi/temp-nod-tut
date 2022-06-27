//THIS IS HOW TO USE THE ASYNCHRONOUS APPROACH
const { readfile, writeFile, readFile } = require('fs')
    //you will note that if we dont provide the utf we will get a buffer inn the terminal,but if we list the utf buffer will not appear
    //this is the example of the buffer => <Buffer 48 65 6c 6c 6f 20 74 68 69 73 20 66 69 72 73 74 20 74 65 78 74 20 66 69 6c 65>
readFile('./content/first.txt', 'utf8', (err, result) => {
        if (err) {
            console.log(err)
            return
        }
        //console.log(result)  this is a function if we want to get the print *Hello this first text file*
        //but if we want to consider the functionality as explained below we do tas follows:
        const first = result;
        //with the utf8 the output in the terminal will be =>Hello this first text file
        //qst??HOW CAN WE SETUP THE SAME FUNCTIONALITY i.e as of that of the asynchronous where we added there was an override in the result-sync
        //ANS =>as we recall the callback function i.e *(err,result)=>{}* we need to set up that functionality inside the callback where we are getting the result parameter or else we shall get an error
        readFile('./content/second.txt', 'utf8', (err, result) => {
            if (err) {
                console.log(err)
                return

            }
            const second = result
            writeFile('./content/result-async.txt', //since there is no file as result-async.txt node will create it for us
                    `Here is the result : ${first}, ${second}`,
                    (err, result) => {
                        if (err) {
                            console.log(err)
                            return;
                        }
                        console.log(result)
                    }

                ) // we have the callback function in the writeFile so 
        })
    })
    //you will note that the terminal will output *UNDEFINED but our intended result will be put in the *result-aync.txt* file