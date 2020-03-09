//Create compact data object with only the necessary properties
const cleanData = (data, properties) => {
	data.map(item => { //Loop through the data array
		Object.keys(item).map(prop => { //Loop through the individual data objects in the array
			if (!properties.includes(prop)) { //If prop isn't one of the necessary properties delete it
				delete item[prop]
			}
		})
	})
	data = filterDataMedia_types(data) //Filter out all videos
	data = copyrightGoodDefault(data) //Assign good-default copyright value
	return IDgenerator(data)
}

//Filter out all non image media_types
function filterDataMedia_types(data) {
	return data.filter(item => item.media_type === 'image')
}

//Add "public domain" to object items without a copyright key
function copyrightGoodDefault(data) {
	data.map(item => item.copyright = (item.copyright === undefined) ? "public domain" : item.copyright)
	return data
}

//Give each data object an unique ID
function IDgenerator(data) {
	let index = 0

	//Give data-item unique ID
	data.map(item => {
		item.id = index
		index++
	})
	return data
}

module.exports = cleanData