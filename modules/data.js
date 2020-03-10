const cleanData = (data, properties) => {
	data.map(item => {
		Object.keys(item).map(prop => {
			if (!properties.includes(prop)) {
				delete item[prop]
			}
		})
	})
	data = filterDataMedia_types(data)
	data = copyrightGoodDefault(data)
	return IDgenerator(data)
}


function filterDataMedia_types(data) {
	return data.filter(item => item.media_type === 'image')
}


function copyrightGoodDefault(data) {
	data.map(item => item.copyright = (item.copyright === undefined) ? "public_domain" : item.copyright)
	return data
}


function IDgenerator(data) {
	let index = 0

	data.map(item => {
		item.id = index
		index++
	})
	return data
}

module.exports = cleanData