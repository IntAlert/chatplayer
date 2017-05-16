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
      return (
              <div className={`bubble-container ${bubbleDirection}`} key={index}>
                <img className={`img-circle`} src={message.image} />
                
                <div className={`bubble ${bubbleClass}`}>
                  <ReactAnimatedEllipsis />
                  <div className={`message-text`}>
                    {message.text}
                    ({message.status})
                  </div>
                </div>
              </div>
          );
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
