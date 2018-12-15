
//save a note 
let notes = [];
let numberOfNotes;
function addNote(note, noteId)
{
    note = "";
    noteId = 2;
    let noteobj = {
        note : noteId
    }
    notes.push(noteobj);
    numberOfNotes = notes.length;
}
addNote("fgg", 1);
console.log(numberOfNotes);