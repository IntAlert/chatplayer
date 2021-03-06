/**
*
* FlippableImage
*
*/

import React from 'react';
// import styled from 'styled-components';
import './styles.css';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

class FlippableImage extends React.Component { // eslint-disable-line react/prefer-stateless-function

  constructor(props) {
    super(props);
    this.handleTouchStart = this.handleTouchStart.bind(this);

    this.state = {
      isTouchFlipped: false,
    };
  }

  handleTouchStart() {
    this.setState({
      isTouchFlipped: !this.state.isTouchFlipped,
    });
  }
  

  render() {
    const { message } = this.props;

    const flippedClass = this.state.isTouchFlipped ? "flip-container touch-flipped" : 'flip-container ';

    return (
      <div>
        <div className={flippedClass} onClick={this.handleTouchStart} >
          <div className="flipper">
            <div className="front">
              <img src={message.content} />
              <span className="more">Touch to learn more</span>
            </div>
            <div className="back">
              <p>
                {message.more}
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

FlippableImage.propTypes = {
  message: React.PropTypes.any,
};

export default FlippableImage;
