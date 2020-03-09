const express = require('express')
const app = express()
const fetch = require('node-fetch')
const ejs = require('ejs')

app.listen(3000, () => console.log(`App now listening on port 3000!`))


app.get('/', (req, res) => {
	const api_key = "OC0EStJnYMjAhVtZl88wJjWA75lDZflYUzVmBaJ5"
	const url = `https://api.nasa.gov/planetary/apod?api_key=${api_key}&start_date=2020-01-01`

	fetch(url)
		.then(res => res.json())
		.then(data => res.send(data))
})