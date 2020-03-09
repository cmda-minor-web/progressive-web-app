const express = require('express')
const fetch = require('node-fetch')
const ejs = require('ejs')
const fs = require('fs');
const app = express()


app.listen(3000, () => console.log(`App now listening on port 3000!`))


app.get('/', (req, res) => {
	const api_key = "OC0EStJnYMjAhVtZl88wJjWA75lDZflYUzVmBaJ5"
	const url = `https://api.nasa.gov/planetary/apod?api_key=${api_key}&start_date=2020-01-01`



	fs.readFile('data.json', (err, data) => {
		if (err) throw err;
		console.log('readFile result: ', JSON.parse(data));
	});


	fetch(url)
		.then(res => res.json())
		.then(data => {
			fs.writeFile('data.json', JSON.stringify(data), (err) => {
				if (err) throw err;
				console.log('The file has been saved!');
			})
			return data
		})
		.then(data => res.send(data))
})