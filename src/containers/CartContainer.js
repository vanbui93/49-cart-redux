import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Cart from './../components/Cart';


class CartContainer extends Component {
  render() {
    var {cart} = this.props;
    console.log(cart);
    return (
      <Cart/>
    )
  }

}

//arrayOf: cart phải nhận vào 1 array
//isRequired : cart bắt buộc phải có
//PropTypes.shape : kiểm tra từng object trong array
CartContainer.propTypes = {
  cart : PropTypes.arrayOf(PropTypes.shape({
    product : PropTypes.shape({

    }).isRequired,
    quantily: PropTypes.number.isRequired
  })
  ).isRequired
}

const mapStateToProps = (state, ownProps) => {
  return {
    cart: state.cart
  }
}

export default connect(mapStateToProps, null)(CartContainer); 
