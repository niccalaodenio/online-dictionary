import { nanoid } from "nanoid";
import React from "react";
import { Res } from "../styles/Main.styled";
import {FiVolume2} from 'react-icons/fi'
 
const Result = (props) => { 
  let aud = new Audio(props.mean.audio);
  function Play (e) {
    e.preventDefault()
    e.stopPropagation()
    props.mean.audio === undefined
      ? alert("Ops! sorry, this word does not contain audio pronunciation")
      : aud.play();
  }

  return (
    <Res>
      <div className="word__pos">
        <h1>{props.mean.word}</h1>
        <p className="pos">{props.partOfSpeech}</p>
      </div>
      <p className="netics">{props?.mean?.netic} <span onClick={(e) => Play(e)}>< FiVolume2 size={17} color="#219EBC"/> </span></p>
      {/* <p>Synonyms: {props.synonyms.map((s,i) => {
          return <em key={i} className='me-1'>{s}</em>
        })}</p> */}
      <p className="syno">
        Synonyms: <em>{props.synonyms.join(",  ")}</em>
      </p>
      <ol>
        <hr key={nanoid()} className="line" />
        {props.definitions.map((i, k) => {
          return (
            <li key={k}>
              {i.definition}
              {i.example && <p key={nanoid()}>Example: {i.example}</p>}
            </li>
          );
        })}
      </ol>
    </Res>
  );
};

export default Result;
