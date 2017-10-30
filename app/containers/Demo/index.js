/*
 *
 * Demo
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import './styles.css';

import androidWrapper from './android-wrapper.png';

const DemoContainer = styled.div`
  margin:0;
  position:relative;
`;

export class Demo extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <DemoContainer>
        <img alt="wrapper" src={androidWrapper} width="337" height="580" /> 
        <iframe src="/" width="248" height="440" frameBorder="0"></iframe>
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
