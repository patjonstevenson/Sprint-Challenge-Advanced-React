import React from "react";
import Player from "./Player";

const Team = ({ team }) => {
    return (
        <div className="team" id={team.country}>
            <div className="team-heading">
                <h2>{team.country}</h2>
                <a className="link" href="#">[back to top]</a>
            </div>

            <div className="players">
                {team.players.map(player => (
                    <Player player={player} />
                ))}
            </div>
        </div>
    );
}

export default Team;