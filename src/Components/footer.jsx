import React from 'react';
import styled from 'styled-components';

class Footer extends React.Component {
  render() {
    return(
      <React.StrictMode>
        <Wrapper>
          <List>
              <li><a href="https://instagram.com">INSTAGRAM</a></li>
              <li><a href="https://twitter.com">TWITTER</a></li>                
              <li><a href="https://facebook.com">FACEBOOK</a></li>
          </List>
          <p>© Furniture Design</p>
        </Wrapper>
      </React.StrictMode>
    );
  }
}

const Wrapper = styled.footer`
  height: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 12px;
  padding:0 80px;
`;

const List = styled.ul`
  display: flex;
  li{
    a {
        text-decoration: none;
        padding-right: 20px;
        color: #333;
    }
  }
`;

export default Footer;
