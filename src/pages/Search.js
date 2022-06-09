import React, { useState } from "react";
import { useLazyQuery, gql } from "@apollo/client";

const GET_CHARACTER_LOCATIONS = gql`
  query GetCharacterLocations($name: String!) {
    characters(filter: { name: $name }) {
      results {
        location {
          name
        }
      }
    }
  }
`;

function Search() {
  const [name, setName] = useState("");

  const [getLocations, { loading, error, data, called }] = useLazyQuery(
    GET_CHARACTER_LOCATIONS,
    {
      variables: {
        name,
      },
    }
  );

  console.log({ loading, error, data, called });

  return (
    <div>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <button type="submit" onClick={() => getLocations()}>
        Search
      </button>
      {data && (
        <ul>
          {data.characters.results.map((eachLocation) => {
            return <li>{eachLocation.location.name}</li>;
          })}
        </ul>
      )}
    </div>
  );
}

export default Search;
