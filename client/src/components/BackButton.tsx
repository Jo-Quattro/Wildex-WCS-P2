// src/components/BackButton.tsx
import { useLocation, useNavigate } from "react-router";
import "./BackButton.css";

export default function BackButton() {
  const location = useLocation();
  const navigate = useNavigate();

  const isOnPokemonPage =
    location.pathname.startsWith("/pokemons/") ||
    location.pathname.startsWith("/pokemonDetails/");

  if (!isOnPokemonPage) return null;

  return (
    <button
      type="button" // 👈 ici
      onClick={() => navigate(-1)}
      className="back-button"
    >
      ⬅ Retour
    </button>
  );
}
