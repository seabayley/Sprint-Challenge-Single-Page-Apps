import React from "react";
import CharacterCard from './CharacterCard';

export default function CharacterList(props) {

  return (
    <section className="character-list">
      {props.characters.map(character => {
        return <CharacterCard key={character.id} character={character} />
      })}
    </section>
  );
}
