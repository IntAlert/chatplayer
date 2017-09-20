/**
*
* ConversationScore
*
*/

import React from 'react';
import styled from 'styled-components';
import './styles.css';

const TomatoScore = styled.div`
  padding:1em;
`;

const MoneyScore = styled.div`
  padding:1em;
`;


function ConversationScore(props) {

  return (
    <div className="hello">
      <TomatoScore>
        <img src="/images/icon-tomato.png" alt="tomato" />
        {props.scores.get('tomatoes')} tomatoes
      </TomatoScore>
      
      
      <MoneyScore>
      <img src="/images/icon-money.png" alt="money" />
        {props.scores.get('money')} Francs
      </MoneyScore>
    </div>
  );
}

ConversationScore.propTypes = {

};

export default ConversationScore;
