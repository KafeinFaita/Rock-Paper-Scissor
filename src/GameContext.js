import React, { useState, createContext } from 'react';

export const GameContext = createContext();

export const GameProvider = props => {

    const [playerScore, setPlayerScore] = useState(0);
    const [cpuScore, setCpuScore] = useState(0);
    const [gameLength, setGameLength] = useState(0);

    const handleScore = (e) => {
        let choices = ['rock', 'paper', 'scissor']
        let rand = Math.floor(Math.random() * 3);
        let cpuChoice = choices[rand];
        console.log(`You picked ${e.currentTarget.id}, CPU picked ${cpuChoice}`);

        const gameSet = (win, lose) => {
            switch(cpuChoice) {
                case win:
                    setCpuScore(cpuScore + 1)
                    break;
                case lose:
                    setPlayerScore(playerScore + 1)
                    break;
                default:
                    break;
            }
        }
        
        if (e.currentTarget.id === "rock") {
            gameSet('paper', 'scissor');
        } else if (e.currentTarget.id === "paper") {
            gameSet('scissor', 'rock');
        } else {
            gameSet('rock', 'paper');
        }
    }

    return (
        <GameContext.Provider value={[playerScore, cpuScore, gameLength, setPlayerScore, setCpuScore, setGameLength, handleScore]}>
            {props.children}
        </GameContext.Provider>
    ) 
}
 
