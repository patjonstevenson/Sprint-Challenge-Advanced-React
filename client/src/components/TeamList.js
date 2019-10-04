import React from "react";
import Player from "./Player";

const TeamList = (props) => {
    return (
        <div className="team-list">
            {props.dataByTeam.map(team => (
                <div className="team">
                    <h2>{team.country}</h2>
                    {team.players.map(player => (
                        <Player player={player} />
                    ))}
                </div>
            ))}
        </div>
    );
}

export default TeamList;