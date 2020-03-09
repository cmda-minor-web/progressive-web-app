const storage = require('./storage.js')
const data = JSON.parse(storage.getStoredData())

const render = {
	overviewPage: () => console.log(data, 'render'),
	detailsPage: () => console.log(data)
}

module.exports = render