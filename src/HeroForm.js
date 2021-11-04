import React, { useState, useContext } from "react";
import { HeroContext } from "./HeroContext";
function HeroForm() {
  const [name, setName] = useState("");
  const [comic, setComic] = useState("");
  const { addHero } = useContext(HeroContext);
  const handleSubmit = (e) => {
    e.preventDefault();
    addHero(name, comic);
    setName("");
    setComic("");
  };
  return (
    <div
      className="d-flex justify-content-center p-3"
      style={{ background: "teal" }}
    >
      <form className="col-md-4" onSubmit={handleSubmit}>
        <div className="form-group">
          <h5>SuperHero</h5>
          <input
            className="form-control"
            type="text"
            placeholder="Enter SuperHero"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <h5>Comic</h5>
          <input
            className="form-control"
            type="text"
            placeholder="Enter Comic"
            value={comic}
            onChange={(e) => setComic(e.target.value)}
            required
          />
        </div>
        <button className="btn btn-primary" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}

export default HeroForm;
