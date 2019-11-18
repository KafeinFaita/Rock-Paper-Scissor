import React, { useContext } from 'react';
import scissor from '../images/scissor.jpg'
import { GameContext } from '../GameContext';

const Scissor = () => {

    const {6: handleScore} = useContext(GameContext);
    return (
        <div id="scissor" onClick={handleScore}>
            <img src={scissor} alt="Scissor"/>
        </div>
    );
}
 
export default Scissor;