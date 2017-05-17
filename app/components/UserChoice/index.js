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
  width:33%;
  float:left;
`;

// TODO: make FLEX
const ChoiceLink = styled.a`
  display:block;
  background:#eee;
  margin:1em;
  padding:1em;
  &:hover {
    cursor:pointer;
    background:#ddd;
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
