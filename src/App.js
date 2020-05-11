import React from 'react';
import Mesage from './components/Mesage';
import Cart from './components/Cart';
import Header from './components/Header';
import Products from './components/Products';
import Footer from './components/Footer';

class App extends React.Component {
  render() {
    return (
      <div className="App hidden-sn animated deep-purple-skin">
        <div>
          <Header />
          <main id="mainContainer">
            <div className="container">
              <Products />
              <Mesage />
              <Cart />
            </div>
          </main>
          <Footer />
        </div>
      </div>
    );
  }

}
export default App;
