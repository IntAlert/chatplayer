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

var style = {
    backgroundColor: "#F8F8F8",
    borderTop: "1px solid #E7E7E7",
    textAlign: "center",
    position: "fixed",
    left: "0",
    bottom: "0",
    height: "120px",
    width: "100%",
    display: "flex",
    boxShadow: "0px -5px 20px 0px rgba(153,153,153,1)"
};

var phantom = {
  display: 'block',
  padding: '20px',
  height: '120px',
  width: '100%',
}

export class UserChoices extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  render() {

    const choiceList = []

    if (this.props.show_user_choices) {
      for(let choice_id in this.props.choices) {
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
    }
    
    return (

      <div>
        <div style={phantom} />
        <div style={style}>
          {choiceList}
        </div>
      </div>
    
    );
  }
}

UserChoices.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

export function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    onLinkClick: (stage_id, choice_id) => {
      return dispatch(respond(stage_id, choice_id));
    },
  };
}

const mapStateToProps  = (state) => {

  const show_user_choices = state.getIn(['home', 'show_user_choices']);
  const current_stage_id = state.getIn(['home', 'current_stage_id']);
  const choices = state.getIn(['home', 'script', 'stages', current_stage_id, 'choices']).toJS()

  return {
    show_user_choices,
    current_stage_id,
    choices
  }
}

// Wrap the component to inject dispatch and state into it
export default connect(mapStateToProps, mapDispatchToProps)(UserChoices);