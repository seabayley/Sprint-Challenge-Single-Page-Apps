import React from "react";
import CharacterCard from './CharacterCard';

export default function CharacterList(props) {
  console.log(props.searchParams);
  return (
    <section className="character-list">
      {props.characters.map(character => {
        if (props.searchParams === '') {
          return <CharacterCard key={character.id} character={character} />
        }
        else if (character.name.includes(props.searchParams)) {
          return <CharacterCard key={character.id} character={character} />
        }
      })}
    </section>
  );
}
