import { useEffect, useState } from "react";
import axios from "axios";
import PropTypes from 'prop-types';

const PokemonDetailModal = ({ pokemon, onClose }) => {
  const [pokemonData, setPokemonData] = useState(null);

  useEffect(() => {
    const fetchPokemonData = async () => {
      const response = await axios.get(pokemon.url);
      setPokemonData(response.data);
    };
    fetchPokemonData();
  }, [pokemon]);

  if (!pokemonData) return null;

  return (
    <div className="modal">
      <h2>{pokemonData.name}</h2>
      <img src={pokemonData.sprites.front_default} alt={pokemonData.name} />
      <p>Type: {pokemonData.types.map((type) => type.type.name).join(", ")}</p>
      <p>Height: {pokemonData.height}</p>
      <p>Weight: {pokemonData.weight}</p>
      <p>Abilities: {pokemonData.abilities.map((ability) => ability.ability.name).join(", ")}</p>
      <button onClick={onClose}>Close</button>
    </div>
  );
};

PokemonDetailModal.propTypes = {
  pokemon: PropTypes.shape({
    url: PropTypes.string.isRequired,
  }).isRequired,
  onClose: PropTypes.func.isRequired,
};

export default PokemonDetailModal;