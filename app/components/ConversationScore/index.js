/**
*
* ConversationScore
*
*/

import React from 'react';
import styled from 'styled-components';

const TomatoScore = styled.div`
  color:#fff;
  background:red;
  padding:1em;
  margin:1em;
`;

const MoneyScore = styled.div`
  color:#fff;
  background:green;
  padding:1em;
  margin:1em;
`;


function ConversationScore(props) {
  return (
    <div>
      <TomatoScore>
        You have {props.scores.get('tomatoes')} tomato(es) 
      </TomatoScore>
      
      
      <MoneyScore>
        Money: You have {props.scores.get('money')} Franc(s)
      </MoneyScore>
    </div>
  );
}

ConversationScore.propTypes = {

};

export default ConversationScore;
