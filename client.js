const request = require('request')
const host = 'localhost'

let mode = undefined

process.argv.forEach((val)  => {
  if (val === '-a') mode = 'A'
  if (val === '-b') mode = 'B'
});

const toSet = mode === 'A' ? 'A' : 'B'
const toGet = mode === 'A' ? 'B' : 'A'

const set = () => request(`http://${host}:3000/set${toSet}`, (err, res, body) => {
  console.log(body)
})

const get = () => request(`http://${host}:3000/${toGet}`, (err, res, body) => {
  console.log(body)
})

setInterval(set, 2000)
setInterval(get, 200)