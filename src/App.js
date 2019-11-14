import React from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import FirstPartMain from "./components/FirstPartMain";
import FirstPfooter from "./components/FirstPfooter";
import SecondMainPart from "./components/SecondMainPart";
import ThirdMainPart from "./components/ThirdMainPart";
import Footer from "./components/Footer";

const links = [
  { link: "About us" },
  { link: "Career" },
  {
    link: "Deparments",
    dropDownLinks: [
      "Marketing & PR",
      "Costumer Success & Sales",
      "IT, Product, Design & UX",
      "Finance & Administration",
      "HR & more"
    ]
  }
];
const dpcardsinfo = [
  {
    select: true,
    class: "patients",
    text:
      "We want patients to find the perfect doctor and book an appointment in the most easy way. The patient journey should be enjoyable, and that's why we are always next to them: to help them find the best possible care. Anytime, anywhere.",
    meantfor: "For patients",
    whattodo: "Find a doctor, book a visit and solve any health-related doubt",
    photosrc: "https://www.docplanner.com/img/screen-marketplace@2x.png"
  },
  {
    class: "doctors",
    text:
      "We also help doctors to better manage their practice and build their online reputation. With our integrated end-to-end solution, doctors are able not only to improve their online presence, but also to devote their time to what really matters: their patients.",
    meantfor: "For doctors",
    whattodo: "Save time managing visits and cut no-shows by half",
    photosrc: "https://www.docplanner.com/img/screen-saas@2x.png"
  }
];
function App() {
  return (
    <div className="App">
      <NavBar tab={links} />
      <FirstPartMain dpcardsinfo={dpcardsinfo} />
      <FirstPfooter />
      <SecondMainPart />
      <ThirdMainPart />
      <Footer />
    </div>
  );
}

export default App;
