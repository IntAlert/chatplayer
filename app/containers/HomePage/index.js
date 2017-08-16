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
import {SCRIPT_FETCH_REQUESTED} from './constants'
import {loadScript, startTimer} from './actions'

class HomePage extends React.Component { // eslint-disable-line react/prefer-stateless-function

  componentDidMount() {
    this.props.onLoad();
    this.props.onStartTimer();
  }

  render() {
    if (this.props.script_loaded) {
      var homePageContent = (<Conversation feed={this.props.feed} context={this.props.context} />)
    } else {
      var homePageContent = (
        <div>
          Loading...
        </div>
      )
    }
    return homePageContent;
  }
}


export function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    onLoad: () => {
      return dispatch(loadScript())
    },
    onStartTimer: () => {
      return dispatch(startTimer())
    },
  };
}

const mapStateToProps = (state) => {
  
  const current_stage_id = state.getIn(['home', 'current_stage_id']);
  const script_loaded = state.getIn(['home', 'script_loaded']);
  const feed = state.getIn(['home', 'feed']);

  // context is empty if script not loaded yet OR if context isn't set in SCRIPT
  let context = state.getIn(['home', 'script', 'stages', current_stage_id, 'context']);

  if (context) context = context.toJS();

  return { script_loaded, feed, context };
};


// Wrap the component to inject dispatch and state into it
export default connect(mapStateToProps, mapDispatchToProps)(HomePage);