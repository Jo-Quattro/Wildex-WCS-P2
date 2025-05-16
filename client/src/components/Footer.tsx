import "../App.css";
import "./Footer.css";
import { useState } from "react";
import SocialLinks from "./SocialLinks";

function Footer() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubscribe = () => {
    if (!email.trim()) {
      setError("Please enter you e-mail adress");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError("Please enter a valid adress.");
      return;
    }

    setError("");
    setIsSubmitting(true);
    setTimeout(() => {
      setSuccessMessage(`Thanks for the subscription, ${email} !`);
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
      <footer className="bg-red-500 flex flex-row h-25 justify-around items-center">
        <section className="w-35 text-white">
          <p>Wildéx 2025</p>
        </section>
        <section className="justify-self-end w-35">
          <SocialLinks />
        </section>
        <section className="flex flex-col gap-2 w-35 text-white">
          <input
            aria-label="subscribe"
            type="email"
            placeholder="Email "
            className="text-center border-b-1 border-l-1 border-white"
            name="subscribe"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <button
            type="button"
            className="bg-white text-red-500 rounded"
            onClick={handleSubscribe}
            disabled={!isEmailValid || isSubmitting}
          >
            {isSubmitting ? "Pending..." : "Subscribe"}
          </button>
        </section>
      </footer>
      {error && <p className="error-message">{error}</p>}
    </>
  );
}

export default Footer;
