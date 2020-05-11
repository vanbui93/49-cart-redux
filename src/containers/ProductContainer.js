import React, { Component } from 'react';
import { connect } from 'react-redux';
import Products from '../components/Products';
import ProductItem from '../components/ProductItem';

class ProductContainer extends Component {
  render() {
    var { products } = this.props
    return (
      <Products>
        {this.showProduct(products)}
      </Products>
    )
  }

  showProduct = (products) => {
    var result = null;
    if (products.length > 0) {
      result = products.map((product, index) => {
        return <ProductItem key={index} product={product} />
      });
    }
    return result;
  }
}


const mapStateToProps = (state, props) => {
  return {
    products: state.products  //chính => reducer/index
  }
}

export default connect(mapStateToProps, null)(ProductContainer); 
