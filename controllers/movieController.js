import Movie from "../models/movieModel.js"
import asyncHandler from 'express-async-handler';
export const testMovie = (req,res) =>{
 return res.json({"status": 200,"message": "Testing"})
}

export const getMovies = asyncHandler(async (req, res) => {
    const movies = await Movie.find()

    if(!movies || movies.length === 0){
        res.status(404)
        return res.json({"status": 404,"message": "No movies available"})
    }
     movies.sort(function(a, b){
        if(a.title.toLowerCase() < b.title.toLowerCase()) { return -1; }
        if(a.title.toLowerCase() > b.title.toLowerCase()) { return 1; }
        return 0})


    return res.json({"status": 200,"data": movies})
});
export const getMovie = asyncHandler(async (req, res) => {
    const movie= await Movie.find( req.params.id)

    if(!movie || movie.length === 0){
        res.status(404)
        return res.json({"status": 404,"message": "No movie found"})
    }

    return res.json({"status": 200,"data": movie})
});


export const createMovie = asyncHandler(async (req, res) => {
   
    const {title, year} = req.query;
    var {rating}= req.query;
    if(!title || !year || year.toString().length !== 4){
        return res.json({"status": 500,"message": "Bad Data","data": req.params})
    }
    if(!rating){
        rating =4;
    }
  

    const movie = await Movie.create({title, year, rating})

    if(!movie){
        res.status(400)
        throw new Error('Bad Data!')
    }

    res.json(movie)
});

export const updateMovie = asyncHandler(async (req, res) => {
    const query = {"_id":req.params.id};
    const {title, year} = req.query;
    var {rating}= req.query;
 
  

    const movie = await Movie.findOneAndUpdate(query,{title, year, rating})

    if(!movie){
        res.status(400)
        throw new Error('Bad Data!')
    }

    res.json(movie)
});
