const pokemonGen1 = [
  {
    id: 1,
    name: "Bulbasaur",
    type: "Grass/Poison",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
  },

  {
    id: 2,
    name: "Ivysaur",
    type: "Grass/Poison",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png",
  },

  {
    id: 3,
    name: "Venusaur",
    type: "Grass/Poison",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png",
  },

  {
    id: 4,
    name: "Charmander",
    type: "Fire",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png",
  },

  {
    id: 5,
    name: "Charmeleon",
    type: "Fire",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png",
  },
];

function Pokemons() {
  return (
    <section>
      <h1>Pokémon Generation 1</h1>
      {pokemonGen1.map((pokemon) => (
        <section key={pokemon.id}>
          <h2>{pokemon.name}</h2>
          <p>Type: {pokemon.type}</p>
          <img src={pokemon.image} alt={pokemon.name} />
        </section>
      ))}
    </section>
  );
}

export default Pokemons;
