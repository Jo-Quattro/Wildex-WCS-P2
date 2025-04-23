function Header() {
  return (
    <header>
      <section className="burger-logo-search">
        <section className="section-menu-burger">
          <img
            className="menu-burger"
            src="./src/assets/images/MenuBurgerRed.svg"
            alt="Menu burger"
          />
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
