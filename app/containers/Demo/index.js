/*
 *
 * Demo
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

const DemoContainer = styled.div`
  margin:30px 100px;
`


export class Demo extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <DemoContainer>
        <iframe src="/" width="375" height="667" frameBorder="0"></iframe>
      </DemoContainer>
    );
  }
}

Demo.propTypes = {
  dispatch: PropTypes.func.isRequired,
};


function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(null, mapDispatchToProps)(Demo);
