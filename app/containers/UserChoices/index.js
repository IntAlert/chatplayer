/*
 *
 * UserChoices
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import messages from './messages';
import { respond } from './actions';
import { SCRIPT } from './constants';

import UserChoice from 'components/UserChoice';

export class UserChoices extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {


    const choiceList = []

    for(let choice_id in this.props.choices) {
      // console.log('ex')
      let choice = this.props.choices[choice_id]
      choiceList.push(
        (
          <UserChoice
            key={choice_id}
            onClick={() => this.props.onLinkClick(this.props.current_script_id, choice_id)}
            choice={choice}
          />
        )
      )
    }

    return (
      <div>
        {choiceList}
        {/*<a onClick={this.props.onLinkClick} script_id={"1"} option_id={"1"}>click</a>*/}
      </div>
    );
  }
}

UserChoices.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

export function mapDispatchToProps(dispatch, ownProps) {
  return {
    dispatch,
    onLinkClick: (script_id, option_id) => {
      return dispatch(respond(script_id, option_id))
    }
  };
}

const mapStateToProps = (state) => {

  const feed = state.getIn(['userChoices', 'feed']);
  const current_script_id = state.getIn(['userChoices', 'current_script_id']);
  const choices = SCRIPT["1"].options;
  console.log(SCRIPT["1"])

  return {
    // feed: state.getIn(['userChoices', 'feed']),
    // current_script_id: state.getIn('userChoices', 'current_script_id')
    current_script_id,
    choices
  }
}

// Wrap the component to inject dispatch and state into it
export default connect(mapStateToProps, mapDispatchToProps)(UserChoices);