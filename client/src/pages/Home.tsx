import "../App.css";

function Home() {
  return (
    <>
      <section className="paragraphe">
        <p>
          Bienvenue dans l'univers complet de Pokémon ! Notre site vous propose
          une expérience immersive à travers les 9 générations de ces créatures
          fascinantes.
        </p>
        <p>
          Explorez notre collection complète de cartes Pokémon, découvrez les
          caractéristiques uniques de chaque région, et plongez dans les
          statistiques détaillées de vos Pokémon préférés.
        </p>
        <p>
          De Kanto à Paldea, embarquez pour un voyage extraordinaire à travers
          tous les aspects qui font la richesse de cet univers légendaire.
        </p>
      </section>
      <section className="map-pokemon">
        <figure>
          <img src="./src/assets/images/regionsMap/KantoG1.1.png" alt="" />
          <figcaption>
            <h3 className="title-map">Kanto - G1 - 1996</h3>
          </figcaption>
        </figure>

        <figure>
          <img src="./src/assets/images/regionsMap/JhotoG2.jpg" alt="" />
          <figcaption>
            <h3 className="title-map"> Johto - G2 - 1999</h3>
          </figcaption>
        </figure>
        <figure>
          <img src="./src/assets/images/regionsMap/HoennG3.png" alt="" />
          <figcaption>
            <h3 className="title-map">Hoenn - Gen 3 - 2002</h3>
          </figcaption>
        </figure>
        <figure>
          <img src="./src/assets/images/regionsMap/SinnohG4.1.png" alt="" />
          <figcaption>
            <h3 className="title-map">Sinnoh - Gen 4 - 2006</h3>
          </figcaption>
        </figure>
        <figure>
          <img src="./src/assets/images/regionsMap/UnysG5.png" alt="" />
          <figcaption>
            <h3 className="title-map"> Unys - Gen 5 - 2011</h3>
          </figcaption>
        </figure>
        <figure>
          <img src="./src/assets/images/regionsMap/KalosG6.png" alt="" />
          <figcaption>
            <h3 className="title-map">Kalos - Gen 6 - 2013</h3>
          </figcaption>
        </figure>
        <figure>
          <img src="./src/assets/images/regionsMap/AlolaG7.png" alt="" />
          <figcaption>
            <h3 className="title-map">Alola - Gen 7 - 2016</h3>
          </figcaption>
        </figure>
        <figure>
          <img src="./src/assets/images/regionsMap/GalarG8.png" alt="" />
          <figcaption>
            <h3 className="title-map">Galar - Gen - 8 - 2019</h3>
          </figcaption>
        </figure>
        <figure>
          <img src="./src/assets/images/regionsMap/PaldeaG9.png" alt="" />
          <figcaption>
            <h3 className="title-map">Paldea - Gen 9 - 2022</h3>
          </figcaption>
        </figure>
      </section>
    </>
  );
}

export default Home;
