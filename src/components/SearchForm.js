import React, { useState } from "react";
import styled from 'styled-components';
export default function SearchForm({ onSearch }) {
  // TODO: Add stateful logic for query/form data
  const [query, setQuery]= useState('')
  function handleInputChange(event){
    setQuery(event.target.value);
  }
  return (
    <section >
      <form onSubmit={() => onSearch(query)}>
        <input
          onChange={event => handleInputChange(event)}
          placeholder="name"
          value={query}
          name="text"
        />
        <button type="submit">Search</button>
      </form>
    </section>
  );
}

