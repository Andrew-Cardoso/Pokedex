import express from 'express';
import {getPokemon, listPokemon} from '../controllers/pokemon.controller';

const router = express.Router();

router.get('/names-list', listPokemon);
router.get('/:key', getPokemon);

export default router;
