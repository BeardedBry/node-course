const fs = require('fs');

const getNotes = function () {
    return "Your notes...";
}

const addNote = function (title, body) {
    const notes = loadNotes();

    const duplicateNotes = notes.filter(function(note){
        return note.title == title;
    });

    if (duplicateNotes.length === 0) {
        notes.push({
            title: title,
            body: body,
        });
        saveNotes(notes);
        console.log('New note added.');
    }else {
        console.log('Note title taken.');
    }
}

const removeNote = function(title){
    const notes = loadNotes();

    const indexToRemove = notes.findIndex(function(note){
        return note.title == title; 
    })

    if (indexToRemove >= 0) {
        console.log('removing note: ' + title);
        notes.splice(indexToRemove,1);
    }

    saveNotes(notes);

}

const saveNotes = function (notes) {
    const jsonData = JSON.stringify(notes);
    fs.writeFileSync('notes.json',jsonData);
}


const loadNotes = function() {
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