// import ReactDOM from 'react-dom';
import React, { Component } from 'react';
import './styles.css';


class ConversationContext extends Component {

  render() {
    const { context } = this.props;
    let elements;
    if (context) {
      elements = context.map((def, key) => {
        let element;
        if (def.type === 'image') {
          element = (<img key={key} alt="content" src={def.content} />);
        } else {
          let html = {
            __html: def.content,
          };
          element = (<p key={key} dangerouslySetInnerHTML={html}></p>);
        }
        return element;
      });
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
  context: React.PropTypes.array,
};

export default ConversationContext;
