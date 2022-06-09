import React from "react";
import "./CharactersList.css";
import { useCharacters } from "../hooks/useCharacters";
import { useNavigate } from "react-router-dom";

function CharactersList() {
  const navigate = useNavigate();

  const { error, loading, data } = useCharacters();

  console.log({ error, loading, data });
  if (error) {
    return <div>Error loading the data</div>;
  }
  if (loading) {
    return <div>Loading data. Please wait
    </div>;
  }

  return (
    <div className="list">
      {data.characters.results.map((eachCharacter) => {
        return (
          <div key={eachCharacter.id}>
            <img src={eachCharacter.image} alt="img" />
            <h2
              className="char-name"
              onClick={() => navigate("/" + eachCharacter.id)}
            >
              {eachCharacter.name}
            </h2>
          </div>
        );
      })}
    </div>
  );
}

export default CharactersList;
