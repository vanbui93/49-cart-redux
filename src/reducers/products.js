var initialState = [
  {
    id: 1,
    name: 'Iphone 11 Plus',
    image: 'https://cdn.nguyenkimmall.com/images/detailed/610/10043537_IPHONE_11-PRO-MAX-64GB-XAM_01_isos-7r.jpg',
    description: 'Sản phẩm của apple',
    price: 500,
    inventory: 10,
    rating: 3
  },
  {
    id: 2,
    name: 'Samsung galaxy S7',
    image: 'https://cdn.tgdd.vn/Products/Images/42/197795/samsung-galaxy-s10-5g-600x600.jpg',
    description: 'Sản phẩm của Samsung',
    price: 550,
    inventory: 15,
    rating:5
  },
  {
    id: 3,
    name: 'Oppo F1s',
    image: 'https://cdn.tgdd.vn/Products/Images/42/202703/oppo-f11-pro-128gb-400x460.png',
    description: 'Sản phẩm của oppo',
    price: 400,
    inventory: 5,
    rating: 4
  }
]

const products = (state = initialState, action) => {
  switch (action.type) {
    default:
      return [...state];
  }
}

export default products;