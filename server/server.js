const express = require('express')
const ex = express()
const port = 3000

ex.get('/', (req, res) => {
  res.send('Get Request Successful')
})
ex.post('/', (req, res) => {
  res.send('Post Request Successful')
})
ex.post('/action', (req, res) =>{
   res.send(req.body)
   console.log(req.body)
})
ex.listen(port, () => {
  console.log(`Listening on port ${port}`)
})