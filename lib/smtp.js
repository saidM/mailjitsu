'use strict'

const {SMTPServer} = require('smtp-server')
const {simpleParser} = require('mailparser')
const {add} = require('./store')

new SMTPServer({
  disabledCommands: ['AUTH'], // Disable authentication
  onData(stream) {
    let mail = null

    stream.on('data', chunk => mail += chunk.toString())
    stream.on('end', () => {
      // Parse the message and store it in memory
      simpleParser(mail)
      .then(parsedMail => add(parsedMail))
      .catch(err => console.log(err))
    })
  }
}).listen(1025, () => {
  console.log('SMTP Server listening on port 1025..')
})
