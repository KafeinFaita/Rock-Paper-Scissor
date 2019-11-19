import React, { useContext, useState } from 'react';
import { GameContext } from '../GameContext';

const StartScreen = () => {

    const {0: playerScore, 1: cpuScore, 3: setPlayerScore, 4: setCpuScore, 5: setGameLength, 7: text, 8: setText} = useContext(GameContext);
    const [raceTo, setRaceTo] = useState(0);

    const handleGameLength = (event) => {
        setRaceTo(event.target.value)
    }

    const handleStart = (e) => {
        e.preventDefault();
        setGameLength(raceTo);
        setPlayerScore(0);
        setCpuScore(0);
        setText('Make a move')
    }

    const display = playerScore > cpuScore ? 'You win! Play again?' : 'You lose. Try again?'

    return (
        <div id="start-screen">
            <h1>{text === 'Make a move' ? 'Race to:' : display}</h1>
            <input type="number" onChange={handleGameLength} min="1" max="30" />
            <br/>
            <button onClick={handleStart}>START</button>
        </div>
    );
}
 
export default StartScreen;