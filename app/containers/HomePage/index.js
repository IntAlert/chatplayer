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
// import { FormattedMessage } from 'react-intl';
import Conversation from 'components/Conversation';
import {loadScript, startTimer} from './actions';

class HomePage extends React.Component { // eslint-disable-line react/prefer-stateless-function

  componentDidMount() {

    // determine language
    let lang = 'en';
    if (window.location.href.indexOf('?french') > -1) {
      lang = 'fr';
    };

    this.props.onLoad(lang);
    this.props.onStartTimer();
  }

  render() {
    if (this.props.script_loaded) {
      var homePageContent = (<Conversation feed={this.props.feed} context={this.props.context} scores={this.props.scores} />)
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
    onLoad: (lang) => {
      return dispatch(loadScript(lang));
    },
    onStartTimer: () => {
      return dispatch(startTimer());
    },
  };
}

const mapStateToProps = (state) => {
  const current_stage_id = state.getIn(['home', 'current_stage_id']);
  const script_loaded = state.getIn(['home', 'script_loaded']);
  const feed = state.getIn(['home', 'feed']);
  const scores = state.getIn(['home', 'scores']);

  // context is empty if script not loaded yet OR if context isn't set in SCRIPT
  let context = state.getIn(['home', 'script', 'stages', current_stage_id, 'context']);

  if (context) context = context.toJS();

  return { script_loaded, feed, context, scores };
};


// Wrap the component to inject dispatch and state into it
export default connect(mapStateToProps, mapDispatchToProps)(HomePage);