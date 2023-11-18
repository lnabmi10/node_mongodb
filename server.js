const express = require('express');
require('./config/connect')

const  pokemonRoute = require('./routes/pokemon');
const  userRoute = require('./routes/user');


const app = express();
app.use(express.json());

app.use('/pokemon',pokemonRoute)
app.use('/user',userRoute)
app.use('/getimage', express.static('./images'))



app.listen( 3000  , ()=>{
    console.log('server work');
} )