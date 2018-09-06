const express = require('express')
const path = require('path')
const app = express()

app.use(express.static('./'))

app.get('/', (req, res) => res.sendFile(path.join(__dirname + '/public/index.html')))

app.listen(8002, () => console.log('Example app listening on port 8002!'))