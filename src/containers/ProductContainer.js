import React, { Component } from 'react';
import { connect } from 'react-redux';
import Products from '../components/Products';
import ProductItem from '../components/ProductItem';
import PropTypes from 'prop-types';
import {actAddToCart} from './../actions/index'


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
    var {onAddToCart} = this.props;
    if (products.length > 0) {
      result = products.map((product, index) => {
        return <ProductItem 
          key={index} 
          product={product} 
          onAddToCart = {onAddToCart}
        />
      });
    }
    return result;
  }
}

//arrayOf: product phải nhận vào 1 array
//isRequired : product bắt buộc phải có
//PropTypes.shape : kiểm tra từng object trong array
ProductContainer.propTypes = {
  products : PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      inventory: PropTypes.number.isRequired,
      rating: PropTypes.number.isRequired
    })
  ).isRequired
}

const mapStateToProps = (state, props) => {
  return {
    products: state.products  //chính => reducer/index
  }
}

const mapDispatchToProps = (dispatch,props) => {
  return {
    onAddToCart: (product) => {
      dispatch(actAddToCart(product,1))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductContainer); 