import { useState } from "react";
import PropTypes from 'prop-types';

const Header = ({ onSearch }) => {
  const [search, setSearch] = useState("");

  const handleSearchChange = (e) => {
    const newSearchValue = e.target.value;
    console.log("Search value:", newSearchValue); // Add this line
    setSearch(newSearchValue);
    onSearch(newSearchValue);
  };

  return (
    <header className="header">
      <h1>Pokedex</h1>
      <input
        type="text"
        placeholder="Search Pokemon"
        value={search}
        onChange={handleSearchChange}
      />
    </header>
  );
};

Header.propTypes = {
  onSearch: PropTypes.func.isRequired,
};

export default Header;