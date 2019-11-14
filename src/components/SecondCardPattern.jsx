import React from "react";
import "./SecondCardPattern.css";

const cardsinfo = [
  { picsrc: "https://www.docplanner.com/images/warsaw.png", city: "Warsaw" },
  {
    picsrc: "https://www.docplanner.com/images/barcelona.png",
    city: "Barcelona"
  },
  {
    picsrc: "https://www.docplanner.com/images/istanbul.png",
    city: "Istanbul"
  },
  { picsrc: "https://www.docplanner.com/images/rome.png", city: "Rome" },
  {
    picsrc: "https://www.docplanner.com/images/mexico-city.png",
    city: "Mexico City"
  },
  { picsrc: "https://www.docplanner.com/images/curitiba.png", city: "Curitiba" }
];

export default function SecondCardPattern() {
  return (
    <div className="second-cards-container">
      {cardsinfo.map((el, i) => (
        <div className="second-card-container">
          <img src={el.picsrc} alt="city-pic"></img>
          <p>{el.city}</p>
          <button>SEE OPENINGS</button>
        </div>
      ))}
    </div>
  );
}
