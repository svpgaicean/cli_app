let inquirer = require('inquirer');
let fs = require('./fs');

let product_data = [
	{
		type: 'number',
		name: 'id',
		message: 'ID >',
	},
	{
		name: 'categ',
		message: 'Category >',
	},
	{
		name: 'subcateg',
		message: 'Subcategory >',
	},
	{
		name: 'name',
		message: 'Name >',
	},
	{
		name: 'description',
		message: 'Description >',
	},
	{
		type: 'number',
		name: 'price',
		message: 'Price >',
	},
]

module.exports.addProduct = function() {
	inquirer.prompt(product_data).then(product => {
		let data = JSON.stringify(product, null, ' ');	
		fs.addItem(data);
	})
}
