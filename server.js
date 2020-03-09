require('dotenv').config()

const express = require('express')
const app = express()
const port = process.env.PORT || 3000

const overview = require('./routes/overview.js')
const detail = require('./routes/detail.js')
const path = require("path")
// app.get('/', (req, res) => res.send('Hello World!'))
app
    .set('view-engine', 'ejs')
    .set('views', path.join(__dirname,'views'))

    .use(express.static(path.join(__dirname, '/static')))
    // .use('/', ()=>{
    //     console.log(path.join(__dirname, 'static'))
    // })
    .use('/', overview)
    .use('/', detail)
    
    .listen(port, () => console.log(`WAFS is listening on port ${port}!`))