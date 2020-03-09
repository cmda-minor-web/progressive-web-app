//Require NPM packages
const express = require('express')
const fetch = require('node-fetch')
const ejs = require('ejs')
const app = express()

//Require modules
const storage = require('./modules/storage.js')
const cleaner = require('./modules/data.js')

app.listen(3000, () => console.log(`App now listening on port 3000!`))


app.get('/', (req, res) => {
	if (storage.checkIfFileExists()) {
		console.log('data from storage is: ', JSON.parse(storage.getStoredData()))
		console.log('call the render function')
	} else {
		const api_key = "OC0EStJnYMjAhVtZl88wJjWA75lDZflYUzVmBaJ5"
		const url = `https://api.nasa.gov/planetary/apod?api_key=${api_key}&start_date=2020-01-01`
		const necessaryProperties = ['date', 'hdurl', 'title', 'explanation', 'copyright', 'media_type']

		fetch(url)
			.then(res => res.json())
			.then(data => cleaner(data, necessaryProperties))
			.then(cleanedData => storage.saveJSON(cleanedData))
			.then(() => console.log('call the render function'))
			.catch(err => console.log(`Fetch error: ${err}`))
	}
})