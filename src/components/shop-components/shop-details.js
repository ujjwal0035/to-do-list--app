import React, { Component } from 'react';
import sectiondata from '../../data/product.json';
import { Link } from 'react-router-dom';


class ShopDetails extends Component {

    render() {
        let publicUrl = process.env.PUBLIC_URL+'/'
        let imgattr = 'image'
        let data = sectiondata.related_product

    return <div>
            <div className="cart-popup" id="cart-popup">
              <div className="order-table table-responsive">
                <div className="checkout-title text-center mb-0"><h6>Your Order</h6></div>
                <table className="table">
                  <tbody>
                    <tr>
                      <td>
                        <div className="media single-cart-product">
                          <div className="media-left">
                            <img src={publicUrl+"assets/img/checkout/6.png"} alt="img" />
                          </div>
                          <div className="media-body">
                            <span>Smart watch</span>
                            <p>Red color</p>
                          </div>
                        </div>
                      </td>
                      <td className="cart-product-price text-center">$150.00</td>
                      <td className="text-center">
                        <div className="quantity-wrap">
                          <div className="quantity">
                            <input type="number" step={1} min={0} max={100} defaultValue={1} title="Qty" className="input-text qty text" />
                          </div>
                        </div>
                      </td>
                      <td className="cart-product-price text-center">$300.00</td>
                      <td className="text-center">
                        <div className="cart-close">
                          <span className="ti-close" />
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="media single-cart-product">
                          <div className="media-left">
                            <img src={publicUrl+"assets/img/checkout/6.png"} alt="img" />
                          </div>
                          <div className="media-body">
                            <span>Smart watch</span>
                            <p>Red color</p>
                          </div>
                        </div>
                      </td>
                      <td className="cart-product-price text-center">$150.00</td>
                      <td className="text-center">
                        <div className="quantity-wrap">
                          <div className="quantity">
                            <input type="number" step={1} min={0} max={100} defaultValue={1} title="Qty" className="input-text qty text" />
                          </div>
                        </div>
                      </td>
                      <td className="cart-product-price text-center">$300.00</td>
                      <td className="text-center">
                        <div className="cart-close">
                          <span className="ti-close" />
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <div className="total-shapping-area-wrap">
                  <div className="total-shapping-area">
                    <div className="charge">
                      <span>Shipping Charge:</span>
                      <span className="amount float-right">$1.00</span>
                    </div>
                    <div className="total-amount">
                      <span>Total:</span>
                      <span className="amount float-right">$451.00</span>
                    </div>
                  </div>
                </div>
                <div className="btn-wrapper text-center pd-top-170 riyaqas-nav">
                  <Link className="btn btn-green" to="/checkout" >Proceed to Checkout</Link>
                </div>
              </div>
            </div>

            <div>
              <div className="single-product-area pd-top-120">
                <div className="container">
                  <div className="row">
                    <div className="col-lg-7">
                      <div className="product-thumbnail-wrapper">
                        <div className="row custom-gutters-16">
                          <div className="col-3">
                            <div className="product-thumbnail-carousel">
                              <div className="single-thumbnail-item">
                                <img src={publicUrl+"assets/img/shop-details/01.png"} alt="shop" />
                              </div>
                              <div className="single-thumbnail-item">
                                <img src={publicUrl+"assets/img/shop-details/02.png"} alt="shop" />
                              </div>
                              <div className="single-thumbnail-item">
                                <img src={publicUrl+"assets/img/shop-details/03.png" }alt="shop" />
                              </div>
                            </div>
                          </div>
                          <div className="col-9">
                            <div className="single-thumbnail-slider">
                              <div className="slider-item">
                                <img src={publicUrl+"assets/img/shop-details/1.png"} alt="shop" />
                              </div>
                              <div className="slider-item">
                                <img src={publicUrl+"assets/img/shop-details/2.png"} alt="shop" />
                              </div>
                              <div className="slider-item">
                                <img src={publicUrl+"assets/img/shop-details/3.png"} alt="shop" />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-5">
                      <div className="product-description">
                        <span className="customer-review"><i className="fa fa-star" />4.8 <span>(10 Customer review)</span></span>
                        <h4 className="title">Stylish Watch Red color</h4>
                        <div className="price">
                          <span>$160.00</span>
                          <del>$190.00</del>
                        </div>
                        <p className="content">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.</p>
                        <div className="quantity-wrap">
                          <div className="quantity float-left">
                            <input type="number" step={1} min={0} max={100} defaultValue={1} title="Qty" className="input-text qty text" />
                          </div>
                          <button className="btn btn-gray ml-xl-5 ml-sm-4 cart-btn" type="button" id="cart-btn">Add to cart <i className="fa fa-shopping-cart" /></button>
                        </div>
                        <span className="d-block check-box-area">
                          <input id="1checkbox" type="checkbox" />
                          <label htmlFor="1checkbox">I Agree with the terms and conditions</label>
                        </span>
                        <div className="row">
                          <div className="col-sm-6 col-7">
                            <button className="w-100 btn btn-gray" type="button">Buy it now</button>
                          </div>
                        </div>
                        <div className="category">
                          <span>Category: </span>
                          <a href="#">Watch</a>
                        </div>
                        <div className="tags">
                          <span>Tag: </span>
                          <a href="#">Watch,</a>
                          <a href="#">Smart Watch,</a>
                          <a href="#">Time</a>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="product-information">
                        <ul className="nav nav-tabs" id="myTab" role="tablist">
                          <li className="nav-item">
                            <a className="nav-link active" id="descr-tab" data-toggle="tab" href="#descr" role="tab" aria-controls="descr" aria-selected="true">Description</a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link" id="reviews-tab" data-toggle="tab" href="#reviews" role="tab" aria-controls="reviews" aria-selected="false">Reviews</a>
                          </li>
                        </ul>
                        <div className="tab-content" id="myTabContent">
                          <div className="tab-pane fade show active" id="descr" role="tabpanel" aria-labelledby="descr-tab">
                            <div className="row">
                              <div className="col-lg-11">
                                <div className="description-tab-content">
                                  <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.</p>
                                  <p className="mb-0">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="tab-pane fade" id="reviews" role="tabpanel" aria-labelledby="reviews-tab">
                            <div className="row">
                              <div className="col-lg-10">
                                <div className="review-area">
                                  <h6 className="review-title">Reviews (32)</h6>
                                  <div className="single-review">
                                    <div className="media">
                                      <img className="media-left" src={publicUrl+"assets/img/blog/comments/1.png"} alt="img" />
                                      <div className="media-body">
                                        <span>Jabel Ali</span>
                                        <p>CEO</p>
                                      </div>
                                    </div>
                                    <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
                                  </div>
                                </div>
                                <div className="review-area">
                                  <div className="single-review">
                                    <div className="media">
                                      <img className="media-left" src={publicUrl+"assets/img/blog/comments/1.png"} alt="img" />
                                      <div className="media-body">
                                        <span>Jabel Ali</span>
                                        <p>CEO</p>
                                      </div>
                                    </div>
                                    <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <h6 className="review-title">Your Reviews</h6>
                            <form className="riyaqas-form-wrap">
                              <div className="row custom-gutters-16">
                                <div className="col-md-6">
                                  <div className="single-input-wrap">
                                    <textarea className="single-input textarea" cols={20} defaultValue={""} />
                                    <label className="single-input-label">Review</label>
                                  </div>
                                </div>
                                <div className="col-md-6">
                                  <div className="single-input-wrap">
                                    <input type="text" className="single-input" />
                                    <label>Name</label>
                                  </div>
                                  <div className="single-input-wrap">
                                    <input type="text" className="single-input" />
                                    <label>E-mail</label>
                                  </div>
                                </div>
                                <div className="col-12 text-right">
                                  <a className="btn btn-green" href="#">Submit</a>
                                </div> 
                              </div>
                            </form>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="shop-page-area single-shop-related-product mg-top-105">
                <div className="container">
                  <div className="section-title">
                    <h2 className="title">Related Products</h2>
                  </div>
                  <div className="row custom-gutters-16">
                   { data.items.map( ( item, i )=>
                        <div key={ i } className="col-lg-3 col-sm-6">
                        <div className="single-shop">
                          <div className="thumb">
                             <a className={"product-badge btn-blue "+item.sticker  } href="#">New</a>
                            <img src={ publicUrl+item.image } alt={ imgattr } />
                            <div className="cart-btn">
                              <div className="cart-btn-wrap">
                                <Link className="btn btn-red" to="/shop" >Add to card <i className="fa fa-shopping-cart" /></Link>
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
                            <Link to="/shop" >{ item.name }</Link>
                            <div className="price">
                              <span>{ item.newerprice }</span><del>{ item.olderprice }</del>
                            </div>
                          </div>
                        </div>
                      </div>
                    ) }
                    
                
                  </div>
                </div>
              </div>
            </div>
        </div>
    }
}

export default ShopDetails