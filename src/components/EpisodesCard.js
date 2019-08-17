import React from "react";
import {NavLink} from 'react-router-dom';

export default function EpisodeCard(props) {
  return <div>
    <p>{props.name}</p>
    <p>{props.air_date}</p>
    <p>{props.episode}</p>
    <p>{props.characters}</p>
    <NavLink to={props.url}>see more?</NavLink>
  </div>
  ;
}