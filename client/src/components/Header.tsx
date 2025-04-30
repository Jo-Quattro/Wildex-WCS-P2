import BurgerMenu from "./BurgerMenu";

function Header() {
  return (
    <header>
      <BurgerMenu />
      <section className="burger-logo-search">
        <section className="section-menu-burger">
          <img
            className="logo"
            src="./src/assets/images/WildexlogoV1.png"
            alt="Logo du site"
          />
        </section>
        <section className="search-bar">
          <label htmlFor="recherche">Pokemon</label>
          <input
            type="text"
            placeholder="Recherche son nom ici !"
            name="recherche"
          />
          <button type="button">Rechercher</button>
        </section>
      </section>
    </header>
  );
}

export default Header;
