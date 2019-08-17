import React, { useEffect, useState } from "react";
import axios from 'axios';
import EpisodeCard from "./EpisodesCard";
import SearchForm from "./SearchForm";

export default function EpisodeList() {
  const [episdeData, setEpisodeData] = useState([]);
  
  useEffect(() => {
    axios
    .get('https://rickandmortyapi.com/api/episode/')
    .then(res => setEpisodeData(res.data.results))
    .catch(err =>console.log(err))
  }, [episdeData]);

  return (
    <section className="character-list grid-view">
     
        {episdeData.map(ep =>{
          return <EpisodeCard
            key={ep.id}
            air_date={ep.air_date}
            characters={ep.characters.length}
            episode={ep.episode}
            name={ep.name}
            url={ep.url}
          />
        })}
    </section>
  );
}
