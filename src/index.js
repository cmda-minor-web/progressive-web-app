const express = require('express')
const app = express()
const fetch = require('node-fetch')
const ejs = require('ejs')

app.get('/', (req, res) => res.send('Hello World!'))

app.listen(3000, () => console.log(`App now listening on port 3000!`))