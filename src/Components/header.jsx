import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import logo from './Images/logo.svg';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isMaskOpen : false
    }
  }

  handleMask() {
    if (this.state.isMaskOpen) {
      this.setState({isMaskOpen: false});
    } else {
      this.setState({isMaskOpen: true});
    }
  }

  render() {
    let MASK;
    if (this.state.isMaskOpen) {
      MASK = (
        <Mask onClick={()=>{this.handleMask()}}>
          <ul id="menu">
            <li><Link to={`/`}>PRODUCTS</Link></li>
            <li><Link to={`/about`}>ABOUT</Link></li>
            <li><Link to={`/company`}>COMPANY</Link></li>
            <li><a href="mailto:shuto.1011@icloud.com">CONTACT</a></li>
          </ul>
        </Mask>
      );
    }
    return(
      <React.StrictMode>
        <Wrapper>
            <Link to={`/`} style={{textDecoration: 'none'}}>
              <Logo src={logo} alt="Furniture Design" />
            </Link>
            <Toggle onClick={()=>{
              this.handleMask();
            }}>
              <span id="top-bar" style={{backgroundColor: this.state.isMaskOpen ? '#fff' : '#242424'}}></span>
              <span id="bottom-bar" style={{backgroundColor: this.state.isMaskOpen ? '#fff' : '#242424'}}></span>
            </Toggle>
            {MASK}
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

const Logo = styled.img`
  width: 180px;
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
    background-color: #fff;
  }
  #bottom-bar{
    width: 100%;
    height:2px;
    position: absolute;
    top: 20px;
    transition: all 0.5s;
    background-color: #fff;
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
