import React, { Component } from 'react'
import Product from './Product'
import { connect } from 'react-redux';

class Products extends Component {
  render() {
    var {products} = this.props
    return (
      <section className="section">
        <h1 className="section-heading">Danh Sách Sản Phẩm</h1>
        <div className="row">
          {this.showProduct(products)}
        </div>
      </section>
    )
  }
  showProduct = (products) => {
    var result = null;
    if(products.length > 0) {
      result = products.map((product, index) => {
        return <Product key = {index} product={product}/>
      });
    }
    return result;
  }
}

const mapStateToProps = (state, props) => {
  return {
    products: state.products  //chính => reducer/index
  }
}

export default connect(mapStateToProps, null)(Products)
