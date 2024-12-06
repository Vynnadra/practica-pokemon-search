import { useEffect, useState } from "react";
import "./Card.css";
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
      <img
        src={pokemon.sprites.front_default}
        className="card-img-top"
        alt={pokemon.name}
        style={{ height: "300px", objectFit: "cover" }}
      />
      <div className="card-body d-flex flex-column justify-content-between">
        <h5 className="card-title text-center">
          {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}
        </h5>
        <ul className="list-unstyled d-flex flex-wrap justify-content-center gap-2">
          {pokemon.types.map((type: any, index: number) => (
            <li key={index} className="text-muted">
              <img
                src={"/type/" + type.type.name + ".png"}
                alt={type.type.name}
              />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Card;
