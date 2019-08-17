import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
export default function EpisodeCard(props) {
  const EP_CARD = styled.div`
    box-shadow: 2px 3px 6px rgba(0, 0, 0, 0.2);
  `;
  return (
    <EP_CARD>
      <p>{props.name}</p>
      <p>{props.air_date}</p>
      <p>{props.episode}</p>
      <p>{props.characters}</p>
    </EP_CARD>
  );
}
