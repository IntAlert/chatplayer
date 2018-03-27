/**
*
* ConversationScoreHighlighted
*
*/

import React from 'react';
import styled from 'styled-components';

import './styles.css';

const TomatoScore = styled.div`
  padding:5px;
`;

const MoneyScore = styled.div`
  padding:5px;
`;

const ScoreTitle = styled.p`
  margin:0;
  padding:10px;
  font-weight:400;
  text-decoration:underline;
  line-height:1;
`;

class ConversationScoreHighlighted extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  constructor(props) {
    super(props);
    this.state = {
      highlightTomato: false,
        highlightMoney: false,
      };
    }

    componentWillReceiveProps(newProps) {
        if (this.props.scores.get('tomatoes') != newProps.scores.get('tomatoes')) {
            this.setState({highlightTomato: true});
            setTimeout(() => {
              this.setState({highlightTomato: false});
            }, 1000)
        }

        if (this.props.scores.get('money') != newProps.scores.get('money')) {
          this.setState({highlightMoney: true});
          setTimeout(() => {
            this.setState({highlightMoney: false});
          }, 1000)
      }
    }

    render() {

      const highlightTomatoClass = this.state.highlightTomato ? 'highlighted' : '';
      const highlightMoneyClass = this.state.highlightMoney ? 'highlighted' : '';


      // determine language
      let lang = 'en';
      if (window.location.href.indexOf('?french') > -1) {
        lang = 'fr';
      }

      let youHaveText = 'You have';
      let tomatoesText = 'tomatoes';

      if (lang === 'fr') {
        youHaveText = 'Vous avez';
        tomatoesText = 'tomates';
      }


      return (
      <div className="score-container">
        <ScoreTitle>{youHaveText}:</ScoreTitle>

        <TomatoScore className={highlightTomatoClass}>
          <img className="icon" src="/images/icon-tomato.png" alt="tomato" />
          <span className="score">
            {this.props.scores.get('tomatoes')} <span className="unit">{tomatoesText}</span>
          </span>
        </TomatoScore>
        
        
        <MoneyScore className={highlightMoneyClass}>
        <img className="icon" src="/images/icon-money.png" alt="money" />
          <span className="score">
          {this.props.scores.get('money')} <span className="unit">francs</span>
          </span>
        </MoneyScore>
      </div>
    );
  }
}

ConversationScoreHighlighted.propTypes = {

};

export default ConversationScoreHighlighted;
