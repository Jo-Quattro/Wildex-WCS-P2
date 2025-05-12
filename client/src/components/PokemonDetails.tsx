import { useEffect, useState } from "react";
import { useParams } from "react-router";
import typeColors from "./TypeColors";

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
  species: {
    url: string;
  };
  moves: { move: { name: string } }[]; // Ajout des attaques
  stats: {
    base_stat: number;
    stat: {
      name: string;
    };
  }[]; // Ajout des stats
}

interface EvolutionChain {
  species: {
    name: string;
    image: string;
  };
  evolves_to: EvolutionChain[];
}

function PokemonDetails() {
  const { name } = useParams(); // Récupère le paramètre 'name' depuis l'URL
  const [pokemon, setPokemon] = useState<PokemonDetails | null>(null);
  const [funFact, setFunFact] = useState<string | null>(null);
  const [evolution, setEvolution] = useState<{ name: string; image: string }[]>(
    [],
  );

  useEffect(() => {
    // Fetch les données du Pokémon en utilisant l'API
    if (name) {
      fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
        .then((response) => response.json())
        .then((data: PokemonDetails) => {
          setPokemon(data);
          return fetch(`https://pokeapi.co/api/v2/pokemon-species/${name}`);
        })
        .then((res) => res.json())
        .then((speciesData) => {
          return fetch(speciesData.evolution_chain.url);
        })
        .then((res) => res.json())
        .then((evoData) => {
          const evoList: string[] = [];
          const traverse = (node: EvolutionChain) => {
            evoList.push(node.species.name);

            for (const child of node.evolves_to) {
              traverse(child);
            }
          };

          traverse(evoData.chain);

          const filtered = evoList.filter(
            (evoName) => evoName !== name.toLowerCase(),
          );

          Promise.all(
            filtered.map((evoName) =>
              fetch(`https://pokeapi.co/api/v2/pokemon/${evoName}`).then(
                (res) => res.json(),
              ),
            ),
          ).then((evoDataArray) => {
            const formatted = evoDataArray.map((evo) => ({
              name: evo.name,
              image: evo.sprites.other["official-artwork"].front_default,
            }));
            setEvolution(formatted);
          });

          fetch(`https://pokeapi.co/api/v2/pokemon-species/${name}`)
            .then((response) => response.json())
            .then((data) => {
              const flavorText = data.flavor_text_entries[0].flavor_text;
              setFunFact(flavorText);
            });
        });
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
      {/* <p>Types: {pokemon.types.map((t) => t.type.name).join(", ")}</p> */}
      <p>
        Types:{" "}
        {pokemon.types.map((t) => (
          <span
            key={t.type.name}
            style={{
              backgroundColor:
                typeColors[t.type.name as keyof typeof typeColors],
            }}
          >
            {t.type.name}
          </span>
        ))}
      </p>
      <p>Pokemon #{String(pokemon.id).padStart(4, "0")}</p>

      {/* Affichage des stats */}
      <div>
        <h2>Stats</h2>
        <ul>
          {pokemon.stats.map((stat) => (
            <li key={stat.stat.name}>
              {stat.stat.name}: {stat.base_stat}
            </li>
          ))}
        </ul>
      </div>

      {/* Affichage du fun fact */}
      {funFact && (
        <div>
          <h2>Fun Fact</h2>
          <p>{funFact}</p>
        </div>
      )}

      {evolution.length > 0 ? (
        <div>
          <h2>Évolutions</h2>
          {evolution.map((evo) => (
            <a key={evo.name} href={`/pokemons/${evo.name}`}>
              <p style={{ color: "blue", fontWeight: "bold" }}>{evo.name}</p>
              <img src={evo.image} alt={evo.name} />
            </a>
          ))}
        </div>
      ) : (
        <p>Ce Pokémon n’évolue pas.</p>
      )}
      {/* Ajout des attaques */}
      <div>
        <h2>Attaques</h2>
        <ul>
          {pokemon.moves.slice(0, 10).map((move) => (
            <li key={move.move.name}>{move.move.name}</li> // Affiche le nom de chaque attaque
          ))}
        </ul>
      </div>
    </div>
  );
}

export default PokemonDetails;
