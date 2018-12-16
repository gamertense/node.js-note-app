const fs = require('fs')

let originalNote = {
    title: 'Some title',
    body: 'some body'
}

originalNoteString = JSON.stringify(originalNote)
fs.writeFileSync('./notes.json', originalNoteString)

const noteString = fs.readFileSync('./notes.json')
let note = JSON.parse(noteString)
console.log(typeof note)
console.log(note.title)