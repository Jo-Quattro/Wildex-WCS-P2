// src/components/BackButton.tsx
import { useNavigate } from "react-router";
import "./BackButton.css";

export default function BackButton() {
  const navigate = useNavigate();

  // On va chercher notre "savedUrl" stockée a l'arrivée dans notre page Pokemons/{id} afin de retourner vers celle-ci.
  const handleReturnToPokemons = () => {
    const urlToPokemons = localStorage.getItem("savedUrl");
    if (urlToPokemons != null) {
      navigate(urlToPokemons);
    }
  };
  const isOnPokemonPage =
    location.pathname.startsWith("/pokemons/") ||
    location.pathname.startsWith("/pokemonDetails/");

  if (!isOnPokemonPage) return null;

  return (
    <button
      type="button"
      onClick={handleReturnToPokemons}
      className="back-button"
    >
      ⬅ Retour
    </button>
  );
}
