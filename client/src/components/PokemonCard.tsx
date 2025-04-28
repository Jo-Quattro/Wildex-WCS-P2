import "./PokemonCard.css";

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

function PokemonCard({ name, id, types, sprites }: pokemonType) {
  return (
    <figure className="pokemon-card">
      <img src={sprites.other["official-artwork"].front_default} alt={name} />
      <figcaption>
        <h2> {id} </h2>

        <h2>{name}</h2>

        <div className="pokemon-type">{types[0].type.name}</div>
      </figcaption>
    </figure>
  );
}

export default PokemonCard;
