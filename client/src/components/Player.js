import React from "react";

const Player = ({ player }) => {
    return (
        <div className="player">
            <h3>{player.name}</h3>
            <p>Searches: {player.searches}</p>
        </div>
    );
}

export default Player;