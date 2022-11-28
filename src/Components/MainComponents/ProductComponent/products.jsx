import React from 'react';
import styled from 'styled-components';
import Product from './product';


class Products extends React.Component {
  render() {
    return(
      <React.StrictMode>
        <LISTS>
          <Product
            name="プロダクトタイトル"
            price="¥99,999 +tax"
          />
          <Product
            name="プロダクトタイトル"
            price="¥99,999 +tax"
          />
          <Product
            name="プロダクトタイトル"
            price="¥99,999 +tax"
          />
          <Product
            name="プロダクトタイトル"
            price="¥99,999 +tax"
          />
          <Product
            name="プロダクトタイトル"
            price="¥99,999 +tax"
          />
          <Product
            name="プロダクトタイトル"
            price="¥99,999 +tax"
          />
          <Product
            name="プロダクトタイトル"
            price="¥99,999 +tax"
          />
          <Product
            name="プロダクトタイトル"
            price="¥99,999 +tax"
          />
        </LISTS>
      </React.StrictMode>
    );
  }
}



const LISTS = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  text-align: left;
`;

export default Products;
