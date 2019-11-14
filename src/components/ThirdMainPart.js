import React from "react";
import "./ThirdMainPart.css";
import SecondCardPattern from "./SecondCardPattern";

export default function ThirdMainPart() {
  return (
    <div className="third-main-part-container">
      <h2>Improve the lives of millions. Change yours forever</h2>
      <p>
        More than 1000 team mates share our same vision, goals and passion. With
        offices in Warsaw, Barcelona, Istanbul, Rome, Mexico City and Curitiba,
        our search for great talent never stops.
      </p>
      <div>
        <SecondCardPattern />
      </div>
    </div>
  );
}
