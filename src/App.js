import React from 'react';
import Mesage from './components/Mesage';
import Header from './components/Header';
import Footer from './components/Footer';
import ProductContainer from './containers/ProductContainer';
import CartContainer from './containers/CartContainer';

class App extends React.Component {
  render() {
    return (
      <div className="App hidden-sn animated deep-purple-skin">
        <div>
          <Header />
          <main id="mainContainer">
            <div className="container">
              <ProductContainer />
              <Mesage />
              <CartContainer />
            </div>
          </main>
          <Footer />
        </div>
      </div>
    );
  }

}
export default App;
