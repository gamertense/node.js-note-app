const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs')

const notes = require('./notes.js');

const argv = yargs.argv
var command = process.argv[2];

let note

switch (command) {
  case 'add':
    note = notes.addNote(argv.title, argv.body)
    if (note) {
      console.log("Note created")
      notes.logNote(note)
    }
    else
      console.log("Duplicated note!")
    break;
  case 'list':
    const allNotes = notes.getAll()
    console.log(`Printing ${allNotes.length} note(s)`)
    allNotes.forEach(note => notes.logNote(note));
    break;
  case 'read':
    note = notes.getNote(argv.title)
    if (note) {
      console.log("Note found")
      notes.logNote(note)
    } else
      console.log("Note not found")
    break;
  case 'remove':
    const noteRemoved = notes.removeNote(argv.title)
    const message = noteRemoved ? 'Note was removed' : 'Note not found'
    console.log(message)
    break;
  default:
    console.log('Command not recognized');
}