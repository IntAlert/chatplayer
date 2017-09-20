/**
*
* ConversationScore
*
*/

import React from 'react';
import styled from 'styled-components';
import './styles.css';

const TomatoScore = styled.div`
  padding:10px;
`;

const MoneyScore = styled.div`
  padding:10px;
`;

const ScoreTitle = styled.p`
  margin-top:150px;
  margin-bottom:10px;
  padding:0 10px;
`;


function ConversationScore(props) {

  return (
    <div>
      <ScoreTitle>You have:</ScoreTitle>

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
