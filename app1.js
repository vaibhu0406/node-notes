const fs=require('fs')
const validator = require('validator')
const chalk=require('chalk')
//const name= require('./util.js')


//let add=sum(6,-7);
//console.log(validator.isEmail('vnpandya@gmail.com'));

//let n=chalk.bold.pink

const getnote = ()=>{
    console.log(chalk` your note is here`);
}
//note(name);
const addnote=(title,body)=>
{
    const note=Loadnote()
    const duplicatenote=note.filter(function(n){
        return n.title === title
    })

    debugger

    if (duplicatenote.length===0) {
        note.push({
            title:title,
            body:body
        })
    
        saveNote(note)
        console.log('new note added')
    } else {
        console.log('note title taken')
    }

   
}

const saveNote=(note)=>
{
    const dataJSON=JSON.stringify(note)
    fs.writeFileSync('notes.json',dataJSON)
}
const Loadnote=()=>
{
    try 
    {
            const databuffer =fs.readFileSync('notes.json')
            const dataJSON=databuffer.toString()
            return JSON.parse(dataJSON)
    } catch (error) {
        return []
    }
}

const removeNote=(title)=>
{
        const notes=Loadnote()
        const notestokeep=notes.filter((n)=>
        {
            return n.title !== title
        })
        if (notestokeep.length <notes.length) {
            console.log(`Note titled ${chalk.green.inverse(title)} Removed`)
            saveNote(notestokeep)
        } else {
            console.log(chalk.red.inverse(`No note Found`))
        }
            
}

const listNote=()=>
{
    console.log(chalk.bold.underline('your notes'))
    const note=Loadnote()
    note.forEach(e => {
        console.log(e.title)
    });
}

const readNote=(title)=>
{
    const notes=Loadnote()
    const n=notes.find((note)=>note.title===title)
    if (n) {
        console.log(`title:-`+chalk.bold.inverse(n.title))
        console.log(`body:-`+n.body)
    } else {
        console.log('no note found')
    }
}

module.exports=
{
    getnote:getnote,
    addnote:addnote,
    removeNote:removeNote,
    listNote:listNote,
    readNote:readNote
}