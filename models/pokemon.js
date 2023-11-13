const mongoose = require('mongoose');

const Pokemon = mongoose.model('Pokemon',{
    name : {
        type: String
    },
    statistics : {
        type : [Number]
    },

    specialAttacks : {
        type : [String]
    }

}

)

module.exports = Pokemon ;