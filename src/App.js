import React,{ useState} from "react";
import TabNav from "./components/TabNav.js";
import Header from "./components/Header.js";
import AppRouter from "./components/AppRouter.js";
import SearchForm from "./components/SearchForm.js";

const App = () => {
  return (
    <main>
      <Header />
      <SearchForm/>
      <TabNav />
      <AppRouter />
    </main>
  );
};

export default App;
