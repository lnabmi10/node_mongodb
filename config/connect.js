const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/pokeDataBase')
.then(
    ()=>{
        console.log('data base connected')
    }
).catch(
    (e)=>{console.log(e);}
)

module.exports = mongoose