/**
*
* UserChoice
*
*/

import React from 'react';
// import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

function UserChoice(props) {
  console.log(props)
  return (
    <div>
      <a 
        onClick={props.onClick}
      >
        {props.choice.text}
      </a>
    </div>
    
  );
}

{/*<div onClick={props.onClick}>
      {props.choice.text}
    </div>*/}

UserChoice.propTypes = {

};

export default UserChoice;
