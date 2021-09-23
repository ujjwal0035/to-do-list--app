import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import widgetdata from '../../data/widgetdata.json';

class Sidebar extends Component {
  render() {
   let imgattr = 'image'
   let publicUrl = process.env.PUBLIC_URL+'/'

    return (
          <div className="col-lg-4">
           <aside className="sidebar-area">
             <div className="widget widget_search style-two">
               <form className="search-form">
                 <div className="form-group">
                   <input className="btn-radius" type="text" placeholder="Search" />
                 </div>
                 <button className="submit-btn" type="submit"><i className="fa fa-search" /></button>
               </form>
             </div>
             <div className="widget widget-product-sorting">
               <h2 className="widget-title">Filter by price</h2>
               <div className="slider-product-sorting" />
               <div className="product-range-detail">
                 <label htmlFor="amount">Price:</label>
                 <input type="text" id="amount" readOnly />
                 <button className="float-right">Filter</button>
               </div>
             </div>
             <div className="widget widget-recent-post">
               <h2 className="widget-title">{widgetdata.latestposts.title}</h2>
                  <ul>
                     {widgetdata.latestposts.listitems.map( ( value, index ) => {
                        return <li key={index}>
                        <div className="media  riyaqas-nav">
                           <img src={publicUrl+value.image} alt="widget"/>
                           <div className="media-body">
                                 <h6 className="title riyaqas-nav"><Link to={ value.url }>{value.title}</Link></h6>
                                 <span className="post-date">{value.date}</span>
                           </div>
                        </div>
                     </li>

                     } )}
                     
                  </ul>
             </div>
             <div className="widget widget_categories product_category">
               <h2 className="widget-title">Product categories</h2>
               <ul className=" riyaqas-nav">
                  {widgetdata.categorywidget.listitems.map( ( value, index ) => {
                        return <li key={index}><Link  to={ value.url }>{value.item}</Link></li>
                     } )}
               </ul>
             </div>
             <div className="widget widget_tag_cloud">
               <h2 className="widget-title">{widgetdata.tagscloud.title}</h2>
               <div className="tagcloud  riyaqas-nav">
                {widgetdata.tagscloud.listitems.map( ( value, index ) => {
                        return <Link key={index} to={ value.url }>{value.title}</Link>
               } )}
               </div>
             </div>
           </aside>
         </div>


    );
  }
}

export default Sidebar;
