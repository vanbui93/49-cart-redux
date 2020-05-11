import React, { Component } from 'react'

export default class ProductItem extends Component {
  render() {
    var { product } = this.props;
    return (
      <div className="col-lg-4 col-md-6 mb-r">
        <div className="card text-center card-cascade narrower">
          <div className="view overlay hm-white-slight z-depth-1">
            <img src={product.image} className="img-fluid" alt={product.name} />
            <button>
              <div className="mask waves-light waves-effect waves-light"></div>
            </button>
          </div>
          <div className="card-body">
            <h4 className="card-title">
              <strong>
                <button>{product.name}</button>
              </strong>
            </h4>
            <ul className="rating">
              <li>
                {this.showRatings(product.rating)}
              </li>
            </ul>
            <p className="card-text">
              {product.description}
            </p>
            <div className="card-footer">
              <span className="left">{product.price}</span>
              <span className="right">
                <button className="btn-floating blue-gradient" data-toggle="tooltip" data-placement="top" title="" data-original-title="Add to Cart">
                  <i className="fa fa-shopping-cart"></i>
                </button>
              </span>
            </div>
          </div>
        </div>
      </div>
    )
  }
  showRatings = (rating) => {
    var result = [];
    for(var i=1; i<=rating ; i ++) {
      result.push(<i key={i} className="fa fa-star"></i>)
    }
    for(var j=1; i<=(5-rating); j++){
      result.push(<i  key={j} clasName="fa fa-star-o"></i>) 
    }
    return result;
  }
}
