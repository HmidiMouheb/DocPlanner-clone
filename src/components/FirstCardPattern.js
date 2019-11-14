import React from "react";
import "./FirstCardPattern.css";

const obj = [
  {
    image: "https://www.docplanner.com/img/flag.png",
    title: "Leader in 10 countries",
    text:
      "Poland, Turkey, Spain, Italy, Czech Republic, Mexico, Brazil, Colombia, Argentina and Chile"
  },
  {
    image: "https://www.docplanner.com/img/visits.png",
    title: "1.5 million appointments",
    text: "booked last month"
  },
  {
    image: "https://www.docplanner.com/img/patients.png",
    title: "30 million unique patients",
    text: "visit us every month"
  },
  {
    image: "https://www.docplanner.com/img/doctors.png",
    title: "2 million active doctors",
    text: "trust in our solutions"
  }
];
export default function FirstCardPattern() {
  return (
    <div className="first-cards-container">
      {obj.map((el, i) => (
        <div className="card-container">
          <img src={el.image}></img>
          <h1>{el.title}</h1>
          <p>{el.text}</p>
        </div>
      ))}
    </div>
  );
}
