import React from 'react';
import Products from './MainComponents/ProductComponent/products';
import Product from './MainComponents/ProductComponent/productInfo';
import About from './MainComponents/about';
import Company from './MainComponents/company';
import styled from 'styled-components';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';

class Main extends React.Component {
  render() {
    return(
      <React.StrictMode>
        <Wrapper>
          <TITLE>Products</TITLE>
          <BrowserRouter>
            <Switch>
              <Route exact path='/' component={Products} />
              <Route exact path='/product/:id' component={Product} />
              <Route exact path='/about' component={About} />
              <Route exact path='/company' component={Company} />
            </Switch>
            <Link to='/'>Back To Top</Link>
          </BrowserRouter>
         
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
