import express from "express";
import cors from "cors";

import {startRedis} from "./redis";

import pokemonRoute from "./routes/pokemon.route";
import {syncPokemonList} from "./services/pokemon.service";

const PORT = 3434;

const app = express();

app.use(cors({origin: "http://localhost:3000"}));

app.use("/pokemon", pokemonRoute);

(async () => {
  await startRedis();
  await syncPokemonList();
  app.listen(PORT, () => console.log(`Server is open on port ${PORT}`));
})();
