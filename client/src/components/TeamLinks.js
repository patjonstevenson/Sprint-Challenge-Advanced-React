import React from "react";

const TeamLinks = ({ teams }) => {
    return (
        <div className="team-links">
            {teams.map(team => (
                <a className="link" href={`#${team}`}>{team}</a>
            ))}
        </div>
    );
}

export default TeamLinks