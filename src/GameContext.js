import React, { useState, createContext } from 'react';

export const GameContext = createContext();

export const GameProvider = props => {

    const [playerScore, setPlayerScore] = useState(0);
    const [cpuScore, setCpuScore] = useState(0);
    const [gameLength, setGameLength] = useState(0);
    const [text, setText] = useState('Make a move');

    const handleScore = (e) => {
        let choices = ['rock', 'paper', 'scissor']
        let rand = Math.floor(Math.random() * 3);
        let cpuChoice = choices[rand];
        console.log(`You picked ${e.currentTarget.id}, CPU picked ${cpuChoice}`);

        const gameSet = (win, lose) => {
            switch(cpuChoice) {
                case win:
                    setPlayerScore(playerScore + 1)
                    setText(`You picked ${e.currentTarget.id}, CPU picked ${cpuChoice}. You win!`);
                    break;
                case lose:
                    setCpuScore(cpuScore + 1)
                    setText(`You picked ${e.currentTarget.id}, CPU picked ${cpuChoice}. You lose...`);
                    break;
                default:
                    setText(`You both picked ${cpuChoice}. It's a draw.`);
                    break;
            }
        }
        
        if (e.currentTarget.id === "rock") {
            gameSet('scissor', 'paper');
        } else if (e.currentTarget.id === "paper") {
            gameSet('rock', 'scissor');
        } else {
            gameSet('paper', 'rock');
        }
    }

    return (
        <GameContext.Provider value={[playerScore, cpuScore, gameLength, setPlayerScore, setCpuScore, setGameLength, handleScore, text, setText]}>
            {props.children}
        </GameContext.Provider>
    ) 
}
 
