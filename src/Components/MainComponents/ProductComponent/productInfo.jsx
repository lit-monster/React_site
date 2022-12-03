import React from 'react';
import styled from 'styled-components';
import {PRODUCTS} from './productsData';

class ProductInfo extends React.Component {
  render() {
    const {params} = this.props.match;
    const id = parseInt(params.id, 10);
    return(
      <React.StrictMode>
        <TITLE>{PRODUCTS[id].title}</TITLE>
        <Wrapper>
          <IMG src={`${process.env.PUBLIC_URL}/images/${PRODUCTS[id].image}`} alt="" />
          <CONTENT>
            <p className="text">{PRODUCTS[id].text1}</p>
            <p className="text">{PRODUCTS[id].text2}</p>
            <p className="price">{PRODUCTS[id].price}</p>
            <dl>
              <dt>SIZE : </dt>
              <dd>{PRODUCTS[id].size}</dd>
              <dt>COLOR : </dt>
              <dd>{PRODUCTS[id].color}</dd>
              <dt>MATERIAL : </dt>
              <dd>{PRODUCTS[id].material}</dd>
            </dl>
          </CONTENT>
        </Wrapper>        
      </React.StrictMode>
    );
  }
}

const Wrapper = styled.div`
  display: flex;
`;

const TITLE = styled.h1`
  font-size: 14px;
  font-weight: normal;
  margin-bottom: 30px;
`;

const IMG = styled.img`
  width: 400px;
  height: 400px;
`;

const CONTENT = styled.div`
  width: 336px;
  margin-left: 60px;
  font-size: 14px;
  color: #333;
  opacity: 0.8;
  p {
    display: inline_block;
    margin-bottom: 30px;
  }
  dl {
    display: flex;
    flex-wrap: wrap;
    font-size: 14px;
    margin-bottom: 5px;
    dt {
      width: 40%;
    }
    dd {
      width: 60%;
    }
  }
`;

export default ProductInfo;
