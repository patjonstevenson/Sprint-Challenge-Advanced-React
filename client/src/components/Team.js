import React from "react";
import Player from "./Player";

export const totalSearches = team => team.players
    .reduce((sum, player) => sum + player.searches, 0);

const Team = ({ team }) => {
    return (
        <div className="team" id={team.country}>
            <div className="team-heading">
                <h2>{team.country}</h2>

                <a className="link" href="#">[back to top]</a>
            </div>
            <p>Total searches: {totalSearches(team)}</p>
            <div className="players">
                {team.players.map(player => (
                    <Player key={player.id} player={player} />
                ))}
            </div>
        </div>
    );
}

export default Team;