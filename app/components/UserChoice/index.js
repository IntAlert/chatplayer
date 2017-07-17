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
  width:50%;
  float:left;
`;

// TODO: make FLEX
const ChoiceLink = styled.a`
  display:block;
  background:#ffc400;
  font-weight:bold;
  border-radius:5px;
  margin:1em;
  padding:1em;
  &:hover {
    cursor:pointer;
    background:#ccc;
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
