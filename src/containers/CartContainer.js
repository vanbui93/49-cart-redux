import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Cart from './../components/Cart';
import * as Message from './../constants/Message';
import CartItem from './../components/CartItem';
import CartResult from './../components/CartResult';
import { actDeleteProductIncart, actChangeMessage } from './../actions/index'


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
    var result = <tr><td>{Message.MSG_CART_EMPTY}</td></tr>
    if (cart.length > 0) { //cart lấy trên store
      result = cart.map((item, index) => {
        return (
          <CartItem
            key={index}
            item={item}
            index={index}
            onDeleteProductInCart={this.props.onDeleteProductInCart}
            onChangeMessage = {this.props.onChangeMessage}
          />
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

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onDeleteProductInCart: (product) => {
      dispatch(actDeleteProductIncart(product))
    },
    onChangeMessage: (message) => {
      dispatch(actChangeMessage(message));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CartContainer); 