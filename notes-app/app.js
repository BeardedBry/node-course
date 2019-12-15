const chalk = require('chalk');
const yargs = require('yargs');
const notes = require('./notes.js');

// customize yargs verion
yargs.version('1.1.0');

// create add command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'note body',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function (argv) {
        notes.addNote(argv.title, argv.body);
    }
});

// create remove command
yargs.command({
    command: 'remove',
    describe: 'removes a note',
    handler: function () {
        console.log('removing note');
    }
});

// create read command
yargs.command({
    command: 'read',
    describe: 'reads a note',
    handler: function () {
        console.log('reading note: ');
    }
});

// create list command
yargs.command({
    command: 'list',
    describe: 'lists notes',
    handler: function () {
        console.log('listing notes: ');
    }
});

yargs.parse();
// add, remove, read, list 

//console.log(chalk.blue.bold.inverse("Kristy!!!"));

//console.log(yargs.argv);

//console.log(process.argv);
//console.log(chalk.red.inverse('error'));
// //fs.writeFileSync('notes.txt', 'new text');
// fs.appendFileSync('notes.txt', '\nThis is appended text.');