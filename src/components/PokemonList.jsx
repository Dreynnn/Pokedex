import { useState, useEffect } from "react";
import axios from "axios";
import PokemonCard from "./PokemonCard";
import PropTypes from 'prop-types';

const PokemonList = ({ onSelectPokemon }) => {
  const [pokemonList, setPokemonList] = useState([]);

  useEffect(() => {
    const fetchPokemonList = async () => {
      const response = await axios.get("https://pokeapi.co/api/v2/pokemon?limit=3000");
      setPokemonList(response.data.results);
    };
    fetchPokemonList();
  }, []);

  return (
    <div className="pokemon-list">
      {pokemonList.map((pokemon, index) => (
        <PokemonCard
          key={index}
          name={pokemon.name}
          url={pokemon.url}
          onSelect={() => onSelectPokemon(pokemon)}
        />
      ))}
    </div>
  );
};

PokemonList.propTypes = {
  onSelectPokemon: PropTypes.func.isRequired,
};

export default PokemonList;