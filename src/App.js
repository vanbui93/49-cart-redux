import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import ProductContainer from './containers/ProductContainer';
import CartContainer from './containers/CartContainer';
import MessageContainer from './containers/MessageContainer';

class App extends React.Component {
  render() {
    return (
      <div className="App hidden-sn animated deep-purple-skin">
        <div>
          <Header />
          <main id="mainContainer">
            <div className="container">
              <ProductContainer />
              <MessageContainer />
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
