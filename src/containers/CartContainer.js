import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Cart from './../components/Cart';
import * as Message from './../constants/Message';
import CartItem from './../components/CartItem';
import CartResult from './../components/CartResult';


class CartContainer extends Component {
  render() {
    var { cart } = this.props;
    // console.log(cart);
    return (
      <Cart>
        {this.showCartItem(cart)}
        {this.showTotalAmount(cart)}
      </Cart>
    )
  }

  showCartItem = (cart) => {
    var result = Message.MSG_CART_EMPTY;
    if (cart.length > 0) { //cart lấy trên store
      result = cart.map((item, index) => {
        return (
          <CartItem key={index} item={item} index={index} />
        )
      })
    }
    return result;
  }
  showTotalAmount = (cart) => {
    var result = null;
    if (cart.length > 0) {
      result = <CartResult cart={cart} />
    }
    return result;
  }

}

//arrayOf: cart phải nhận vào 1 array
//isRequired : cart bắt buộc phải có
//PropTypes.shape : kiểm tra từng object trong array
CartContainer.propTypes = {
  cart: PropTypes.arrayOf(PropTypes.shape({
    product: PropTypes.shape({

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