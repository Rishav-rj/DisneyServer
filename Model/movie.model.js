const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const movieSchema = new Schema({
    backgroundImg:{
        type: String
    },
    cardImg:{
        type: String
    },
    description:{
        type: String
    },
    subTitle:{
        type: String
    },
    title:{
        type: String
    },
    titleImg:{
        type: String
    },
    type:{
        type: String
    },

})

let movie = mongoose.model('movieList', movieSchema)
module.exports = movie;