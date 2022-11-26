import React from 'react';
import Products from './MainComponents/products';

class Main extends React.Component {
  render() {
    return(
      <React.StrictMode>
        <div>
          <Products />
        </div>
      </React.StrictMode>
    );
  }
}

export default Main;
