import React, { useState } from "react";
import { withRouter } from 'react-router-dom'

export default function SearchForm(props) {

  const Button = withRouter(({ history }) => (
    <button type='button' onClick={() => { history.push('/characters') }}>Search </button>
  ));

  const handleInput = event => {
    props.setSearchParams(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
  }

  return (
    <section className="search-form">
      <form onSubmit={handleSubmit}>
        <label>
          Search:
         <input type="text" onChange={handleInput}></input>
        </label>
        <Button />
      </form>
    </section>
  );
}
