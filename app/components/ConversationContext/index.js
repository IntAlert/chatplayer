// import ReactDOM from 'react-dom';
import React, { Component } from 'react';
import './styles.css';


class ConversationContext extends Component {

  render() {
    // const { context } = this.props;
    // let elements;
    // if (context) {
    //   elements = context.map((def, key) => {
    //     let element;
    //     if (def.type === 'image') {
    //       element = (<img key={key} alt="content" src={def.content} />);
    //     } else {
    //       let html = {
    //         __html: def.content,
    //       };
    //       element = (<p key={key} dangerouslySetInnerHTML={html}></p>);
    //     }
    //     return element;
    //   });
    // }

    return (
      <div className="conversation-context">
        <div className="image-container">
          <img className="bahati" src="/175b7fbace6a89e5f8fc626f89a81387.png" alt="you are" />
        </div>
        
        <p className="intro">
          You are Maman Chantal.
        </p>
        {/* {elements} */}
      </div>
    );
  }
}

ConversationContext.propTypes = {
  context: React.PropTypes.array,
};

export default ConversationContext;
