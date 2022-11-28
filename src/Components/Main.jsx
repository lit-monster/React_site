import React from 'react';
import Products from './MainComponents/ProductComponent/products';
import styled from 'styled-components';

class Main extends React.Component {
  render() {
    return(
      <React.StrictMode>
        <Wrapper>
          <TITLE>Products</TITLE>
          <Products />
        </Wrapper>
      </React.StrictMode>
    );
  }
}

const Wrapper = styled.div`
  margin: 80px 40px;
  padding: 0px 40px;
`;

const TITLE = styled.h1`
  font-size: 14px;
  font-weight: normal;
  margin-bottom: 30px;
`;
export default Main;
