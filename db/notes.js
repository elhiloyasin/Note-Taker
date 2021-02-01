const util = require('util');
const fs = require('fs');
// This package will be used to generate our unique ids. https://www.npmjs.com/package/uuid
const uuidv1 = require('uuid/v1');
const readFileAsync = util.promisify(fs.readFile);
const writeFileAsync = util.promisify(fs.writeFile);



class Notes {
    readNotes(){
     return readFileAsync('db/db.json', 'utf8',)


    }

    writeNotes(note){
        return writeFileAsync('db/db.json', JSON.stringify(note))
   
   
       }

        getNotes(){
        return this.readNotes().then(data =>{
            let addNotes;

            try{
                addNotes = [].concat(JSON.parse(data))

            }
            catch(err){
                addNotes = []
            }
            return addNotes
        })

       }
        newNotes(note){
        const {title,text} = note

        if(!title || !text){
            console.log('Tile and text cannont remain blank');
        }

        const finalNote = {title,text, id:uuidv1()}
        return this.getNotes().then(data =>[...data,finalNote]).then(updatedData => this.writeNotes(updatedData)).then(()=> finalNote);

        }
        deleteNotes(id){
            return this.getNotes().then(data => data.filter(note => note.id !== id )).then(data => this.writeNotes(data));


        }
}

module.exports = new Notes();


