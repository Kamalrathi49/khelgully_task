import React from "react";
import Team1 from "./components/teams/team1/team1.component.jsx";
import Team2 from "./components/teams/team2/team2.component.jsx";
import Team3 from "./components/teams/team3/team3.component.jsx";
import "./App.scss";


const App = () => {
  return (
    <div className="app">
      <div className="layout">
        <input
          name="nav"
          type="radio"
          className="nav home-radio"
          id="home"
          checked="checked"
        />
        <div className="page home-page">
          <div className="page-contents">
            <Team1 />
          </div>
        </div>
        <label className="nav" for="home">
          <span>1st Team</span>
        </label>

        <input name="nav" type="radio" className="about-radio" id="about" />
        <div className="page about-page">
          <div className="page-contents">
            <Team2 />
          </div>
        </div>
        <label className="nav" for="about">
          <span>2rd Team</span>
        </label>

        <input name="nav" type="radio" className="contact-radio" id="contact" />
        <div className="page contact-page">
          <div className="page-contents">
            <Team3 />
          </div>
        </div>
        <label className="nav" for="contact">
          <span>3rd Team</span>
        </label>
      </div>
    </div>
  );
};

export default App;
