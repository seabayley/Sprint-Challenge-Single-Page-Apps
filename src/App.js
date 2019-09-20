import React, { useState, useEffect } from "react";
import axios from 'axios';
import { Route } from 'react-router-dom';

import Header from "./components/Header.js";
import CharacterList from './components/CharacterList';
import SearchForm from './components/SearchForm';



export default function App() {
  const [apiData, setApiData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchParams, setSearchParams] = useState('');
  function useAxios() {

    useEffect(() => {
      axios.get(`https://rickandmortyapi.com/api/character/`)
        .then(function (response) {
          setApiData(apiData => apiData = response.data);
          setLoading(false);
        })
        .catch(function (error) {
          console.log(error);
        })
    }, [])
  }

  useAxios()

  if (loading) return <p>Loading...</p>

  return (
    <main>
      <Header />
      <Route
        path="/characters"
        render={(props) => <CharacterList {...props} characters={apiData.results} searchParams={searchParams} />}
      />
      <Route
        exact path="/"
        render={(props) => <SearchForm {...props} setSearchParams={setSearchParams} />}
      />
    </main>
  );
}
