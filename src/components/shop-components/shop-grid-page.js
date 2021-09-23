import React, { Component } from 'react';
import sectiondata from '../../data/product.json';
import { Link } from 'react-router-dom';
import ProductSidebar from '../section-components/product-sidebar';


class ShopPage extends Component {


  componentDidMount() {

    const $ = window.$;
    
     if ($('.product-select').length){
            $('.product-select').niceSelect();
        }
  }

    render() {
        let publicUrl = process.env.PUBLIC_URL+'/'
        let imgattr = 'image'
        let data = sectiondata.shop
        let customclass = this.props.customclass ? this.props.customclass : ''

    return <div>
            <div className="shop-page-area pd-top-120">
              <div className="container">
                <div className="row custom-gutters-60">
                  <div className="col-lg-8">
                    <div className="row justify-content-center">
                      <div className="col-sm-6">
                        <div className="woocommerce-result-count">Showing 1–12 of 25 results</div>
                      </div>
                      <div className="col-sm-6 mg-bottom-30">
                        <select className="select woocommerce-sorting-select float-sm-right">
                          <option value={1}>Default sorting</option>
                          <option value={2}>Sort by latest</option>
                          <option value={3}>Sort by rating</option>
                        </select>
                      </div>
                      { data.items.map( ( item, i )=>
                        <div key={ i } className="col-lg-4 col-sm-6">
                            <div className="single-shop">
                              <div className="thumb">
                               <a className={"product-badge btn-blue "+item.sticker  } href="#">New</a>
                                <img src={ publicUrl+item.image } alt={ imgattr } />
                                <div className="cart-btn">
                                  <div className="cart-btn-wrap">
                                    <Link className="btn btn-red" to="/shop-details" >Add to card <i className="fa fa-shopping-cart" /></Link>
                                  </div>
                                </div>
                              </div>
                              <div className="content">
                                <div className="rating">
                                  <i className="fa fa-star" />
                                  <i className="fa fa-star" />
                                  <i className="fa fa-star" />
                                  <i className="fa fa-star" />
                                  <i className="fa fa-star" />
                                </div>
                                <Link to="/shop-details">{ item.name }</Link>
                                <div className="price">
                                   <span>{ item.newerprice }</span><del>{ item.olderprice }</del>
                                </div>
                              </div>
                            </div>
                        </div>
                       ) }
                     <div className="col-12">
                      <div className="riyaqas-pagination text-center margin-top-60">
                        <ul>
                          <li><span className="prev page-numbers" href="#"><i className="ti-angle-left" /></span></li>
                          <li><span className="page-numbers">1</span></li>
                          <li><span className="page-numbers current">2</span></li>
                          <li><span className="page-numbers" href="#">3</span></li>
                          <li><span className="next page-numbers" href="#"><i className="ti-angle-right" /></span></li>
                        </ul>                          
                      </div>
                    </div>


                    </div>
                  </div>
                   <ProductSidebar />
                </div>
              </div>
            </div>
        </div>
    }
}

export default ShopPage