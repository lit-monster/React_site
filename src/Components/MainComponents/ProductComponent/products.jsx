import React from 'react';
import styled from 'styled-components';
import Product from './product';
import {PRODUCTS} from './productsData';

class Products extends React.Component {
  render() {
    return(
      <React.StrictMode>
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

export default Products;
