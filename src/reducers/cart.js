import * as types from './../constants/ActionsType';
var data = JSON.parse(localStorage.getItem('CART'));

var initialState = [
  {
    product : {
      id: 1,
      name: 'Iphone 11 Plus',
      image: 'https://cdn.nguyenkimmall.com/images/detailed/610/10043537_IPHONE_11-PRO-MAX-64GB-XAM_01_isos-7r.jpg',
      description: 'Sản phẩm của apple',
      price: 500,
      inventory: 10,
      rating: 3
    },
    quantily: 5
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