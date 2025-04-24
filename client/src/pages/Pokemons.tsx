import { useEffect, useState } from "react";
import { useParams } from "react-router";

// This props define the types of the data we get from the API (an array of objects)
interface genResponse {
  pokemon_species: pokemonType[];
}
// Defining the types for the Pokemon data we put in our state
interface pokemonTypeType {
  type: {
    name: string;
  };
}
interface pokemonType {
  name: string;
  url: string;

  id: number;
  types: pokemonTypeType[];
  sprites: {
    other: {
      "official-artwork": {
        front_default: string;
      };
    };
  };
}

function getId(url: string) {
  const id = url.split("/").slice(-2)[0];
  return id;
}

function Pokemons() {
  const { id } = useParams();

  const [pokemons, setPokemons] = useState<pokemonType[]>([]);

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/generation/${id}`) //Fetching the 151 first Pokemons
      .then((response) => response.json())
      .then((data: genResponse) => {
        const pokeSpecie = data.pokemon_species;
        // We map through the array of objects and fetch each Pokemon individually
        const allPokemons = pokeSpecie.map((pokeSpecie) =>
          fetch(
            `https://pokeapi.co/api/v2/pokemon/${getId(pokeSpecie.url)}`,
          ).then((response) => response.json()),
        );
        // We use Promise.all to wait for all the fetches to finish before resolving the promise
        Promise.all(allPokemons).then((results: pokemonType[]) => {
          setPokemons(results);
          console.info(results);
        });
      });
  }, [id]);

  return (
    <>
      {pokemons.map((pokemon) => (
        <div key={pokemon.id} className="card">
          <img
            src={pokemon.sprites.other["official-artwork"].front_default}
            alt={pokemon.name}
          />
          <h2>{pokemon.name}</h2>
          <h2>{pokemon.types[0].type.name}</h2>
          <p>#{pokemon.id}</p>
        </div>
      ))}
    </>
  );
}

export default Pokemons;
