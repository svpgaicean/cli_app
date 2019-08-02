const commander = require('./node_modules/commander');
const program = new commander.Command();

const inq = require('./inquirer.js');
const fs = require('./fs.js');
const funcs = require('./functions.js');

program
	.command('a')
	.description('add product')
	.action(() => {
		console.log('at add');
		inq.addProduct();
	})
	// .option('r, --recursive')
	// .action()

program
	.command('d')
	.description('remove product')
	.action(() => {
		console.log('at rem');
		fs.removeItem(id);
	})

program
	.command('l')
	.description('list products')
	.action(() => {
		console.log('at list');
		funcs.listItems(file);
	})

program	
	.command('s <id>')
	.description('search product by id')
	.action(() => {
		console.log('at search');
		inq.getProduct(id);
	})

program.parse(process.argv);
