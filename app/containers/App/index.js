/**
 *
 * App.react.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import styled from 'styled-components';

import Helmet from 'react-helmet';
import Header from 'components/Header';
import Footer from 'components/Footer';


const AppWrapper = styled.div`
  margin: 0 auto;
  display: flex;
  // min-height: 100%;
  flex-direction: column;
  transform: rotate(90deg);
  transform-origin:bottom left;
  
  position:absolute;
  top:-100vw;
  
  height:100vw;
  width:100vh;
`;

export default class App extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  static propTypes = {
    children: React.PropTypes.node,
  };

  render() {
    return (
      <AppWrapper>
        <Helmet
          titleTemplate="PeaceQuiz"
          defaultTitle="PeaceQuiz"
          meta={[
            { name: 'description', content: 'PeaceQuiz' },
          ]}
        />
        <Header />
        {React.Children.toArray(this.props.children)}
        {/*<Footer />*/}
      </AppWrapper>
    );
  }
}
