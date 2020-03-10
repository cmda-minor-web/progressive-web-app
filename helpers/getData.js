require('dotenv').config()

const fetch = require('node-fetch');


function getData(endpoint, params){
    
    const apiKey = "8ff1964e3739e2af5c150b85ecad19de";
    let parameters = '';
    if(params){
         parameters = `&${params}`;
    }

    console.log(`tadaaa: https://api.themoviedb.org/3/${endpoint}?api_key=${apiKey}${parameters}`)
    return fetch(`https://api.themoviedb.org/3/${endpoint}?api_key=${apiKey}${parameters}`)
            .then(data => {
                return data.json()
            })

}

module.exports = getData