const express = require('express');

const router = express.Router();
const Pokemon = require('../models/pokemon')


router.post( '/add' , (req,res)=>{
   
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
router.post( '/create' , async (req,res)=>{
    try {
        const data = req.body;
    pkm = new Pokemon(data);
    savedObject = await pkm.save()
    res.status(200).send(savedObject)
        
    } catch (error) {
        res.status(400).send(error)
    }

})
router.get('/getAll', (req, res) => {
    Pokemon.find()
      .then((data) => {
        res.status(200).send(data);
      })
      .catch((err) => {
        res.status(400).send(err);
      });
  });

  router.get('/getAllPokemon', async (req, res) => {
    try {
        data = await Pokemon.find({name : "bulbazor"});
         res.status(200).send(data);
        
    } catch (error) {
        res.status(400).send(error)
         
    }
  })

  router.put('/update/:id',(req,res)=>{
    
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

router.delete('/delete/:id',(req,res)=>{
    const myid = req.params.id;
      Pokemon.findByIdAndDelete({_id : myid }).then(
         ()=>{
             res.status(200).send(` object deleted `);
         }
      ).catch((err) => {
         res.status(400).send(err);
       })
 })

 router.get('/getById/:id', async (req, res) => {
    myid = req.params.id;
    try {
        data = await Pokemon.findOne({_id : myid});
         res.status(200).send(data);
        
    } catch (error) {
        res.status(400).send(error)
         
    }
  })




module.exports = router ; 