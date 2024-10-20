/*
* module
* - readers.js
* - various readers, file loaders &c.
*/

/*
* FILES
* - loadLocalFile
*/

// read local file - Promise resolves if successful
const loadLocalFile = (file) => {
	
	const localFiles = {
		//config: require('../config/config.json'),
		//content: require('../docs/content.json'),
	};
	
	const data = localFiles[file];

	return Promise.resolve(data);
	
}

export {
	loadLocalFile
};
