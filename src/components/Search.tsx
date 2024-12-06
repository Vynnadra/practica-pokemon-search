import { useState } from "react";

interface SearchProps {
  onPokemonChange: (pokemonName: string) => void;
}

function Search({ onPokemonChange }: SearchProps) {
  const [inputValue, setInputValue] = useState<string>("");
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    onPokemonChange(e.target.value.toLowerCase());
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
    </div>
  );
}

export default Search;
