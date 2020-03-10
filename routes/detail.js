const express = require('express');
const router = express.Router();
const getData = require('../helpers/getData')

// Local data
// const data = require("../helpers/fakeData")

router.get('/movie/:id', (req, res)=>{
console.log("hallo")

// getData(`movie/${req.params.id}`)
// .then(data => data.json())
// .then(json => {
    
//     console.log(json)
//     res.end()
// })



    // getData(`movie/${req.params.id}`)
    getData(`movie/${req.params.id}`)
        .then(data => data.json())
        .then(data => {
         console.log('GOOOOOOOOOOOOL:', data)

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