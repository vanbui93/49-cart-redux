import React, { Component } from 'react';

export default class CartItem extends Component {
  render() {
    var { item } = this.props;
    // console.log(item);
    return (
      <tr>
        <th scope="row">
          <img src={item.product.image}
            alt={item.product.name} className="img-fluid z-depth-0" />
        </th>
        <td>
          <h5>
            <strong>{item.product.name}</strong>
          </h5>
        </td>
        <td>{item.product.price}</td>
        <td className="center-on-small-only">
          <span className="qty">{item.quantily}</span>
          <div className="btn-group radio-group" data-toggle="buttons">
            <label className="btn btn-sm btn-primary btn-rounded waves-effect waves-light">
              <button>—</button>
            </label>
            <label className="btn btn-sm btn-primary btn-rounded waves-effect waves-light">
              <button>+</button>
            </label>
          </div>
        </td>
        <td>{this.showSubTotal(item.product.price, item.quantily)} $</td>
        <td>
          <button type="button" className="btn btn-sm btn-primary waves-effect waves-light" 
            data-toggle="tooltip" 
            data-placement="top" title="" 
            data-original-title="Remove item"
            onClick={()=> this.onDelete(item.product)}
          >
            X
          </button>
        </td>
      </tr>
    )
  }

  onDelete = (product) => {
    console.log(product);
    this.props.onDeleteProductInCart(product)
    
  }
  showSubTotal = (price,quantily) => {
    return price*quantily;
  }
}
