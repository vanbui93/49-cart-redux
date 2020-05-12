import * as types from './../constants/ActionsType';
var data = JSON.parse(localStorage.getItem('CART'));

var initialState = [
  {
    product: {
      id: 1,
      name: 'Iphone 11 Plus',
      image: 'https://cdn.nguyenkimmall.com/images/detailed/610/10043537_IPHONE_11-PRO-MAX-64GB-XAM_01_isos-7r.jpg',
      description: 'Sản phẩm của apple',
      price: 500,
      inventory: 10,
      rating: 3
    },
    quantily: 5
  },
  {
    product: {
      id: 3,
      name: 'Oppo F1s',
      image: 'https://cdn.tgdd.vn/Products/Images/42/202703/oppo-f11-pro-128gb-400x460.png',
      description: 'Sản phẩm của oppo',
      price: 400,
      inventory: 5,
      rating: 4
    },
    quantily: 3
  }
];

const cart = (state = initialState, action) => {
  switch (action.type) {
    case types.ADD_TO_CART:
      console.log(action);
      return [...state];
    default:
      return [...state];
  }
}

export default cart;