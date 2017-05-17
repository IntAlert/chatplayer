import ReactDOM from 'react-dom';
import React, { Component } from 'react';
import {animateScroll} from 'react-scroll';
import './styles.css';

import alertAvatar from './avatar-alert.png';
import userAvatar from './avatar-user.png';

class ChatFeed extends Component {



  componentDidUpdate() {
      animateScroll.scrollToBottom()
  }

  getConversations(messages){

    if(messages == undefined){
      console.log("react-chat-bubble::", "'messages' props should be an array!");
      return;
    }

    const listItems = messages.map((message, index) => {
      let bubbleClass = 'me';
      let bubbleDirection = '';

      if(message.type === 0){
        // user
        
        bubbleClass = 'you';
        bubbleDirection = "bubble-direction-reverse";

        var avatar = (<img className={`img-circle`} src={userAvatar} />)
      } else {
        // bot
        var avatar = (<img className={`img-circle`} src={alertAvatar} />)
      }


      // determine appearance of message depending on status
      if(message.type === 0 || message.status == 'app/Home/BOT_MESSAGE_VISIBLE') {

        // show whole message for all user messags
        // or shown bot messages
        var messageDiv = (
          <div className={`bubble-container ${bubbleDirection}`} key={index}>
            {avatar}
            <div className={`bubble ${bubbleClass}`}>
              <div className={`message-text`}>
                {message.text}
              </div>
            </div>
          </div>
        )
      } else if (message.status == 'app/Home/BOT_MESSAGE_WRITING') {

        // show ellipsis
        var messageDiv = (
          <div className={`bubble-container ${bubbleDirection}`} key={index}>
            {avatar}
            <div className={`bubble ${bubbleClass}`}>
              <div className="loading"></div>
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

  render() {
    const {messages} = this.props;
    const chatList = this.getConversations(messages);
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
