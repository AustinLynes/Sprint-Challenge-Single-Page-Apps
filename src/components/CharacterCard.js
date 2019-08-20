import React from "react";
import {NavLink} from 'react-router-dom';
import styled from 'styled-components';

export default function CharacterCard(props) {
  const _Card = styled.div`
  border:1px solid lightgray;
    box-shadow:2px 4px 6px rgba(0,0,0,.4);
    margin:10px auto;
    padding:1rem 0;
    .img{
      background:grey;
      padding:10px;
    }
  `;
  return <_Card>
    <img className='img' src={props.image}/>
    <h3>Name: {props.name}</h3>
    <p>gender: {props.gender}</p>
    <div>
        <p>Home World: {props.homeWorld} </p>
        <NavLink to={props.hwurl}>{props.hwurl}</NavLink>
      </div> 
      <h3>Species: {props.species}</h3>
      <h4>Status: {props.status}</h4>
  </_Card>
  ;
}
