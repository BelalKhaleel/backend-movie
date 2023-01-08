import express from 'express';
import { testMovie, getMovies , getMovie,createMovie,updateMovie  } from '../controllers/movieController.js';
const router = express.Router();

router.route('/test').get(testMovie)
router.route('/all').get(getMovies)
router.route('/:id').get(getMovie)
router.route('/add').post(createMovie)
router.route('/update/:id').put(updateMovie)

export default router; 