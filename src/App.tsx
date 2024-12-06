import Search from "./components/Search";
import Card from "./components/Card";
import { useState } from "react";

function App() {
  const [pokemonName, setPokemonName] = useState<string>("");

  const handlePokemonChange = (newName: string) => {
    setPokemonName(newName.toLowerCase());
  };
  return (
    <>
      <Search onPokemonChange={handlePokemonChange} />
      <Card pokemon={pokemonName} />
    </>
  );
}

export default App;
