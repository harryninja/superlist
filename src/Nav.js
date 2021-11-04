import React, { useContext } from "react";
import { HeroContext } from "./HeroContext";

const design = {
  background: "black",
  height: "60px",
  color: "white",
  display: "flex",
  justifyContent: "space-around",
};

function Nav() {
  const { heros } = useContext(HeroContext);
  return (
    <div style={design}>
      <h2>Superheros</h2>
      <h2>List of heros: {heros.length}</h2>
    </div>
  );
}

export default Nav;
