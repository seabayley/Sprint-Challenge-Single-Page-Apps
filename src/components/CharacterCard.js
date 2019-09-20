import React from "react";
import { Card } from 'reactstrap'

export default function CharacterCard(props) {
  return (
    <div className="character_card">
      <img src={props.character.image} alt={`a portrait of ${props.character.name}`} />
      <p>Name: {props.character.name}</p>
      <p>Species: {props.character.species}</p>
      <p>Status: {props.character.status}</p>
    </div>
  )
}
