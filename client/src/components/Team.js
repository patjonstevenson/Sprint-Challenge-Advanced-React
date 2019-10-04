import React, { useEffect } from "react";
import Player from "./Player";
import useLocalStorage from "../hooks/useLocalStorage";

export const totalSearches = team => team.players
    .reduce((sum, player) => sum + player.searches, 0);

const Team = ({ team }) => {
    const [searches, setSearches] = useLocalStorage(`${team.country}-searches`, 0);
    useEffect(() => {
        setSearches(totalSearches(team));
    }, [])
    return (
        <div className="team" id={team.country}>
            <div className="team-heading">
                <h2>{team.country}</h2>

                <a className="link" href="#">[back to top]</a>
            </div>
            <p>Total searches: {searches}</p>
            <div className="players">
                {team.players.map(player => (
                    <Player key={player.id} player={player} />
                ))}
            </div>
        </div>
    );
}

export default Team;