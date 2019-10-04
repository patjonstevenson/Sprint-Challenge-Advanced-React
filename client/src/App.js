import React from 'react';
import axios from "axios";

import TeamList from "./components/TeamList";

import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      dataByTeam: []
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:5000/api/players")
      .then(res => {
        const teams = res.data
          .map(player => player.country)
          .reduce((acc, team) => acc.includes(team)
            ? acc
            : [...acc, team], [])
        this.setState({
          dataByTeam: teams
            .map(team => {
              return {
                country: team,
                players: res.data
                  .filter(player => player.country === team)
              };
            })
        });

      })
      .catch(err => console.log("Error getting data:\n", err));
  }

  componentDidUpdate() {
    console.log("cDU running");


    console.log("Data By Team:\n", this.state.dataByTeam);
  }

  render() {
    return (
      <div className="App">
        <TeamList dataByTeam={this.state.dataByTeam} />
      </div>
    );
  }
}

export default App;
