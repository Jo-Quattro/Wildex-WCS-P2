import { useEffect, useState } from "react";

// This props define the types of the data we get from the API (an array of objects)
interface genResponse {
  pokemon_species: pokemonType[];
}

// Defining the types for the Pokemon data we put in our state
interface pokemonType {
  name: string;
  id: number;
  sprites: {
    other: {
      "official-artwork": {
        front_default: string;
      };
    };
  };
}
//

function Pokemons() {
  const [pokemons, setPokemons] = useState<pokemonType[]>([]);

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/generation/1/") //Fetching the 151 first Pokemons
      .then((response) => response.json())
      .then((data: genResponse) => {
        const pokeSpecie = data.pokemon_species;
        // We map through the array of objects and fetch each Pokemon individually
        const allPokemons = pokeSpecie.map((pokeSpecie) =>
          fetch(`https://pokeapi.co/api/v2/pokemon/${pokeSpecie.name}`).then(
            (response) => response.json(),
          ),
        );
        // We use Promise.all to wait for all the fetches to finish before resolving the promise
        Promise.all(allPokemons).then((results: pokemonType[]) => {
          setPokemons(results);
        });
      });
  }, []);
  return (
    <>
      {pokemons.map((pokemon) => (
        <img
          key={pokemon.id}
          src={pokemon.sprites.other["official-artwork"].front_default}
          alt={pokemon.name}
        />
      ))}
    </>
  );
}

export default Pokemons;
