/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import Conversation from 'components/Conversation';
import {SCRIPT} from './constants';

class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <Conversation
          feed={this.props.feed}
          script={SCRIPT}
          current_script_id={this.props.current_script_id} 
        />
        </div>
    );
  }
}


export function mapDispatchToProps(dispatch) {
  return {
    
  };
}

const mapStateToProps = (state) => {

  return {
    feed: state.getIn(['userChoices', 'feed']),
    current_script_id: state.getIn('userChoices', 'current_script_id')
  }
}

// Wrap the component to inject dispatch and state into it
export default connect(mapStateToProps, mapDispatchToProps)(HomePage);