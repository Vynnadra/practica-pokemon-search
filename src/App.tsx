import Search from "./components/Search";
import Card from "./components/Card";
import { useState } from "react";

function App() {
  const [pokemons, setPokemons] = useState<any[]>([]);

  const handlePokemonChange = (newName: string) => {
    setPokemons([]);

    fetch("https://pokeapi.co/api/v2/pokemon?limit=2000&offset=0")
      .then((response) => response.json())
      .then((data) => {
        const filteredPokemons = data.results.filter(
          (pokemon: { name: string }) =>
            pokemon.name.toLowerCase().includes(newName.toLowerCase())
        );
        const limitedPokemons = filteredPokemons.slice(0, 10);
        setPokemons(limitedPokemons);
      })
      .catch((err) => console.error("Error fetching Pokemon data:", err));
  };
  return (
    <>
      <Search onPokemonChange={handlePokemonChange} />
      <div>
        {pokemons.map((pokemon, index) => (
          <Card key={index} pokemon={pokemon.name} />
        ))}
      </div>
    </>
  );
}

export default App;
