import { useEffect, useState } from "react";

interface CardProps {
  pokemon: string;
}

function Card(props: CardProps) {
  const { pokemon } = props;
  return (
    <div className="card">
      <CardBody pokemonName={pokemon} />
    </div>
  );
}

interface CardBodyProps {
  pokemonName: string;
}

function CardBody(props: CardBodyProps) {
  const { pokemonName } = props;
  const [pokemon, setPokemon] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);
  useEffect(() => {
    setError(null);
    if (!pokemonName) {
      return;
    }

    fetch("https://pokeapi.co/api/v2/pokemon/" + pokemonName)
      .then((response) => {
        if (!response.ok) {
          setError("Failed to fetch pokemon data.");
        }
        return response.json();
      })
      .then((res) => setPokemon(res))
      .catch((err) => setError(err.message));
  }, [pokemonName]);
  if (!pokemon && !error) {
    return <></>;
  }
  if (error) {
    return <div>Error: {error}</div>;
  }
  return (
    <>
      <img src={pokemon.sprites.front_default} className="card-img-top" />
      <div className="card-body">
        <h5 className="card-title">
          {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}
        </h5>
        <p>
          {pokemon.types.map((type: any, index: number) => (
            <li key={index}>{type.type.name}</li>
          ))}
        </p>
      </div>
    </>
  );
}

export default Card;
