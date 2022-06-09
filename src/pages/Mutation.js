import React from "react";
import { gql, useMutation } from "@apollo/client";

const CREATE_PRODUCT = gql`
  mutation createProductMut($name: String!, $quantity: Int!) {
    createProduct(record: { name: $name, quantity: $qty }) {
      record {
        name
      }
    }
  }
`;

function Mutation() {
  const [createProduct, { data, loading, error }] = useMutation(
    CREATE_PRODUCT,
    {
      variables: {
        name: "TWS",
        quantity: 10,
      },
    }
  );
  return (
    <div>
      <button onClick={() => createProduct()}>Add</button>
    </div>
  );
}

export default Mutation;
