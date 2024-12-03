import { useState, useEffect } from "react";
import axios from "axios";
import PropTypes from "prop-types";

const PokemonCard = ({ name, url, onSelect }) => {
  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    const fetchPokemonData = async () => {
      try {
        const response = await axios.get(url);
        setPokemon(response.data);
      } catch (error) {
        console.error("Error fetching Pokemon data:", error);
      }
    };
    fetchPokemonData();
  }, [url]);

  if (!pokemon) return null;

  return (
    <div className="pokemon-card" onClick={onSelect}>
      <img src={pokemon.sprites.front_default} alt={name} />
      <h3>{name}</h3>
      <p>Type: {pokemon.types.map((type) => type.type.name).join(", ")}</p>
    </div>
  );
};

PokemonCard.propTypes = {
  name: PropTypes.string.isRequired,       // Name of the Pokémon
  url: PropTypes.string.isRequired,        // API URL to fetch Pokémon details
  onSelect: PropTypes.func.isRequired,     // Callback function when the card is clicked
};

export default PokemonCard;
