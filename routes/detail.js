const express = require('express');
const router = express.Router();
const getData = require('../helpers/getData')

// Local data
const data = require("../helpers/fakeData")

function test(req, res, next){
    console.log("test middleware")
    next()
}

router.get('/movie/:id', (req, res)=>{

    getData(`movie/${req.params.id}`)
        
        .then(data => data.json())
        .then(data => {
            console.log(data)

            res.render("detail-page.ejs", {
                movie:data
            })
        })

    // res.render("detail-page.ejs", {
    //                 movie:data
    //             })

    // console.log(req.params.id)
    
})

module.exports = router;