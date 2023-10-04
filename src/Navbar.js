// import { useState } from "react";
import React, { useState } from "react";
import { BiSolidBookAdd } from "react-icons/bi";
import { BiMoon } from "react-icons/bi";
import { Dictionary } from "./Dictionary";

export const Navbar = ({ nightMode, setNightMode,setFont }) => {
  const toggleMode = () => {
    setNightMode(!nightMode);
  };

  return (
    <div className="navbar" >
      <h1>
        <BiSolidBookAdd />
      </h1>

      <div id="mode">
        <div id="select">
          <select id="textfont" onChange={(event)=> setFont(event.target.value)}>
            <option value="none">none</option>
            <option value="Serif">Serif</option>
            <option value="Times">Times</option>
          </select>
        </div>

        <div id="toglebutton-1">
          <input
            type="checkbox"
            class="checkbox"
            id="chk"
            onChange={toggleMode}
          ></input>
          <label class="label" for="chk">
            <div class="ball"></div>
          </label>
        </div>
        <h1>
          <BiMoon />
        </h1>
      </div>
      {/* {Dictionary nightMode={nightMode}}/> */}
    </div>
  );
};
