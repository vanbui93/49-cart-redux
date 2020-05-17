import * as types from './../constants/ActionsType';


export const actAddToCart = (product,quantily) => {
  return {
    type: types.ADD_TO_CART,
    product,
    quantily
  }
}

export const actChangeMessage = (message) => {
  return {
    type: types.CHANGE_MESSAGE,
    message
  }
}

export const actDeleteProductIncart = (product) => {
  return {
    type: types.DELETE_PRODUCT_IN_CART,
    product
  }
}

export const actUpdateProductInCart = (product,quantily) => {
  return {
    type: types.UPDATE_PRODUCT_IN_CART,
    product,
    quantily
  }
}