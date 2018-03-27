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


  // determine language
  let lang = 'en';
  if (window.location.href.indexOf('?french') > -1) {
    lang = 'fr';
  }

  let youHaveText = 'You have:';
  let tomatoesText = 'tomatoes';

  if (lang === 'fr') {
    youHaveText = 'Vous avez:';
    tomatoesText = 'tomates';
  }

  return (
    <div className="score-container">
      <ScoreTitle>{youHaveText}:</ScoreTitle>

      <TomatoScore>
        <img className="icon" src="/images/icon-tomato.svg" alt="tomato" />
        {props.scores.get('tomatoes')} {tomatoesText}
      </TomatoScore>
      
      
      <MoneyScore>
      <img className="icon" src="/images/icon-money.png" alt="money" />
        {props.scores.get('money')} Francs
      </MoneyScore>
    </div>
  );
}

ConversationScore.propTypes = {

};

export default ConversationScore;
