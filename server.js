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
            res.status(200).send(savedObject)
        }
    )
    .catch(
        (e)=>{
            res.status(400).send(e)
        }
    )

})
app.post( '/create' , async (req,res)=>{
    try {
        const data = req.body;
    pkm = new Pokemon(data);
    savedObject = await pkm.save()
    res.status(200).send(savedObject)
        
    } catch (error) {
        res.status(400).send(error)
    }

})
app.get('/getAll', (req, res) => {
    Pokemon.find()
      .then((data) => {
        res.status(200).send(data);
      })
      .catch((err) => {
        res.status(400).send(err);
      });
  });
  
  app.get('/getAllPokemon', async (req, res) => {
    try {
        data = await Pokemon.find({name : "bulbazor"});
         res.status(200).send(data);
        
    } catch (error) {
        res.status(400).send(error)
         
    }
  })

  app.get('/getById/:id', async (req, res) => {
    myid = req.params.id;
    try {
        data = await Pokemon.findOne({_id : myid});
         res.status(200).send(data);
        
    } catch (error) {
        res.status(400).send(error)
         
    }
  })




app.put('/update/:id',(req,res)=>{
    
    myid = req.params.id;
    const mydata = req.body;
    Pokemon.findByIdAndUpdate({_id : myid} , mydata)
    .then(
        (updatedObject)=>{
            res.status(200).send(updatedObject)
        }
    )
    .catch(
    (err)=>{
        res.status(400).send(err)
    }
    )
} )

app.delete('/delete/:id',(req,res)=>{
   const myid = req.params.id;
     Pokemon.findByIdAndDelete({_id : myid }).then(
        ()=>{
            res.status(200).send(` object deleted `);
        }
     ).catch((err) => {
        res.status(400).send(err);
      })
})
app.listen( 3000  , ()=>{
    console.log('server work');
} )