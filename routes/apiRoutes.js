const db = require('../db/db.json')
const path = require('path');
const  fs  = require('fs');
const Notes = require('../db/notes');
//
module.exports = (app) => {
    
    app.get('/api/notes', (req,res) => {
      Notes.getNotes().then(data => res.json(data))
    });
   
    app.post('/api/notes',(req,res)=>{
     Notes.newNotes(req.body).then(data => res.json(data))
    });
    app.delete('/api/notes/:id',(req,res)=>{
        Notes.deleteNotes(req.params.id).then(() => res.json({ok:true}))
       });
    
};

