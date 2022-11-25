import React from 'react';
import styled from 'styled-components';

const StyledHello = styled.h1`
    color: red;
  `;

class Header extends React.Component {
  render() {
    return(
      <header>
        <StyledHello>header</StyledHello>
      </header>
    );
  }
}

export default Header;
