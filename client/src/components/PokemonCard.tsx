import "./PokemonCard.css";

function PokemonCard() {
  return (
    <figure className="pokemon-card">
      <img
        src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png"
        alt="bulbasaur"
      />
      <figcaption>
        <h2> #0001</h2>
        <h2>bulbasaur</h2>

        <div className="pokemon-type">Grass</div>
      </figcaption>
    </figure>
  );
}

export default PokemonCard;
