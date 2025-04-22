import PokemonCard from "./PokemonCard";
import "./PokemonCard.css";

const pokemonGen1 = [
  {
    id: 1,
    name: "Bulbasaur",
    type: "Grass",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
  },

  {
    id: 2,
    name: "Ivysaur",
    type: "Grass",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/2.png",
  },

  {
    id: 3,
    name: "Venusaur",
    type: "Grass",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/3.png",
  },

  {
    id: 4,
    name: "Charmander",
    type: "Fire",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
  },

  {
    id: 5,
    name: "Charmeleon",
    type: "Fire",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/5.png",
  },
];

function Pokemons() {
  return (
    <section className="pokemon-list">
      <PokemonCard pokemon={pokemonGen1[0]} />
      <PokemonCard pokemon={pokemonGen1[1]} />
      <PokemonCard pokemon={pokemonGen1[2]} />
      <PokemonCard pokemon={pokemonGen1[3]} />
      <PokemonCard pokemon={pokemonGen1[4]} />
    </section>
  );
}

export default Pokemons;
