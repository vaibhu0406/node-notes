const val = require('validator')
const chalk = require('chalk')
const yargs = require('yargs')
const notes=require('./app1.js')
//const command= process.argv[2]
 //console.log(y.argv)
//console.log(command)
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder:
    {
            title:
            {
             describe:'title of the note',
             demandOption:true,
             type:'string'   
            },
            b:
            {
                describe:'body of the note',
                demandOption:true,
                type:'string'
            }


    },
    handler: (argv)=> {
        // console.log(`title:-${argv.title}`)
        // console.log(`body${argv.b}`)

        notes.addnote(argv.title,argv.b)
    }
})
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    builder:{
            title:{
                describe:'note title you want to remove',
                demandOption:true,
                type:'string'
            }
    },
    handler:  (argv)=> {
        notes.removeNote(argv.title)
    }
})

// Create list command
yargs.command({
    command: 'list',
    describe: 'List your notes',
    builder:
    {
            // title:
            // {
            //  describe:'list',
            //  demandOption:true,
            //  type:'string'   
            // }

    },
    handler: (argv) =>{
        notes.listNote()
    }
})

// Create read command
yargs.command({
    command: 'read',
    describe: 'Read a note',
   builder:
   {
       title:{
           describe:'note title',
           demandOption:true,
           type:'string'
       }
   },
    handler:  (argv)=> {
        notes.readNote(argv.title)
    }
})//.argv

yargs.parse();
//console.log(yargs.argv)