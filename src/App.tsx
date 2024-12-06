import Search from "./components/Search";
import Card from "./components/Card";
import { useState } from "react";
import "./App.css";

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
        const limitedPokemons = filteredPokemons.slice(0, 9);
        setPokemons(limitedPokemons);
      })
      .catch((err) => console.error("Error fetching Pokemon data:", err));
  };
  return (
    <div className="app-container">
      <Search onPokemonChange={handlePokemonChange} />

      <div className="row row-cols-3 g-4">
        {pokemons.map((pokemon, index) => (
          <div className="col d-flex justify-content-center">
            <Card key={index} pokemon={pokemon.name} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
