const express = require('express');
require('./config/connect')

const app = express();

app.post( '/add' , ()=>{
    console.log('add fct');

})
app.get('/getAll',()=>{
    console.log('get all fct');
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