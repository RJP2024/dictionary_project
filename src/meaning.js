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
           <p>
            <strong>Definition:</strong> {definition.definition}
            <br />
            <strong>Example:</strong>
            <em>{definition.example}</em>
            <synonyms synonyms={definition.synonyms} />
          </p>
          </div>
        );
      })}
    </div>
  );
}