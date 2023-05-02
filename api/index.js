const express = require('express')
const bodyParse = require('body-parser')

const app = express()

app.use(bodyParse.json())
app.use(bodyParse.urlencoded({ extended: true }))

const port = 3000

app.get('/', (_, res) => {
  res.status(200)
  res.send({
    message: 'boas-vindas à API'
    })
})

app.listen(port, () => {
  console.log('Example status app listening on port:' + port)
})

module.exports = app