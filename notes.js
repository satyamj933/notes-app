const fs=require('fs')
const chalk=require('chalk')
const getNotes=() =>  'Your notes..'


const addNote=function(title,body){
    const notes=loadNotes()
    const duplicateNote = notes.find((note) => note.title === title)
    if(!duplicateNote){
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)
        console.log('New note added')
    }else{
        console.log('Note title taken')
    }
   
}

const saveNotes=function(notes){
    const dataJSON=JSON.stringify(notes)
    fs.writeFileSync('notes.json',dataJSON)
}

const loadNotes=function(){
    try {
        const dataBuffer=fs.readFileSync('notes.json')
        const dataJSON=dataBuffer.toString()
        return JSON.parse(dataJSON)
    } catch (error) {
        return []
    }
}

const removeNote=function(title) {
    const notes=loadNotes()
    const notesToKeep = notes.filter((note) => note.title != title)
    if(notes.length>notesToKeep.length){
        console.log(chalk.bgGreen('note removed'))  
        saveNotes(notesToKeep)
    }else{
        console.log(chalk.bgRed("No note found"))
    }
          
    }

const listNotes = () => {
    const notes=loadNotes()
    console.log(chalk.blue("Your notes"))
    notes.forEach(note => {
        console.log(note.title)        
    });
}

const readNotes= (title) =>{
    const notes=loadNotes()
    const matchedNote = notes.find((note) => note.title === title)
    if(matchedNote){
        console.log(chalk.inverse(matchedNote.title))
        console.log(matchedNote.body)
    }else{
        console.log('no such note exist!!')
    }
} 
module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNotes: readNotes
}