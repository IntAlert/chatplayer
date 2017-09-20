/**
*
* Print
*
*/

import React from 'react';
import styled from 'styled-components';

import './styles.css';

const ImageContainer = styled.div`
  text-align:center;
`;
const PrintLink = styled.a`
  display:block;
  text-align:center;
  background:#5cbfdc;
  color:#fff;
  text-decoration:none;
  border-radius:5px;
  margin:1em;
  padding:1em;
  &:hover {
    cursor:pointer;
    background:#085FFF;
  }
`;


const print = () => {
  window.print();
  setTimeout(() => {
    window.location.href = '/';
  }, 100);
};

function Print() {

  return (
    <div>
      <div className="no-print">
        <ImageContainer>
          <img src="/images/cookie-dough-detail.png" alt="Free Icecream" />
          <br />
          <h1>One free ice cream topping</h1>
        </ImageContainer>
        

        <ImageContainer>
          <img src="/images/barcode.png" alt="barcode" />
        </ImageContainer>

        <PrintLink onClick={print}>
          Print
        </PrintLink>
      </div>

      <div className="token">
        <div className="logo">
          <img src="/images/logo.svg" alt="logo" />
        </div>
        <p>
          Congratulations!! You have beaten our Tomato Trader Challenge. Head over to the Ben & Jerry’s stall for a small peaceful reward with your ice cream and hopefully now you’ll find it easier to negotiate the next challenge you face, like the strong women in the Democratic Republic of Congo
        </p>
        <ImageContainer>
          <img src="/images/barcode.png" alt="barcode" />
        </ImageContainer>
      </div>

    </div>
  );
}

Print.propTypes = {

};

export default Print;
