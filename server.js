const express = require('express');
const Pokemon = require('./models/pokemon')
require('./config/connect')

const app = express();
app.use(express.json())

app.post( '/add' , (req,res)=>{
   
    const data = req.body;
    pkm = new Pokemon(data);
    pkm.save()
    .then(
        (savedObject)=>{
            res.send(savedObject)
        }
    )
    .catch(
        (e)=>{
            res.send(e)
        }
    )

})
app.post( '/create' , async (req,res)=>{
    try {
        const data = req.body;
    pkm = new Pokemon(data);
    savedObject = await pkm.save()
    res.send(savedObject)
        
    } catch (error) {
        res.send(error)
    }

})
app.get('/getAll', (req, res) => {
    Pokemon.find()
      .then((data) => {
        res.send(data);
      })
      .catch((err) => {
        res.send(err);
      });
  });
  
  app.get('/getAllPokemon', async (req, res) => {
    try {
        data = await Pokemon.find({name : "bulbazor"});
         res.send(data);
        
    } catch (error) {
        res.send(error)
         
    }
  })




app.put('/put',()=>{
    console.log('put fct');
} )

app.delete('/delete',()=>{
    console.log('delete work');
})
app.listen( 3000  , ()=>{
    console.log('server work');
} )