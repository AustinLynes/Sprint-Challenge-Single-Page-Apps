import React from "react";
import {NavLink} from 'react-router-dom';

export default function CharacterCard(props) {
  return <div>
    <img src={props.image}/>
    <h3>Name: {props.name}</h3>
    <p>gender: {props.gender}</p>
    <div>
        <p>Home World: {props.homeWorld} </p>
        <NavLink to={props.hwurl}>{props.hwurl}</NavLink>
      </div> 
      <h3>Species: {props.species}</h3>
      <h4>Status: {props.status}</h4>
  </div>
  ;
}
