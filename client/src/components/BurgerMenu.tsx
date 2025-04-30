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
        <Link to="/Pokemons/1">gen1</Link>
        <Link to="/Pokemons/2">gen2</Link>
        <Link to="/Pokemons/3">gen3</Link>
        <Link to="/Pokemons/4">gen4</Link>
        <Link to="/Pokemons/5">gen5</Link>
        <Link to="/Pokemons/6">gen6</Link>
        <Link to="/Pokemons/7">gen7</Link>
        <Link to="/Pokemons/8">gen8</Link>
        <Link to="/Pokemons/9">gen9</Link>
      </div>
    </aside>
  );
};
export default BurgerMenu;
