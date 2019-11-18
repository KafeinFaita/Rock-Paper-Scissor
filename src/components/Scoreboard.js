import React, { useContext } from 'react';
import { GameContext } from '../GameContext';


const Scoreboard = () => {
    const {0: playerScore, 1: cpuScore} = useContext(GameContext);

    return (
        <div id="scoreboard">
            <h2>SCOREBOARD</h2>
            <span>Player: {playerScore} | CPU: {cpuScore}</span>
        </div>
    );
}
 
export default Scoreboard;
