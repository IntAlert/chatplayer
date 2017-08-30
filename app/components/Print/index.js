/**
*
* Print
*
*/

import React from 'react';
import styled from 'styled-components';

const ImageContainer = styled.div`
  text-align:center;
`;
const PrintLink = styled.a`
  display:block;
  text-align:center;
  background:#087FFE;
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
      <ImageContainer>
        <img src="/images/cookie-dough-detail.png" alt="Free Icecream" />
        <br />
        One free ice cream
      </ImageContainer>
      

      <ImageContainer>
        <img src="/images/barcode.png" alt="barcode" />
      </ImageContainer>

      <PrintLink onClick={print}>
        Print
      </PrintLink>

    </div>
  );
}

Print.propTypes = {

};

export default Print;
