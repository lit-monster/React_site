import React from 'react';
import Header from './header';
import Footer from './footer';
import styled from 'styled-components';
import {BrowserRouter} from 'react-router-dom';
import Routing from '../Routing';

class App extends React.Component {
  render() {
    return(
      <BrowserRouter>
        <Header />
        <Main>
          <Routing></Routing>
        </Main>
        <Footer />
      </BrowserRouter>
    );
  }
}

const Main = styled.div`
  margin: 80px 40px;
  padding: 0px 40px;
`;

export default App;
