import React from 'react';
import styled from 'styled-components';
import Product from './product';
import {PRODUCTS} from './productsData';

class Products extends React.Component {
  render() {
    return(
      <React.StrictMode>
        <TITLE>Products</TITLE>
        <LISTS>
          {PRODUCTS.map((product)=>{
            return <Product id={product.id} image={`${process.env.PUBLIC_URL}/images/${product.image}`} name={product.title} price={product.price} />
          })}
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

const TITLE = styled.h1`
  font-size: 14px;
  font-weight: normal;
  margin-bottom: 30px;
`;

export default Products;
export {TITLE};

