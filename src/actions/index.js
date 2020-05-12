import * as types from './../constants/ActionsType';


export const actAddToCart = (product,quantily) => {
  return {
    type: types.ADD_TO_CART,
    product,
    quantily
  }
}