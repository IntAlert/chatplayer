/**
*
* UserChoice
*
*/

import React from 'react';
import './styles.css';

function UserChoice(props) {

  
  return (
    <div className="choice-container">
      <div 
        className="choice-link" 
        onClick={props.onClick}
      >
        {props.choice.text}
      </div>
    </div>
    
  );
}

UserChoice.propTypes = {

};

export default UserChoice;
