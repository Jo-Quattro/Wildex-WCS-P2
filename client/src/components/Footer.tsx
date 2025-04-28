import "../App.css";
import "./Footer.css";
import { useState } from "react";

function Footer() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubscribe = () => {
    if (!email.trim()) {
      setError("Veuillez entrer une adresse email");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError("Veuillez entrer une adresse email valide.");
      return;
    }

    setError("");
    setIsSubmitting(true);
    setTimeout(() => {
      setSuccessMessage(`Merci pour votre inscription, ${email} !`);
      setEmail(""); // Remet l'input à vide après
      setIsSubmitting(false); // Réinitialisation de l'état d'envoi

      // Réinitialiser le message de succès après 3 secondes
      setTimeout(() => {
        setSuccessMessage(""); // Réinitialiser le message de succès
      }, 4000); // Le message disparaît après 3 secondes
    }, 1000); // Simulation de délai de traitement
  };

  const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  return (
    <>
      {successMessage && (
        <p className="success-message">
          <span role="img" aria-label="success">
            🎉
          </span>{" "}
          {successMessage}
        </p>
      )}
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
            type="email"
            placeholder="Souscrire à la newsletter "
            className="input-subscribe"
            name="subscribe"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button
            type="button"
            className="btn-subscribe"
            onClick={handleSubscribe}
            disabled={!isEmailValid || isSubmitting}
          >
            {isSubmitting ? "Envoi..." : "S'inscrire"}
          </button>
        </section>
      </footer>
      {error && <p className="error-message">{error}</p>}
    </>
  );
}

export default Footer;
