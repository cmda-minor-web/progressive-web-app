const express = require('express');
const router = express.Router();
const getData = require('../helpers/getData')
const bodyParser = require('body-parser')
const cleanObjects = require('../helpers/cleanData')
const hasImage = require('../helpers/hasImage')

// Local data
// const data = require("../helpers/fakeData")
const genreIdList = require("../helpers/genreIdList")
// const bodyParser = require('body-parser')

function getGenres(){
    // return (Promise.all(genreIdList.map((genre) =>{
    //    return getData("discover/movie", `with_genres=${genre.id}`)
    // })))

    const test = genreIdList.map(async (genre) =>{
        return {
            name: genre.name,
            data: await getData("discover/movie", `with_genres=${genre.id}`)
        }
    })

    console.log(test)

    return Promise.all(test);




    // return Promise.all(genreIdList.map((genre) =>{
    //     return getData("discover/movie", `with_genres=${genre.id}`)
    //  }))
}

router.get('/search/:genre?', (req, res)=>{

  
        // const query = req.body.searchValue;

        console.log(req.query)


        // getData('search/movie', `query=${query}`)
        //     // .then(data => {
        //     //    return data.json()
               
        //     // })
        //     .then(json =>{
        //         return cleanObjects(json.results, ["id", "title", "poster_path", "vote_average"]);
        //     })
        //     .then(json => hasImage(json))
        //     .then(json => {
        //         console.log(json)
        //         res.render('search-results.ejs', {
        //             data:json
        //         })
        //     })
    
        // getGenres()
 
        // .then(objects => {
        //     // console.log(data)
         
        //     const json = objects.map(async (obj) => {
        //         return {
        //             name: obj.name,
        //             data: await obj.data.json()
        //         }
        //     })

        //     console.log(Promise.all(json))


        //     return Promise.all(json)
        // })
        // .then(data => {
        //     console.log("Dewdwfwefwefwefwfewef", data)
        //     // console.log("Data: ", data)

        //     return data;
        // })

        // .then(genre =>{
        //     res.render("overview.ejs", {
        //         data:genre
        //     })
        // })

        

    // res.render("overview.ejs", {
    //                 data:data.results
    //             })

    
})

module.exports = router;