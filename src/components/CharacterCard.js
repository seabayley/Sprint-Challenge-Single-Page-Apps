import React from "react";
import { Card, CardImg, CardBody, CardTitle, CardSubtitle } from 'reactstrap'

export default function CharacterCard(props) {
  return (
    <Card>
      <CardImg top width="20%" src={props.character.image} alt={`a portrait of ${props.character.name}`} />
      <CardBody>
        <CardTitle><h2>{props.character.name}</h2></CardTitle>
        <CardSubtitle>Species: {props.character.species}</CardSubtitle>
        <CardSubtitle>Status: {props.character.status}</CardSubtitle>
      </CardBody>
    </Card>
  )
}
