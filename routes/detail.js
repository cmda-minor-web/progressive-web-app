const express = require('express');
const router = express.Router();
const getData = require('../helpers/getData')
const hasImage = require('../helpers/hasImage')
// Local data
// const data = require("../helpers/fakeData")

router.get('/movie/:id/:title', (req, res)=>{
console.log("hallo")

// getData(`movie/${req.params.id}`)
// .then(data => data.json())
// .then(json => {
    
//     console.log(json)
//     res.end()
// })



    // getData(`movie/${req.params.id}`)
    getData(`movie/${req.params.id}`)
        // .then(json =>{
        //     return cleanObjects(json.results, ["id", "title", "poster_path", "vote_average", "overview"]);
        // })
        .then(json => hasImage(json))
        .then(data => {
         console.log('GOO:', data)

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