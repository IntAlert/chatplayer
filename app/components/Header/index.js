/**
*
* Header
*
*/

import React from 'react';
import styled from 'styled-components';

// import { FormattedMessage } from 'react-intl';
import messages from './messages';

const HeaderWrapper = styled.div`
  position:fixed;
  background:#eee;
  z-index:999;
  top:0;
  left:0;
  width:100%;
  color:#333;
`;

const H1 = styled.h1`
  padding:1em;
  margin:0;
`

class Header extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <HeaderWrapper>
        <H1>Crossing the DRC/Rwanda border</H1>
      </HeaderWrapper>
    );
  }
}

Header.propTypes = {

};

export default Header;
