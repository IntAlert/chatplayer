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
import {SCRIPT} from 'global/constants';
import {SCRIPT_FETCH_REQUESTED} from './constants'
import {loadScript} from './actions'

class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  componentDidMount() {
    return this.props.onLoad();
  }

  render() {


    if (this.props.script_loaded) {
      var homePageContent = (
        <div>
          <Conversation
            feed={this.props.feed}
            script={SCRIPT}
            current_stage_id={this.props.current_stage_id} 
          />

          <a onClick={ this.props.onLoad }>
            Reload Script
          </a>
        </div>
      )
    } else {
      var homePageContent = (
        <div>
          <br /><br /><br /><br /><br /><br /><br /><br /><br />Loading...
        </div>
      )
    }



    return (
      <div>
        {homePageContent}
      </div>

        
    );
  }
}


export function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    onLoad: () => {
      return dispatch(loadScript())
    },
  };
}

const mapStateToProps = (state) => {

  return {
    script_loaded: state.getIn(['home', 'script_loaded'], false),
    feed: state.getIn(['home', 'feed'], []),
    current_stage_id: state.getIn('home', 'current_stage_id')
  }
}

// Wrap the component to inject dispatch and state into it
export default connect(mapStateToProps, mapDispatchToProps)(HomePage);