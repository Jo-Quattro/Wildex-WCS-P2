import { useEffect, useState } from "react";
import { useNavigate } from "react-router";

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
//

function Pokemons() {
  const [pokemons, setPokemons] = useState<pokemonType[]>([]);
  const navigate = useNavigate();

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

  const handlePokemonClick = (name: string) => {
    // Naviguer vers la page de détails du Pokémon
    navigate(`/pokemons/${name}`);
  };

  return (
    <>
      {pokemons.map((pokemon) => (
        <div
          key={pokemon.id}
          className="card"
          onClick={() => handlePokemonClick(pokemon.name)}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              handlePokemonClick(pokemon.name);
            }
          }}
        >
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
