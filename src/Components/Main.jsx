import React from 'react';
import styled from 'styled-components';
import Routing from '../Routing';


class Main extends React.Component {
  render() {
    return(
      <React.StrictMode>
        <Wrapper>
          <Routing />
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
