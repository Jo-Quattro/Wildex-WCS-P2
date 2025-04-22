import "../App.css";

function Footer() {
  return (
    <footer>
      <section className="social-legal">
        <section className="legal">
          <p>©️Wildéx 2025</p>
        </section>
        <section className="social">
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="./src/assets/images/logoSocial/BlueskyLogoWhite.png"
              alt="Instagram"
              className="social-icon"
            />
          </a>
          <a
            href="https://www.threads.net/@thelazyagency/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="./src/assets/images/logoSocial/threadsLogoWhite.png"
              alt="Threads"
              className="social-icon"
            />
          </a>
          <a
            href="https://www.instagram.com/thelazyagency/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="./src/assets/images/logoSocial/InstagramLogoWhite.png"
              alt="Twitter"
              className="social-icon"
            />
          </a>
        </section>
      </section>
      <section className="subscribe">
        <input
          type="text"
          placeholder="Souscrire à la newsletter "
          className="input-subscribe"
          name="subscribe"
        />{" "}
        <button type="button" className="btn-subscribe">
          S'inscrire
        </button>
      </section>
    </footer>
  );
}

export default Footer;
