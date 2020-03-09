const fs = require('fs');

const storage = {
	checkIfFileExists: () => (fs.existsSync('./storage/data.json')) ? true : false,
	saveJSON: data => fs.writeFile('./storage/data.json', JSON.stringify(data), (err) => {
		if (err) throw err;
		else console.log('./storage/data.json created & saved!')
	}),
	getStoredData: () => fs.readFileSync('./storage/data.json', {
		encoding: 'utf8'
	})
}


module.exports = storage