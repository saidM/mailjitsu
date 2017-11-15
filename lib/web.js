'use strict'

const http = require('http')
const fs = require('fs')
const {mails} = require('./store')

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    fs.readFile('./public/index.html', (err, content) => {
      if (err) { 
        throw err
      }

      res.writeHead(200, {'Content-Type': 'text/html'})
      res.end(content)
    })
  }
  else if (req.url === '/mails') {
    res.writeHead(200, {'Content-Type': 'application/json'})
    res.end(JSON.stringify({mails}))
  } else {
    res.writeHead(404, {'Content-Type': 'text/plain'})
    res.end('Not Found')
  }
}).listen(3000, () => console.log('Web Server listening on port 3000..'))

// Make the server available to Mocha
module.exports = server
