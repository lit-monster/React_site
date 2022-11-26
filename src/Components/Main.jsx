import React from 'react';
import Products from './MainComponents/products';
import styled from 'styled-components';

class Main extends React.Component {
  render() {
    return(
      <React.StrictMode>
        <Wrapper>
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

export default Main;
