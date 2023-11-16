const mongoose = require('mongoose');

const User = mongoose.model('User',{
    name : {
        type : String
    },
    pokemonOwned : {
        type : [String]
    },
    level : {
        type : Number
    },
    image : {
        type : String
    }
}

)


module.exports = User;