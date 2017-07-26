import ReactDOM from 'react-dom';
import React, { Component } from 'react';
import './styles.css';



class ConversationContext extends Component {

  render() {
    const {context} = this.props;
    var elements
    if (context) {
      elements = context.map((def, key) => {
        let element
        if (def.type == 'image') {
          element = (<img key={key} src={def.content} />)
        } else {
          element = (<p key={key}>{def.content}</p>)
        }
        return element
      })
    }
    

    return (
      <div className="conversation-context">
        <h6>Crossing the DRC/Rwanda border</h6>
        {elements}
      </div>
    );
  }
}

ConversationContext.propTypes = {
  messages: React.PropTypes.array
};

export default ConversationContext;
