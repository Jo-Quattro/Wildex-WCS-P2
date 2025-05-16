import { useState } from "react";
import { Link } from "react-router";
import pokeball from "../assets/images/pokeball.png";
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
        <Link to="/Pokemons/1">
          <img src={pokeball} alt="icon pokeball" className="pokeBallIcon" />{" "}
          <span className="genNumber">Gen 1</span> <br />
          <p className="genDate">1996</p>
        </Link>
        <Link to="/Pokemons/2">
          <img src={pokeball} alt="icon pokeball" className="pokeBallIcon" />{" "}
          <span className="genNumber">Gen 2</span> <br />
          <p className="genDate">1999</p>
        </Link>
        <Link to="/Pokemons/3">
          <img src={pokeball} alt="icon pokeball" className="pokeBallIcon" />{" "}
          <span className="genNumber">Gen 3</span> <br />
          <p className="genDate">2002</p>
        </Link>
        <Link to="/Pokemons/4">
          <img src={pokeball} alt="icon pokeball" className="pokeBallIcon" />{" "}
          <span className="genNumber">Gen 4</span> <br />
          <p className="genDate">2006</p>
        </Link>
        <Link to="/Pokemons/5">
          <img src={pokeball} alt="icon pokeball" className="pokeBallIcon" />{" "}
          <span className="genNumber">Gen 5</span> <br />
          <p className="genDate">2011</p>
        </Link>
        <Link to="/Pokemons/6">
          <img src={pokeball} alt="icon pokeball" className="pokeBallIcon" />{" "}
          <span className="genNumber">Gen 6</span> <br />
          <p className="genDate">2013</p>
        </Link>
        <Link to="/Pokemons/7">
          <img src={pokeball} alt="icon pokeball" className="pokeBallIcon" />{" "}
          <span className="genNumber">Gen 7</span> <br />
          <p className="genDate">2016</p>
        </Link>
        <Link to="/Pokemons/8">
          <img src={pokeball} alt="icon pokeball" className="pokeBallIcon" />{" "}
          <span className="genNumber">Gen 8</span> <br />
          <p className="genDate">2019</p>
        </Link>
        <Link to="/Pokemons/9">
          <img src={pokeball} alt="icon pokeball" className="pokeBallIcon" />{" "}
          <span className="genNumber">Gen 9</span> <br />
          <p className="genDate">2022</p>
        </Link>
      </div>
    </aside>
  );
};
export default BurgerMenu;
