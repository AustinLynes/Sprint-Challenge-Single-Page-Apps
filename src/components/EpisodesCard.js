import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
export default function EpisodeCard(props) {
  const EP_CARD = styled.div`
  border:1px solid lightgray;
    box-shadow: 2px 3px 6px rgba(0, 0, 0, 0.2);
    width:90%;
    margin:1rem auto;
    text-align:center;
    p{
      font-size:1.6rem;
    
    }
    .title{
      padding:10px;
      background:grey;
      color:white;
      
    }
    .bold{
      font-weight:bold;
    }
    .characters{
      padding:10px;
      background:lightgray;
      width:fit-content;
    }
  `;
  return (
    <EP_CARD>
      <p className='title'>{props.name}</p>
      <p>Air Date: {props.air_date}</p>
      <p className='bold'>EP: {props.episode}</p>
      <p className='characters'>featured characters: {props.characters}</p>
    </EP_CARD>
  );
}
