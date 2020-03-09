const express = require('express');
const router = express.Router();
const getData = require('../helpers/getData')

function test(req, res, next){
    console.log("test middleware")
    next()
}

router.get('/', (req, res)=>{

    getData("discover/movie", `with_genres=27`)
        .then(data => data.json())
        .then(data => {
            console.log(data.results)

            res.render("overview.ejs", {
                data:data.results
            })
        })
    
})

module.exports = router;