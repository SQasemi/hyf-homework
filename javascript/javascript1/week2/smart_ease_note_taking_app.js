
//save a note 
let notes = [];
let numberOfNotes;
note = "dd";
noteId = 2;
function addNote(note, noteId)
{
   
    let noteobj = {
        note : note,
        noteId: noteId
        
    }
    notes.push(noteobj);
    numberOfNotes = notes.length;
}
addNote("fgg", 1);
console.log(numberOfNotes);



//to get note
function getNoteFromId(id){
    for(let i=0; i <= notes.length; i++){
        if(id === notes[i].noteId){
            return notes[i];
        }
        else{
            return "Opps!"; 
        }
    }
}
let getNote =getNoteFromId(1);
console.log(getNote);

//to read notes
function showAllNotes(){
for(let i = 0; i < notes.length; i++)
{
    console.log("The note with id = " + notes[i].noteId + " has the following note = " + notes[i].note);
}
}
showAllNotes();