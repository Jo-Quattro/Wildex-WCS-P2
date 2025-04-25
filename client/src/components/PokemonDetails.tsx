import { useEffect, useState } from "react";
import { useParams } from "react-router";

interface PokemonDetails {
  name: string;
  id: number;
  types: {
    type: {
      name: string;
    };
  }[];
  sprites: {
    other: {
      "official-artwork": {
        front_default: string;
      };
    };
  };
}

function PokemonDetails() {
  const { name } = useParams(); // Récupère le paramètre 'name' depuis l'URL
  const [pokemon, setPokemon] = useState<PokemonDetails | null>(null);

  useEffect(() => {
    // Fetch les données du Pokémon en utilisant l'API
    if (name) {
      fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
        .then((response) => response.json())
        .then((data: PokemonDetails) => setPokemon(data));
    }
  }, [name]); // Re-exécuter l'effet lorsque 'name' change

  if (!pokemon) return <p>Loading...</p>; // Affichage de "loading" tant que les données ne sont pas chargées

  return (
    <div>
      <h1>{pokemon.name}</h1>
      <img
        src={pokemon.sprites.other["official-artwork"].front_default}
        alt={pokemon.name}
      />
      <p>Types: {pokemon.types.map((t) => t.type.name).join(", ")}</p>
      <p>Pokemon #{pokemon.id}</p>
    </div>
  );
}

export default PokemonDetails;
