import React from 'react';
import Mesage from './components/Mesage';
import Cart from './components/Cart';
import Header from './components/Header';
import Product from './components/Product';
import Footer from './components/Footer';

class App extends React.Component {
  render() {
    return (
      <div className="App hidden-sn animated deep-purple-skin">
        <div>
          <Header />
          <main id="mainContainer">
            <div className="container">
              <Product />
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
