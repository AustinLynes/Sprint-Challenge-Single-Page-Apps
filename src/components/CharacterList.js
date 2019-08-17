import React, { useEffect, useState } from "react";
import axios from 'axios';
import CharacterCard from "./CharacterCard";
import SearchForm from './SearchForm'
export default function CharacterList() {
  const [charactersData, setCharactersData] = useState([]);
  
  useEffect(() => {
    axios
    .get('https://rickandmortyapi.com/api/character/')
    .then(res => setCharactersData(res.data.results))
    .catch(err =>console.log(err))
  }, [charactersData]);

  return (
    <section className="character-list grid-view">
     
        {charactersData.map(character =>{
          return <CharacterCard 
          key={character.id}
          image={character.image}
          gender={character.gender}
          location={character.location}
          name={character.name}
          homeWorld={character.origin.name}
          hwurl={character.origin.url}
          speciec={character.species}
          status={character.status}
          />
        })}
    </section>
  );
}

/* 
  gender: "Male"
id: 1
image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg"
location: {name: "Earth (Replacement Dimension)", url: "https://rickandmortyapi.com/api/location/20"}
name: "Rick Sanchez"
origin: {name: "Earth (C-137)", url: "https://rickandmortyapi.com/api/location/1"}
species: "Human"
status: "Alive"
*/
