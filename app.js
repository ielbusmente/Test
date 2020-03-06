// const fs = require('fs')
// let  readStream = fs.createReadStream('notes.txt', 'utf8') //utf8
// let  readStream = fs.createReadStream('notes.txt', 'utf8') //utf8 character encoding scheme 
// let writeStream = fs.createWriteStream('notesDup.txt')//, 'utf8')
// readStream.pipe(writeStream) 


// const EventEmitter = require('events')
// const emitter = new EventEmitter()
// emitter.on('hi', 
// // function() { 
// //     console.log('good')
// // }) 
// () => console.log('good'))
// emitter.emit('hi')


const fs = require('fs')

let  readStream = fs.createReadStream('notes.txt', 'utf8') //utf8

readStream.on('data', (chunk) => {
    console.log('asdfasdfasdfadsfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfasdfadfasdfasdfasdfasdfasdfasdfadsfadf')
    console.log(chunk)
})

