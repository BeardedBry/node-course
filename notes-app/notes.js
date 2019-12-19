const fs = require('fs');
const chalk = require('chalk');

const getNotes = () => {

}

const listNotes = () => {

    const notes = loadNotes();
    
    console.log(chalk.blue.inverse('Your notes...'));
    notes.forEach( (note, i) => {
        console.log(chalk.inverse(i + ': ' + note.title));
    });
}

const readNote = (title) => {

    const notes = loadNotes();
    const noteToRead = notes.find(note => note.title === title);

    if (noteToRead) {
        console.log(chalk.green.inverse('Reading Note'));
        console.log(chalk.green(noteToRead.title));
        console.log(noteToRead.body);
    } else {
        console.log(chalk.red.inverse('No note found.'));
    }
}

const addNote = (title, body) => {
    const notes = loadNotes();

    //const duplicateNotes = notes.filter( (note) => note.title == title);
    const duplicateNote = notes.find( note => note.title === title);

    if (!duplicateNote) {
        notes.push({
            title: title,
            body: body,
        });
        saveNotes(notes);
        console.log(chalk.green.inverse('New note added.'));
    }else {
        console.log(chalk.red.inverse('Note title taken.'));
    }
}

const removeNote = (title) => {
    const notes = loadNotes();

    const filtered = notes.filter( (note) => note.title !== title );

    if (filtered.length < notes.length) {
        saveNotes(filtered);
        console.log(chalk.inverse.green('Note Removed!'));
    }else {
        console.log(chalk.inverse.red('No note found!'));
    }

}

const saveNotes = (notes) => {
    const jsonData = JSON.stringify(notes);
    fs.writeFileSync('notes.json',jsonData);
}


const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json');
        const dataString = dataBuffer.toString();
        return JSON.parse(dataString);
    } catch (e) {
        return [];
    }

}

module.exports = {
    listNotes: listNotes,
    addNote: addNote,
    readNote: readNote,
    removeNote: removeNote
}