import React from 'react';
import styled from 'styled-components';
import logo from './Images/logo.svg'

class Header extends React.Component {
  render() {
    return(
      <React.StrictMode>
        <Wrapper>
          <h1>
            <a href="product.html">
              <img src={logo} alt="Furniture Design" />
            </a>
          </h1>
          <Toggle>
            <span id="top-bar"></span>
            <span id="bottom-bar"></span>
          </Toggle>
          <Mask>
            <ul id="menu" class="SlideOut">
              <li><a href="https://google.com">PRODUCTS</a></li>
              <li><a href="https://google.com">ABOUT</a></li>
              <li><a href="https://google.com">COMPANY</a></li>
              <li><a href="mailto:shuto.1011@icloud.com">CONTACT</a></li>
            </ul>
          </Mask>
        </Wrapper>
      </React.StrictMode>
    );
  }
}

const Wrapper = styled.header`
    height: 80px;
    width: 100%;
    position: fixed;
    top: 0;
    z-index: 5;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #fff;
    text-decoration: none;
    padding:0 80px;
  }
`;

const Toggle = styled.div`
  width: 30px;
  height: 30px;
  position: relative;
  z-index: 30;
  #top-bar{
    width: 100%;
    height:2px;
    position: absolute;
    top: 10px;
    transition: all 0.5s;
    background-color: #242424;
  }
  #bottom-bar{
    width: 100%;
    height:2px;
    position: absolute;
    top: 20px;
    transition: all 0.5s;
    background-color: #242424;
  }
`;

const Mask = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 20;
  background-color: #000;
  opacity: .8;
  display: none;
  ul {
    position: absolute;
    top: 30px;
    left: 50px;
    z-index: 30;
    li {
      a {
        text-decoration: none;
        color: #fff;
        margin-top: 50px;
        font-size: 14px;
        line-height: 50px;
      }
    }
  }
`;

export default Header;
