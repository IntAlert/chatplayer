import ReactDOM from 'react-dom';
import React, { Component } from 'react';
import './styles.css';



class ConversationContext extends Component {

  getConversations(messages){

    if(messages == undefined){
      console.log("react-chat-bubble::", "'messages' props should be an array!");
      return;
    }

    const listItems = messages.map((message, index) => {

    });
    return listItems;
  }

  render() {
    // const {messages} = this.props;
    // const chatList = this.getConversations(messages);
    return (
      <div className="conversation-context">
        <h1>Crossing the DRC/Rwanda border</h1>
        <img src="/images/queue.jpg" />
        <p>
          Some context
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat nemo corrupti ea totam tempora ipsa nesciunt beatae est nihil facere voluptatibus, culpa aut, in error minima, unde, dolore sint. Deleniti.
        </p>
      </div>
    );
  }
}

ConversationContext.propTypes = {
  messages: React.PropTypes.array
};

export default ConversationContext;
