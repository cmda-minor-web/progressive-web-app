const fetch = require('node-fetch')
const cleaner = require('../modules/data.js')
const storage = require('../modules/storage.js')
const utils = require('../modules/utils.js')

const api_key = "OC0EStJnYMjAhVtZl88wJjWA75lDZflYUzVmBaJ5"
const start_date = "2020-01-01"
const url = `https://api.nasa.gov/planetary/apod?api_key=${api_key}&start_date=${start_date}`
const necessaryProperties = ['date', 'hdurl', 'title', 'explanation', 'copyright', 'media_type']

const fetcher = {
	api: (req, res) => {
		fetch(url)
			.then(response => response.json())
			.then(data => cleaner(data, necessaryProperties))
			.then(cleanData => utils.orderData(cleanData))
			.then(orderedData => storage.saveJSON(orderedData))
			.then(data => {
				res.render("overview", {
					data
				})
			})
			.catch(err => console.log(`Fetch error: ${err}`))
	}
}

module.exports = fetcher