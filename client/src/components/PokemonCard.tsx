interface pokemons {
  pokemon: {
    name: string;
    image: string;
    type: string;
    id: number;
  };
}

function PokemonCard({ pokemon }: pokemons) {
  return (
    <figure className="pokemon-card">
      <img src={pokemon.image} alt={pokemon.name} />
      <figcaption>
        <h2> {pokemon.id} </h2>

        <h2>{pokemon.name}</h2>

        <div className="pokemon-type">{pokemon.type}</div>
      </figcaption>
    </figure>
  );
}

export default PokemonCard;
