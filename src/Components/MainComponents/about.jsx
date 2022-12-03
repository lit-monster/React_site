import React from 'react';
import styled from 'styled-components';
import {TITLE} from './ProductComponent/products';

class About extends React.Component {
  render() {
    return(
      <React.StrictMode>
        <Wrapper>
          <TITLE>About</TITLE>
          <p>テキストテキストテキストテキストテキストテキストテキストテキストテキスト テキストテキストテキストテキストテキストテキストテキストテキストテキスト テキストテキストテキストテキストテキストテキストテキストテキストテキスト テキストテキストテキストテキストテキストテキストテキストテキストテキスト テキストテキストテキストテキストテキストテキストテキストテキストテキスト</p>
          <p>テキストテキストテキストテキストテキストテキストテキストテキストテキスト テキストテキストテキストテキストテキストテキストテキストテキストテキスト テキストテキストテキストテキストテキストテキストテキストテキストテキスト テキストテキストテキストテキストテキストテキストテキストテキストテキスト テキストテキストテキストテキストテキストテキストテキストテキストテキスト</p>
        </Wrapper>
      </React.StrictMode>
    );
  }
}

const Wrapper = styled.div`
  width: 600px;
  p {
    font-size: 14px;
    color: #333;
    line-height: 28px;
    margin-bottom: 40px;
  }
`;

export default About;
