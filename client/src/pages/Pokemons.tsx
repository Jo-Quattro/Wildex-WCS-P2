import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router";
import PokemonCard from "../components/PokemonCard";

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
  front_default: string;
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

  const location = useLocation();
  //On stock l'url de notre page Pokemons/{id}, en lui donnant le nom "savedUrl"
  useEffect(() => {
    localStorage.setItem("savedUrl", location.pathname);
  });

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
          // Pokemons will now been displayed in dorder of their ID
          const sortedPokemons = results.sort((a, b) => a.id - b.id);
          setPokemons(sortedPokemons);
        });
      });
  }, [id]);

  return (
    <section className="pokemonCardContainer">
      {pokemons.map((pokemon) => (
        <PokemonCard
          key={pokemon.id}
          name={pokemon.name}
          id={pokemon.id}
          types={pokemon.types}
          url={pokemon.url}
          front_default={
            pokemon.sprites.other["official-artwork"].front_default
          }
          sprites={pokemon.sprites}
        />
      ))}
    </section>
  );
}

export default Pokemons;
