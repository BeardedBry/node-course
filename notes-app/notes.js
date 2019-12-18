const fs = require('fs');
const chalk = require('chalk');

const getNotes = function () {
    return "Your notes...";
}

const addNote = (title, body) => {
    const notes = loadNotes();

    const duplicateNotes = notes.filter( (note) => note.title == title);

    if (duplicateNotes.length === 0) {
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
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote
}