import React, { Component } from "react";
import Data from "../../../data";
import "../team.style.scss";

export class Team2 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      playerData: Data,
    };
  }

  render() {
    return (
      <div className="table">
        <table class="styled-table">
          <thead >
            <tr>
              <th style={{paddingLeft:"100px"}}>Profile</th>
              <th>Matchs</th>
              <th>Runs</th>
              <th>Wickets</th>
            </tr>
          </thead>
          {this.state.playerData.team2.Players.map((player) => (
            <tbody>
              <tr className="stats">
                <td id="profile">
                  <img className="profile" src={player.img} alt="" />
                 <h4> {player.name}</h4>
                </td>
                <td>{player.matches}</td>
                <td>{player.runs}</td>
                <td>{player.wickets}</td>
              </tr>
              <br />
            </tbody>
          ))}
        </table>
      </div>
    );
  }
}

export default Team2;
