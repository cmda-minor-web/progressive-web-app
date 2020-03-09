//Require NPM packages
const express = require('express')
const app = express()
const storage = require('./modules/storage.js')
const fetcher = require('./modules/api.js')

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
		fetcher.api(req, res)
	}
})

//Serve detail page
app.get('/apod/:id', (req, res) => {
	const id = req.params.id
	const data = JSON.parse(storage.getStoredData())

	res.render("detail", {
		data: data[id]
	})
})

//todo: wanneer data.json niet bestaat en je refreshed dan word er niks gerendered -> geen idee waarom niet (vraag aan alumni)