const fs = require('fs');

module.exports.addItem = (data) => {
	fs.appendFile(`./products/products.json`, data, (err) => {
	if (err) {
		console.error(err);
		return;
	}
	console.log("Successfully written to file.");
	// need to add items as array elements somehow.	
});
}

module.exports.removeItem = (id) => {
	// fs.unlink(`./products/${id}.txt`, (err) => {
		// if (err) {
			// console.error(err)
			// return;
		// }
	// });
}
