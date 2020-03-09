require('dotenv').config()

const express = require('express')
const app = express()
const port = process.env.PORT || 3000

const overview = require('./routes/overview.js')

// app.get('/', (req, res) => res.send('Hello World!'))
app
    .set('view-engine', 'ejs')
    .set('views', 'views')
    .use('/', overview)
    .listen(port, () => console.log(`WAFS is listening on port ${port}!`))