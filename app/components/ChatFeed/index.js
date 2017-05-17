import React, { Component } from 'react';
import './styles.css';
import ReactAnimatedEllipsis from 'react-animated-ellipsis';

class ChatFeed extends Component {

  getConversations(messages){

    if(messages == undefined){
      console.log("react-chat-bubble::", "'messages' props should be an array!");
      return;
    }

    const listItems = messages.map((message, index) => {
      let bubbleClass = 'me';
      let bubbleDirection = '';

      if(message.type === 0){
        bubbleClass = 'you';
        bubbleDirection = "bubble-direction-reverse";
      }

      // determine appearance of message depending on status
      if(message.type === 0 || message.status == 'app/Home/BOT_MESSAGE_VISIBLE') {

        // show whole message for all user messags
        // or shown bot messages
        var messageDiv = (
          <div className={`bubble-container ${bubbleDirection}`} key={index}>
            <img className={`img-circle`} src={message.image} />
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
            <img className={`img-circle`} src={message.image} />
            <div className={`bubble ${bubbleClass}`}>
              <ReactAnimatedEllipsis />
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
      </div>
    );
  }
}

ChatFeed.propTypes = {
  messages: React.PropTypes.array
};

export default ChatFeed;
