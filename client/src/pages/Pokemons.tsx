import { useEffect, useState } from "react";

interface pokemonType {
  name: string;
}

function Pokemons() {
  const [pokemons, setPokemons] = useState<pokemonType[] | null>(null);
  useEffect(() => {
    // if (pokemons.length === 0) {
    fetch("https://pokeapi.co/api/v2/generation/1/")
      .then((response) => response.json())
      .then((data) => {
        setPokemons(data.pokemon_species);
      });
    // }
  }, []);
  return <h1>{pokemons?.length}</h1>;
}

export default Pokemons;
