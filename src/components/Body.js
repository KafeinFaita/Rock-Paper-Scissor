import React, { useContext } from 'react';
import Rock from './Rock';
import Paper from './Paper';
import Scissor from './Scissor';
import { GameContext } from '../GameContext';
import StartScreen from './StartScreen';

const Body = () => {

    const {0: playerScore, 1: cpuScore, 2: gameLength, 7: text} = useContext(GameContext);

    if ((playerScore < gameLength && cpuScore < gameLength) && gameLength !== 0) {
        return (
            <div id="body">
                <h2>{text}</h2>
                <Rock />
                <Paper />
                <Scissor />
            </div>
        );
    } else {
        return (
            <StartScreen />
        )
    }
}
 
export default Body;