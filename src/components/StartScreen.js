import React, { useContext, useState } from 'react';
import { GameContext } from '../GameContext';

const StartScreen = () => {

    const {3: setPlayerScore, 4: setCpuScore, 5: setGameLength} = useContext(GameContext);
    const [raceTo, setRaceTo] = useState(0);

    const handleGameLength = (event) => {
        setRaceTo(event.target.value)
    }

    const handleStart = (e) => {
        e.preventDefault();
        setGameLength(raceTo);
        setPlayerScore(0);
        setCpuScore(0);
    }

    return (
        <div id="start-screen">
            <h1>Race to:</h1>
            <input type="number" onChange={handleGameLength} min="1" max="30" />
            <br/>
            <button onClick={handleStart}>START</button>
        </div>
    );
}
 
export default StartScreen;