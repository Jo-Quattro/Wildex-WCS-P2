import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import MenuBurgerRed from "../assets/images/menuBurgerRed.svg";
import WildexlogoV1 from "../assets/images/WildexlogoV1.png";

function Header() {
  const [searchQuery, setSearchQuery] = useState("");
  const [pokemons, setPokemons] = useState<{ name: string; url: string }[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPokemons = async () => {
      const response = await fetch(
        "https://pokeapi.co/api/v2/pokemon?limit=1025",
      );
      const data = await response.json();
      setPokemons(data.results);
    };
    fetchPokemons();
  }, []);

  const handleSearch = () => {
    const found = pokemons.find(
      (pokemon) => pokemon.name.toLowerCase() === searchQuery.toLowerCase(),
    );

    if (found) {
      navigate(`/pokemonDetails/${found.name}`); // <-- Redirection vers la page du Pokémon
    } else {
      alert("Aucun Pokémon trouvé !");
    }
  };

  return (
    <header>
      <section className="burger-logo-search">
        <section className="section-menu-burger">
          <img className="menu-burger" src={MenuBurgerRed} alt="Menu burger" />
          <img className="logo" src={WildexlogoV1} alt="Logo du site" />
        </section>

        <section className="search-bar">
          <label htmlFor="recherche">Pokemon</label>
          <input
            type="text"
            placeholder="Recherche son nom ici !"
            name="recherche"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />

          <button type="button" onClick={handleSearch}>
            Rechercher
          </button>
        </section>
      </section>
      <nav>
        <ul>
          <li>Gen1</li>
          <li>Gen2</li>
          <li>Gen3</li>
          <li>Gen4</li>
          <li>Gen5</li>
          <li>Gen6</li>
          <li>Gen7</li>
          <li>Gen8</li>
          <li>Gen9</li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
