import * as Types from './../constants/ActionsType';
var data = JSON.parse(localStorage.getItem('CART'));

var oldState = data ? data :[];

const cart = (state = oldState, action) => {
  var { product, quantily } = action;
  var index = -1;
  switch (action.type) {
    case Types.ADD_TO_CART:
      console.log(action.product);
      index = findProductInCart(state, product); //state: là danh sách sản phẩm trong cart, product : là sản phẩm vừa bấm thêm ADD_TO_CART
      console.log(index);

      if (index !== -1) {
        state[index].quantily += quantily;
      } else {
        state.push({
          product,
          quantily
        })
      }
      localStorage.setItem('CART',JSON.stringify(state));
      return [...state];
    default:
      return [...state];
  }
}

var findProductInCart = (cart, product) => { //cart là oldState là 1 object
  // console.log(cart);  //cart là oldState
  // console.log(product); //product là action ADD_TO_CART
  var index = -1;
  if (cart.length > 0) {
    for (var i = 0; i < cart.length; i++) {
      if (cart[i].product.id === product.id) {
        index = i;
        break;
      }
    }
  }
  return index;
}

export default cart;