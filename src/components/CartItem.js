import React, { Component } from 'react';
import * as Message from './../constants/Message';

export default class CartItem extends Component {

  render() {
    var { item } = this.props;
    // console.log(item);
    var { quantily } = item;  // kiểm tra quantily ? 0 thì lấy quantily, ngược lại lấy this.state default: 1
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
          <span className="qty">{quantily}</span>
          <div className="btn-group radio-group" data-toggle="buttons">
            <label
              className="btn btn-sm btn-primary btn-rounded waves-effect waves-light"
              onClick={() => this.onUpdateQuantily(item.product, item.quantily - 1)}
            >
              <button>—</button>
            </label>
            <label
              className="btn btn-sm btn-primary btn-rounded waves-effect waves-light"
              onClick={() => this.onUpdateQuantily(item.product, item.quantily + 1)}
            >
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
            onClick={() => this.onDelete(item.product)}
          >
            X
          </button>
        </td>
      </tr>
    )
  }

  onUpdateQuantily = (product, quantily) => {
    //sau khi người dùng action thì cập nhật state,
    if (quantily > 0) {
      this.props.onUpdateProductInCart(product, quantily); //truyền product và new quantily lên store
      this.props.onChangeMessage(Message.MSG_UPDATE_CART_SUCCESS);
    }
  }

  onDelete = (product) => {
    console.log(product);
    this.props.onDeleteProductInCart(product)
    this.props.onChangeMessage(Message.MSG_DETELE_PRODUCT_IN_CART_SUCCESS);

  }
  showSubTotal = (price, quantily) => {
    return price * quantily;
  }
}
