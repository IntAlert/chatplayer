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
            onClick={() => this.props.onLinkClick(this.props.current_stage_id, choice_id)}
            choice={choice}
          />
        )
      )
    }

    return (
      <div>
        {choiceList}
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
    onLinkClick: (stage_id, choice_id) => {
      return dispatch(respond(stage_id, choice_id))
    }
  };
}

const mapStateToProps  = (state) => {

  // const feed = state.getIn(['userChoices', 'feed']);
  const current_stage_id = state.getIn(['home', 'current_stage_id']);
  const choices = state.getIn(['home', 'script', 'stages', current_stage_id, 'choices']).toJS()

  return {
    current_stage_id,
    choices
  }
}

// Wrap the component to inject dispatch and state into it
export default connect(mapStateToProps, mapDispatchToProps)(UserChoices);