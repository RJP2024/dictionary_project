import React from "react";
import "./meaning.css";
import synonyms from "./synonyms";

export default function meaning(props) {
  return (
    <div className="Meaning">
      <h3>{props.meaning.partOfSpeech}</h3>
      {props.meaning.definitions.map(function (definition, index) {
        return (
          <div key={index}>
            <div className="definition">{definition.definition}</div>

            <div className="example">{definition.example}</div>
            <synonyms synonyms={definition.synonyms} />
          </div>
        );
      })}
    </div>
  );
}