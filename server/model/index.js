const fs = require('fs');

var fetchNotes = () => {
    try{
        var notesString = fs.readFileSync('notes-data.json');
        return JSON.parse(notesString);
    } catch (e) {
        return [];
    }
};

var saveNotes = (notes) => {
    fs.writeFileSync('notes-data.json', JSON.stringify(notes));
};

var add = (title, body, img_src) => {
    var notes = fetchNotes();
    var d = new Date();
    var timestamp = d.getFullYear()+"-"+d.getMonth()+"-"+d.getDate()+" "+d.getHours()+":"+d.getMinutes();
    var note = {
        title,
        body,
        img_src,
        timestamp
    };

    var duplicateNotes = notes.filter((note) => note.title === title);

    if(duplicateNotes.length === 0) {
        notes.push(note);
        saveNotes(notes);
        return note;
    }
};

var getAll = () => {
    return fetchNotes();
}

var get = (title) => {
    var notes = fetchNotes();
    var filteredNotes = notes.filter((note) => note.title === title );
    return filteredNotes[0];
}

var remove = (title) => {
    var notes = fetchNotes();
    var filteredNotes = notes.filter((note) => note.title !== title);
    saveNotes(filteredNotes);
    return notes.length !== filteredNotes.length;
}

var logNote = (note) => {
    console.log('----');
    console.log(`Title: ${note.title}`);
    console.log(`Body: ${note.body}`);
};

module.exports = {
    addNote,
    getAll,
    getNote,
    removeNote,
    logNote
}
