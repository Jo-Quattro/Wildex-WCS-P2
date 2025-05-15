import { useState } from "react";
import { Link } from "react-router";
import "./BurgerMenu.css";

const BurgerMenu = () => {
  // to change burger classes
  const [burger_class, setBurgerClass] = useState("burger-bar unclicked");
  const [menu_class, setMenuClass] = useState("menu hidden");
  const [isMenuClicked, setIsMenuClicked] = useState(false);
  const [generation_class, setGenerationClass] = useState("generation hidden");

  // toggle burger menu change
  const toggleMenu = () => {
    if (!isMenuClicked) {
      setBurgerClass("burger-bar clicked");
      setGenerationClass("generation visible");
      setMenuClass("menu visible");
    } else {
      setBurgerClass("burger-bar unclicked");
      setMenuClass("menu hidden");
      setGenerationClass("generation hidden");
    }
    setIsMenuClicked(!isMenuClicked);
  };

  return (
    // Rendu
    <aside>
      <section className="nav">
        <div className="burger-menu" onClick={toggleMenu} onKeyUp={toggleMenu}>
          <div className={burger_class} />
          <div className={burger_class} />
          <div className={burger_class} />
        </div>
      </section>

      <div className={menu_class} />

      <div className={generation_class}>
        <Link className="genone" to="/Pokemons/1">
          Gen 1 <p>sortie:1996</p>
        </Link>
        <Link className="gentwo" to="/Pokemons/2">
          Gen 2 <p>sortie:1999</p>
        </Link>
        <Link className="genthree" to="/Pokemons/3">
          Gen 3 <p>sortie:2002</p>
        </Link>
        <Link className="genfour" to="/Pokemons/4">
          Gen 4 <p>sortie:2006</p>
        </Link>
        <Link className="genfive" to="/Pokemons/5">
          Gen 5 <p>sortie:2011</p>
        </Link>
        <Link className="gensix" to="/Pokemons/6">
          Gen 6 <p>sorie:2013</p>
        </Link>
        <Link className="genseven" to="/Pokemons/7">
          Gen 7 <p>sortie:2016</p>
        </Link>
        <Link className="geneight" to="/Pokemons/8">
          Gen 8 <p>sortie2019</p>
        </Link>
        <Link className="gennine" to="/Pokemons/9">
          Gen 9 <p>sortie:2022</p>
        </Link>
      </div>
    </aside>
  );
};
export default BurgerMenu;
