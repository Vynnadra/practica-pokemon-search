import { useState } from "react";
import "./Search.css";

interface SearchProps {
  /**
   * Funcion que maneja el cambio de nombre en el input, para
   * realizar la busqueda de nuevas correspondencias.
   * @param pokemonName
   *
   * Returna nada, osea, cambia el nombre al cual se
   * le realizará la busqueda en el main
   * @returns
   */
  onPokemonChange: (pokemonName: string) => void;
}

function Search({ onPokemonChange }: SearchProps) {
  const [inputValue, setInputValue] = useState<string>("");
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    onPokemonChange(e.target.value.toLowerCase());
  };
  return (
    <>
      <div className="input-group flex-nowrap">
        <input
          type="text"
          className="form-control"
          placeholder="Nombre del Pokemon"
          aria-label="addon-wrapping"
          value={inputValue}
          onChange={handleInputChange}
        />
      </div>
    </>
  );
}

export default Search;
