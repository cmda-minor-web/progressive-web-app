require('dotenv').config()

const express = require('express')
const app = express()
const port = process.env.PORT || 8080

const overview = require('./routes/overview.js')
const detail = require('./routes/detail.js')

const search = require('./routes/search.js')

const bodyParser = require('body-parser')
const path = require("path")
// app.get('/', (req, res) => res.send('Hello World!'))
app
    .use(bodyParser.urlencoded({ extended: true }))
    .set('view-engine', 'ejs')
    .set('views', path.join(__dirname,'views'))

    
    .use(express.static(path.join(__dirname, '/static')))
    // .use('/', ()=>{
    //     console.log(path.join(__dirname, 'static'))
    // })
    .use('/', overview)
    .use('/', detail)
    .use('/', search)

    
    .listen(port, () => console.log(`WAFS is listening on port ${port}!`))