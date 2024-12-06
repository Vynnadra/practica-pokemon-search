import { useState } from "react";

interface SearchProps {
  onPokemonChange: (pokemonName: string) => void;
}

function Search({ onPokemonChange }: SearchProps) {
  const [inputValue, setInputValue] = useState<string>("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };
  const handleSearchClick = () => {
    onPokemonChange(inputValue.toLowerCase());
  };
  return (
    <div className="input-group">
      <input
        type="text"
        className="form-control"
        placeholder="Nombre del Pokemon"
        aria-label="Buscador de Pokemon"
        value={inputValue}
        onChange={handleInputChange}
      />
      <button
        className="btn btn-outline-secondary"
        type="button"
        onClick={handleSearchClick}
      >
        Buscar
      </button>
    </div>
  );
}

export default Search;
