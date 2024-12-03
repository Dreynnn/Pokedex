
import { useState } from "react";
import Header from "./components/Header";
import PokemonList from "./components/PokemonList";
import PokemonDetailModal from "./components/PokemonDetailModal";
import "./App.css";

function App() {
  const [selectedPokemon, setSelectedPokemon] = useState(null);

  const handlePokemonSelect = (pokemon) => {
    setSelectedPokemon(pokemon);
  };

  const handleCloseModal = () => {
    setSelectedPokemon(null);
  };

  return (
    <div className="App">
      <Header />
      <PokemonList onSelectPokemon={handlePokemonSelect} />
      {selectedPokemon && (
        <PokemonDetailModal pokemon={selectedPokemon} onClose={handleCloseModal} />
      )}
    </div>
  );
}

export default App;
