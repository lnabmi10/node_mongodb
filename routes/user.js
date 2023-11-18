const express = require('express');

const router = express.Router();
const User = require('../models/user')
const multer = require('multer')
let filename = '';



const myStorage = multer.diskStorage({
    destination : './images',
    filename : (req , file , red)=>{
        let date = Date.now();
        let newFlname = date + '.' + file.mimetype.split('/')[1];
        red(null,newFlname);
        filename = newFlname;

    }
})

const uploadMW = multer({storage:myStorage})

router.post( '/addUser',uploadMW.any('image') , (req,res)=>{
   
    const data = req.body;
    usr = new User(data);
    usr.image = filename;
    usr.save()
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
    filename='';

})


  router.get('/getAllUsers', (req, res) => {
    User.find()
      .then((data) => {
        res.status(200).send(data);
      })
      .catch((err) => {
        res.status(400).send(err);
      });
  });
  
 
  


  router.get('/getUserById/:id', async (req, res) => {
    myid = req.params.id;
    try {
        data = await User.findOne({_id : myid});
         res.status(200).send(data);
        
    } catch (error) {
        res.status(400).send(error)
         
    }
  })





router.put('/updateUser/:id',(req,res)=>{
    
    myid = req.params.id;
    const mydata = req.body;
    User.findByIdAndUpdate({_id : myid} , mydata)
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


router.delete('/deleteUser/:id',(req,res)=>{
    const myid = req.params.id;
      User.findByIdAndDelete({_id : myid }).then(
         ()=>{
             res.status(200).send(` object deleted `);
         }
      ).catch((err) => {
         res.status(400).send(err);
       })
 })





module.exports = router;