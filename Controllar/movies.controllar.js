const movie = require("../Model/movie.model")


module.exports.getList = async (req, res) => {
    try{
        let movies = await movie.find();
        res.status(200).send(movies)
    }catch(err){
        console.log(err);
        res.status(400).send(err.message)
    }
  };

