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
    Promise.all([
        getData(`movie/${req.params.id}`),
        getData(`movie/${req.params.id}/videos`),
    ])
        // .then(json =>{
        //     return cleanObjects(json.results, ["id", "title", "poster_path", "vote_average", "overview"]);
        // })

        .then(([data, trailers]) => [hasImage(data), trailers])
        .then(([data, trailers]) => {
         console.log('GOO:', trailers)

            res.render("detail-page.ejs", {
                movie:data,
                trailers:trailers.results
            })
        })

    // res.render("detail-page.ejs", {
    //                 movie:data
    //             })

    // console.log(req.params.id)
    
})

module.exports = router;