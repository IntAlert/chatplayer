/**
*
* Header
*
*/

import React from 'react';
import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

const HeaderWrapper = styled.div`
  background:blue;
  position:fixed;
  top:0;
  left:0;
  width:100%;
`;

class Header extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <HeaderWrapper>
        <h1>BorderBot2</h1>
        <FormattedMessage {...messages.header} />
      </HeaderWrapper>
    );
  }
}

Header.propTypes = {

};

export default Header;
