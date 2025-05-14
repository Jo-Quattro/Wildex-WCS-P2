import "./PokemonCard.css";
import { Link } from "react-router";
import typeColors from "./TypeColors";

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
      <Link to={`/pokemonDetails/${name}`}>
        <img
          src={sprites.other["official-artwork"].front_default}
          alt={`pokemon ${name}`}
        />
      </Link>
      <figcaption>
        <h2>#{String(id).padStart(4, "0")}</h2>

        <h1>{name}</h1>
        <div className="pokemon-types">
          {types.map((typeObj) => (
            <span
              key={typeObj.type.name}
              className="pkmTypes"
              style={{
                backgroundColor:
                  typeColors[typeObj.type.name as keyof typeof typeColors],
              }}
            >
              {typeObj.type.name}
            </span>
          ))}
        </div>
      </figcaption>
    </figure>
  );
}
export default PokemonCard;
