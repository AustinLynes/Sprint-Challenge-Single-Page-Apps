import React from "react";
import { Route } from "react-router-dom";
import HomePage from "./WelcomePage";
import CharacterList from "./CharacterList";
import LocationsList from "./LocationsList";
import EpisodeList from "./EpisodesList";

export default function AppRouter() {
  return (
    <>
      <Route exact path="/" component={HomePage} />
      <Route path="/character-list/" component={CharacterList} />
      <Route path="/location-list/" component={LocationsList} />
      <Route path="/episode-list/" component={EpisodeList} />
    </>
  );
}
