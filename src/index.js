//Require NPM packages
const express = require('express')
const fetch = require('node-fetch')
const app = express()

//Require modules
const storage = require('./modules/storage.js')
const cleaner = require('./modules/data.js')

//Set path to static assets folder
app.use(express.static('static'))

//Set template engine and path to template folder
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');


app.listen(3000, () => console.log(`App now listening on port 3000!`))


//Serve index page
app.get('/', (req, res) => {
	if (storage.checkIfFileExists()) {
		const data = JSON.parse(storage.getStoredData())
		res.render("overview", {
			data
		})
	} else {
		//todo put the fetch in a individual module
		const api_key = "OC0EStJnYMjAhVtZl88wJjWA75lDZflYUzVmBaJ5"
		const start_date = "2020-01-01"
		const url = `https://api.nasa.gov/planetary/apod?api_key=${api_key}&start_date=${start_date}`
		const necessaryProperties = ['date', 'hdurl', 'title', 'explanation', 'copyright', 'media_type']

		fetch(url)
			.then(res => res.json())
			.then(data => cleaner(data, necessaryProperties))
			.then(cleanedData => storage.saveJSON(cleanedData))
			.then(data => res.render("overview", {
				data
			}))
			.catch(err => console.log(`Fetch error: ${err}`))
	}
})


//todo schoon de styles.css file op -> er staat nu nog heel veel troep in