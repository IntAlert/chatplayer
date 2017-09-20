/**
*
* UserChoice
*
*/

import React from 'react';
import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

const ChoiceContainer = styled.div`
  flex:1;
`;

const ChoiceLink = styled.a`
  display:block;
  background:#087FFE;
  color:#fff;
  // font-weight:bold;
  border-radius:5px;
  margin:1em;
  padding:1em;
  font-size:22px;
  &:hover {
    cursor:pointer;
    background:#085FFF;
  }
`;

function UserChoice(props) {

  
  return (
    <ChoiceContainer>
      <ChoiceLink 
        onClick={props.onClick}
      >
        {props.choice.text}
      </ChoiceLink>
    </ChoiceContainer>
    
  );
}

UserChoice.propTypes = {

};

export default UserChoice;
