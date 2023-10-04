import axios from "axios";
import React, { useState } from "react";
import { BiSearchAlt2 } from "react-icons/bi";
import image from "./Pink Play button Png.png";

export const Dictionary = ({ font }) => {
  const [data, setData] = useState([]);
  const [item, setItem] = useState("");
  const [sound, setSound] = useState("");

  let audio = new Audio();

  function imgFn() {
    data.filter((ele) => {
      ele.phonetics.forEach((aud) => {
        if (aud.audio) {
          setSound(aud.audio);
        }
      });
      if (sound !== "") {
        audio.src = sound;
        audio.play();
      }
    });
  }

  function handleSearch(e) {
    e.preventDefault();
    fetchData();
  }

  const fetchData = async () => {
    try {
      await axios
        .get(`https://api.dictionaryapi.dev/api/v2/entries/en/${item}`)
        .then((response) => {
          setData(response.data);

          console.log(response.data);
        });
    } catch (err) {
      console.log("err", err);
    }
  };
  return (
    <div style={{ fontFamily: font }}>
      <div class="content">
        <input
          type="text"
          placeholder="Search"
          id="inputbox"
          onChange={(e) => setItem(e.target.value)}
        ></input>
        <h1 id="icon" onClick={(e) => handleSearch(e)}>
          <BiSearchAlt2 />
        </h1>
        {data.map((ele) => (
          <div>
            <div id="heading">
              <div>
                <h2 id="subject">{ele.word}</h2>
                <p id="phoenitic">{ele.phonetic}</p>
                {/* <p>{ele.text} </p> */}
              </div>

              <div id="audio-div">
                <img
                  id="audio-btn-img"
                  src={image}
                  height="50px"
                  onClick={imgFn}
                />
              </div>
            </div>

            {ele.meanings.map((val) => {
              return (
                <>
                  <h1 id="noun">{val.partOfSpeech}</h1>
                  <p id="meaning">meaning</p>

                  {val.definitions.map((item) => {
                    return (
                      <>
                        <li>{item.definition}</li>
                      </>
                    );
                  })}
                  <div id="synonyms-div">
                    <div>
                      <p id="synonyms">synonyms</p>
                    </div>
                    <div>
                      <p id="synonyms-ans">{val.synonyms}</p>
                    </div>
                  </div>
                </>
              );
            })}
            <div id="source-name">
              <h4 id="source-h">Source</h4>
            </div>
            <div id="source-div">
              <a href={ele.sourceUrls}>{ele.sourceUrls}</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
