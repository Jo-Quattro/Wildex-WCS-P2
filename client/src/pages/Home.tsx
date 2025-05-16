import "../App.css";
import { Link } from "react-router";
import AlolaG7 from "../assets/images/regionsMap/AlolaG7.png";
import GalarG8 from "../assets/images/regionsMap/GalarG8.png";
import HoennG3 from "../assets/images/regionsMap/HoennG3.png";
import JhotoG2 from "../assets/images/regionsMap/JhotoG2.jpg";
import KalosG6 from "../assets/images/regionsMap/KalosG6.png";
import KantoG1 from "../assets/images/regionsMap/KantoG1.png";
import PaldeaG9 from "../assets/images/regionsMap/PaldeaG9.png";
import SinnohG4 from "../assets/images/regionsMap/SinnohG4.png";
import UnysG5 from "../assets/images/regionsMap/UnysG5.png";

function Home() {
  return (
    <>
      <section className="paragraphe">
        <h1>Welcome to the fabulous world of Pokémon !</h1>
        <p>
          Our website offers you an immersive experience through the 9
          generations of these fascinating creatures (and a 10th rumored to come
          !).
        </p>
        <p>
          Explore our complete collection of Pokémon, discover the unique
          features of each region, and dive into the detailed stats of your
          favorite Pokémon.
        </p>
        <p>
          From Kanto to Paldea, embark on an extraordinary journey through all
          the elements that make this legendary universe so rich.
        </p>
      </section>
      <section className="map-pokemon">
        {" "}
        <figure>
          <Link to={"/Pokemons/1"}>
            <img className="regionImg" src={KantoG1} alt="Region Kanto" />
          </Link>
          <figcaption>
            <h2 className="title-map">Kanto - G1 - 1996</h2>
          </figcaption>
        </figure>
        <figure>
          <Link to={"/Pokemons/2"}>
            <img className="regionImg" src={JhotoG2} alt="Region Johto" />
          </Link>
          <figcaption>
            <h2 className="title-map"> Johto - G2 - 1999</h2>
          </figcaption>
        </figure>
        <figure>
          <Link to={"/Pokemons/3"}>
            <img className="regionImg" src={HoennG3} alt="Region Hoenn" />
          </Link>
          <figcaption>
            <h2 className="title-map">Hoenn - Gen 3 - 2002</h2>
          </figcaption>
        </figure>
        <figure>
          <Link to={"/Pokemons/4"}>
            <img className="regionImg" src={SinnohG4} alt="Region Sinnoh" />
          </Link>
          <figcaption>
            <h2 className="title-map">Sinnoh - Gen 4 - 2006</h2>
          </figcaption>
        </figure>
        <figure>
          <Link to={"/Pokemons/5"}>
            <img className="regionImg" src={UnysG5} alt="Region Unys" />
          </Link>
          <figcaption>
            <h2 className="title-map"> Unys - Gen 5 - 2011</h2>
          </figcaption>
        </figure>
        <figure>
          <Link to={"/Pokemons/6"}>
            <img className="regionImg" src={KalosG6} alt="Region Kalos" />
          </Link>
          <figcaption>
            <h2 className="title-map">Kalos - Gen 6 - 2013</h2>
          </figcaption>
        </figure>
        <figure>
          <Link to={"/Pokemons/7"}>
            <img className="regionImg" src={AlolaG7} alt="Region Alola" />
          </Link>
          <figcaption>
            <h2 className="title-map">Alola - Gen 7 - 2016</h2>
          </figcaption>
        </figure>
        <figure>
          <Link to={"/Pokemons/8"}>
            <img className="regionImg" src={GalarG8} alt="Region Galar" />
          </Link>
          <figcaption>
            <h2 className="title-map">Galar - Gen - 8 - 2019</h2>
          </figcaption>
        </figure>
        <figure>
          <Link to={"/Pokemons/9"}>
            <img className="regionImg" src={PaldeaG9} alt="Region Paldea" />
          </Link>
          <figcaption>
            <h2 className="title-map">Paldea - Gen 9 - 2022</h2>
          </figcaption>
        </figure>
      </section>
    </>
  );
}

export default Home;
