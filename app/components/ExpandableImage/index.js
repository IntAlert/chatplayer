/**
*
* FlippableImage
*
*/

import React from 'react';
// import styled from 'styled-components';

import Modal from 'react-responsive-modal';

import './styles.css';

// import { FormattedMessage } from 'react-intl';
// import messages from './messages';

class ExpandableImage extends React.Component { // eslint-disable-line react/prefer-stateless-function

  constructor(props) {
    super(props);
    this.handleTouchStart = this.handleTouchStart.bind(this);

    this.state = {
      open: false,
    };
  }



  onOpenModal = () => {
    this.setState({ open: true });
  };
 
  onCloseModal = () => {
    this.setState({ open: false });
  };


  handleTouchStart() {
    this.setState({
      isTouchFlipped: !this.state.isTouchFlipped,
    });
  }
  

  render() {
    const { message } = this.props;
    const { open } = this.state;
    // const flippedClass = this.state.isTouchFlipped ? "flip-container touch-flipped" : 'flip-container ';

    return (
      <div>

        <div className="image-container" onClick={this.onOpenModal}>
          <img src={message.content} />
          <span className="more">Touch to learn more</span>
        </div>

        <Modal open={open} little onClose={this.onCloseModal}>
          <img className="expanded-info" src={message.content} />
          <p className="expanded-info">{message.more}</p>
        </Modal>

      </div>
    );
  }
}

ExpandableImage.propTypes = {
  message: React.PropTypes.any,
};

export default ExpandableImage;
