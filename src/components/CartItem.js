import React, { Component } from 'react';
import * as Message from './../constants/Message';

export default class CartItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quantily: 1
    }
  }

  render() {
    var { item } = this.props;
    // console.log(item);
    var { quantily } = item.quantily > 0 ? item : this.state;  // kiểm tra quantily ? 0 thì lấy quantily, ngược lại lấy this.state default: 1
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
    if (quantily > 0) {
      this.setState({
        quantily: quantily
      });
      this.props.onUpdateProductInCart(product, quantily);
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
