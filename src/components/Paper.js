import React, { useContext } from 'react';
import paper from '../images/paper.jpg'
import { GameContext } from '../GameContext';

const Paper = () => {

    const {6: handleScore} = useContext(GameContext);
    return (
        <div id="paper" onClick={handleScore}>
            <img src={paper} alt="Paper"/>
        </div>
    );
}
 
export default Paper;