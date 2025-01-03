import React from "react";
import "./phonetic.css";

export default function phonetic(props) {
  return (
    <div className="phonetic">
      <a href={props.phonetic.audio} target="_blank" rel="noreferrer">
        Listen
      </a>
      <span className="text">{props.phonetic.text}</span>
    </div>
  );
}