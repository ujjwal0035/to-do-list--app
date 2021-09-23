import React, { Component } from 'react';
import sectiondata from '../../data/sections.json';


class ShopDetails extends Component {

    render() {
        let publicUrl = process.env.PUBLIC_URL+'/'
        let imgattr = 'image'
        let data = sectiondata.about
        let customclass = this.props.customclass ? this.props.customclass : ''

    return <div>
            <div className="checkout-page-area pd-top-120">
              <div className="container">
                <div className="row">
                  <div className="col-lg-7">
                    <div className="checkout-form-wrap">
                      <div className="checkout-title">
                        <div className="row">
                          <div className="col-xl-5 col-lg-12 col-md-6">
                            <h6>Contact information</h6>
                          </div>  
                          <div className="col-xl-7 col-lg-12 col-md-6 text-xl-right text-lg-left text-md-right">
                            <span>Already have an account?</span>
                            <a id="signIn-btn" href="#">Sign in /</a>
                            <a id="signUp-btn" href="#">Sign Up</a>
                          </div>  
                        </div>
                      </div>
                      <div className="checkout-form">
                        <form className="riyaqas-form-wrap">
                          <div className="row custom-gutters-20">
                            <div className="col-md-12">
                              <div className="single-input-wrap">
                                <input type="text" className="single-input" />
                                <label>E-mail</label>
                              </div>
                            </div>
                            <div className="col-md-6">
                              <div className="single-input-wrap">
                                <input type="text" className="single-input" />
                                <label>First Name</label>
                              </div>
                            </div>
                            <div className="col-md-6">
                              <div className="single-input-wrap">
                                <input type="text" className="single-input" />
                                <label>Last Name</label>
                              </div>
                            </div>
                            <div className="col-md-12">
                              <div className="single-input-wrap">
                                <input type="text" className="single-input" />
                                <label>Address</label>
                              </div>
                            </div>
                            <div className="col-md-12">
                              <div className="single-input-wrap">
                                <input type="text" className="single-input" />
                                <label>City</label>
                              </div>
                            </div>
                            <div className="col-md-6">
                              <div className="single-input-wrap">
                                <select className="select single-select">
                                  <option value={1}>Country</option>
                                  <option value={2}>Canada</option>
                                  <option value={3}>Japan</option>
                                  <option value={3}>China</option>
                                </select>
                              </div>
                            </div>
                            <div className="col-md-6">
                              <div className="single-input-wrap">
                                <input type="text" className="single-input" />
                                <label>Postal code</label>
                              </div>
                            </div>
                            <div className="col-md-6">
                              <div className="single-input-wrap">
                                <input type="text" className="single-input" />
                                <label>Phone</label>
                              </div>
                            </div>
                            <div className="col-md-12 padding-top-50">
                              <div className="checkout-title">
                                <h6>Payment Methode</h6>
                              </div>
                              <div className="payment-method">
                                <ul>
                                  <li>
                                    <a href="#"><img src={publicUrl+"assets/img/checkout/1.png"} alt="img" /></a>
                                    <a href="#"><img src={publicUrl+"assets/img/checkout/2.png"} alt="img" /></a>
                                    <a href="#"><img src={publicUrl+"assets/img/checkout/3.png"} alt="img" /></a>
                                    <a href="#"><img src={publicUrl+"assets/img/checkout/4.png"} alt="img" /></a>
                                    <a href="#"><img src={publicUrl+"assets/img/checkout/5.png"} alt="img" /></a>
                                  </li>
                                  <li><a href="#">Cash On Delivery</a></li>
                                  <li><a href="#">Bank Account Payment</a></li>
                                </ul>
                              </div>
                            </div>
                            <div className="col-12 text-right">
                              <a className="btn btn-green" href="#">Place Order</a>
                            </div> 
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-5">
                    <div className="checkout-form-product">
                      <div className="order-table table-responsive">
                        <table className="table">
                          <tbody>
                            <tr>
                              <td>
                                <div className="media single-cart-product">
                                  <div className="media-left">
                                    <img src={publicUrl+"assets/img/checkout/7.png"} alt="img" />
                                  </div>
                                  <div className="media-body">
                                    <span>Dj Brand Headphone HD quality</span>
                                    <p>Model No: Dj2019</p>
                                  </div>
                                </div>
                              </td>
                              <td className="cart-product-price text-center">$150.00</td>
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
                              <span className="amount float-right">$151.00</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>    
                </div>
              </div>
            </div>
        </div>
    }
}

export default ShopDetails