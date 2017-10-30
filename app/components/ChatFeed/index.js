// import ReactDOM from 'react-dom';
import React, { Component } from 'react';
import { animateScroll } from 'react-scroll';


import './styles.css';

import botAvatar from './avatar-bot.png';
import userAvatar from './avatar-user.png';

import loadingAnimationImage from './loading.svg';

import ExpandableImage from '../ExpandableImage';
// import FlippableImage from '../FlippableImage';

class ChatFeed extends Component {

  componentDidUpdate() {
    animateScroll.scrollToBottom();
  }

  getConversations(messages) {
    if (messages == undefined) {
      console.log("react-chat-bubble::", "'messages' props should be an array!");
      return;
    }

    const listItems = messages.map((message, index) => {
      var bubbleClass, bubbleDirection;



      // determine bubble behaviour depending on who is speaking
      if (message.speaker === -1) {
        // narrator
        bubbleClass = 'narrator';
        bubbleDirection = '';
        // no avatar 
        var avatar = ''; // (<img className={`img-circle`} src={narratorAvatar} />)
      } else if(message.speaker === 0) {
        // user
        bubbleClass = 'you';
        bubbleDirection = "bubble-direction-reverse";

        var avatar = (<img className={`img-circle`} src={userAvatar} />)
      } else {
        // bot
        bubbleClass = 'me';
        bubbleDirection = "";
        var avatar = (<img className={`img-circle`} src={botAvatar} />)
      } 


      // determine content of bubble depending on content type
      let messageContent
      if(message.type == 'text') {
        messageContent = (
          <div className={`message-text`}>
            {message.content}
          </div>
        )
      } else if(message.type === 'image') {

        let messageImage;

        if (message.more) {
          
          // make card flippable if there is more info on the image
          messageImage = (
            // <FlippableImage message={message} />
            <ExpandableImage message={message} />
          );
        } else {
          messageImage = <img src={message.content} />;
        }


        messageContent = (
          <div className={`message-image`}>
            {messageImage}
          </div>
        )
      } 


      // determine appearance of message depending on status
      if(message.speaker === 0 || message.status == 'app/Home/BOT_MESSAGE_VISIBLE') {

        // show whole message for all user messags
        // or shown bot messages
        var messageDiv = (
          <div className={`bubble-container ${bubbleDirection}`} key={index}>
            {avatar}
            <div className={`bubble ${bubbleClass}`}>
              {messageContent}
            </div>
          </div>
        )
      } else if (message.status == 'app/Home/BOT_MESSAGE_WRITING') {

        // show ellipsis
        var messageDiv = (
          <div className={`bubble-container ${bubbleDirection}`} key={index}>
            {avatar}
            <div className={`bubble ${bubbleClass}`}>
              <div className="loading">
                 <img alt="loading" src={loadingAnimationImage} width="95" height="42" /> 
              </div>
            </div>
          </div>
        )
      } else {
        // assume app/Home/BOT_MESSAGE_INVISIBLE
        // do not add to DOM yet
        var messageDiv = null
      }


      return (messageDiv);

    });
    return listItems;
  }

  handleTouchStart(){
    this.setState({
        isHovered: !this.state.isHovered
    });
  }

  render() {
    const {messages} = this.props;
    const chatList = this.getConversations(messages);
    const open = true;
    return (

      <div className="chats">

        {chatList}
        
        <div 
          style={ {float:"left", clear: "both"} }
          ref={(el) => { this.messagesEnd = el; }}
        ></div>

      </div>
    );
  }
}

ChatFeed.propTypes = {
  messages: React.PropTypes.array
};

export default ChatFeed;
