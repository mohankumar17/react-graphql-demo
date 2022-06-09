import React from "react";
import { useOneCharacter } from "../hooks/useOneCharacter";
import "./Character.css";
import { useParams } from "react-router-dom";

function Character() {
  const { id } = useParams();

  const { error, loading, data } = useOneCharacter(id);
  console.log({ error, loading, data });
  if (error) {
    return <div>Error</div>;
  }
  if (loading) {
    return <div>Loading data</div>;
  }
  return (
    <div className="character">
      <img className="char-img" src={data.character.image} alt="img" />
      <div className="character-content">
        <h1>{data.character.name}</h1>
        <p>{data.character.gender}</p>
        <div className="character-episode" key={data.character.episode.id}>
          {data.character.episode.map((eachEpisode) => {
            return (
              <>
                <h4>{eachEpisode.name}</h4>
                <p>{eachEpisode.episode}</p>
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Character;
