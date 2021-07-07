import React from "react";
import styled from 'styled-components';
export default function LocationCard(props) {
  const L_Card = styled.div`
  box-shadow: 2px 3px 6px rgba(0, 0, 0, 0.2);
  width:90%;
  margin:1rem auto;
  text-align:center;
  p{
    font-size:1.6rem;
  
  }
  .bold{
    font-weight:bold;
  }
  .name{
    padding:10px;
    background: gray;
    color:white;
    box-shadow:0px 3px 4px rgba(0,0,0,0.5)
  }
  .characters{
    padding:10px;
    background:lightgray;
    width:fit-content;
  }
`;
  return (
    <L_Card>
      <p className='name'>{props.name}</p>
      <p>{props.type}</p>
      <p className='characters'>
        Residents:
      {props.residents.length}
      </p>
    </L_Card>
  );
}
