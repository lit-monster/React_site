import React from 'react';
import Header from './header';
import Main from './Main';
import Footer from './footer';

class App extends React.Component {
  render() {
    return(
      <React.StrictMode>
        <div className="App">
          <Header />
          <Main />
          <Footer />
        </div>
      </React.StrictMode>
    );
  }
}

export default App;
