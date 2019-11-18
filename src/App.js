import React from 'react';
import Header from './components/Header';
import Scoreboard from './components/Scoreboard';
import Body from './components/Body';
import { GameProvider } from './GameContext';


function App() {
  return (
    <GameProvider>
      <div className="App">
        <Header />
        <Scoreboard />
        <Body />
      </div>
    </GameProvider>
  );

}

export default App;
