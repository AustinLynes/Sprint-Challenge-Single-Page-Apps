import React from "react";

export default function LocationCard(props) {
  console.log(props.residents)
  return (
    <div>
      <p>{props.name}</p>
      <p>{props.type}</p>
      <ul>
        Residents:
      {props.residents.length}
      </ul>
    </div>
  );
}
