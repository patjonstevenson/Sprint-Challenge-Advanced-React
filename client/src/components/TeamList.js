import React from "react";
import Team from "./Team";

const TeamList = (props) => {
    return (
        <div className="team-list">
            {props.dataByTeam.map(team => (
                <Team team={team} />
            ))}
        </div>
    );
}

export default TeamList;