var express = require('express');
var app = express();

const onTime = 1000

var a = false
var b = false

app.get('/A', (req, res) => res.send(a))

app.get('/B', (req, res) => res.send(b))

app.get('/setA', (req, res) => {
  a = true
  setTimeout(() => a = false, onTime)
  res.send('A turned on');
})

app.get('/setB', (req, res) => {
  b = true
  setTimeout(() => b = false, onTime)
  res.send('B turned on')
})

app.get('/', (req, res)  => res.send('Hello World!'))

app.listen(3000, function() {
  console.log('listening on port 3000');
});