import React, { useContext } from 'react';
import rock from '../images/rock.jpg'
import { GameContext } from '../GameContext';

const Rock = () => {

    const {6: handleScore} = useContext(GameContext)
    return (
        <div id="rock" onClick={handleScore}>
            <img src={rock} alt="Rock"/>
        </div>
    );
}
 
export default Rock;
