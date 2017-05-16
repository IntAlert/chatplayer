/**
*
* UserChoice
*
*/

import React from 'react';
// import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';
import { Flex, Item } from 'react-flex';


function UserChoice(props) {
  
  return (
    <Flex>
      <a 
        onClick={props.onClick}
      >
        {props.choice.text}
      </a>
    </Flex>
    
  );
}

UserChoice.propTypes = {

};

export default UserChoice;
