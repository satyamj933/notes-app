const notes=require('./notes.js')
const chalk=require('chalk')
const yargs=require('yargs')

//changing the yargs version
yargs.version('1.1.0')

//Create add command
yargs.command({
    command: 'add',
    descibe: 'Add a new note',
    builder: {
        title:{
            descibe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body:{
            descibe: 'Note body',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv){
        notes.addNote(argv.title,argv.body)
    }
})

//Create remove command
yargs.command({
    command: 'remove',
    descibe: 'Remove a note',
    title:{
        descibe: 'Note title',
        demandOption: true,
        type: 'string'
    },
    handler(argv){
        notes.removeNote(argv.title)
    }
})

//Create list command
yargs.command({
    command: 'list',
    descibe: 'List the note',
    handler(){
        notes.listNotes()
    }
})

//Create read command
yargs.command({
    command: 'read',
    descibe: 'Read the note',
    builder: {
        title: {
            descibe: 'Read Note',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv){
        notes.readNotes(argv.title)
    }
})

yargs.parse()