import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Navbar from './global-components/navbar-v2';
import Sidebar from './blog-components/sidebar';
import Pagination from './blog-components/pagination';
import FooterV2 from './global-components/footer-v2';
import PageHeader from './global-components/page-header';

class Blog_Grid extends Component {

    render() {

        let propsData = this.props.data
        let blogs = propsData.blogs
        let headerPageTitle = propsData.pagetitle.blogtitle

    return <div>
        <Navbar />
        <PageHeader headertitle={headerPageTitle} />
        <div className="blog-page-area pd-top-120">
            <div className="container">
                <div className="row custom-gutters-60">

                    <div className="col-lg-8">
                        <div className="row">

                            { blogs.map( ( bloginfo, i ) => {

                            return (
                                <div key={i} className="col-lg-6">
                                <div className="single-blog-content style-two">
                                    <div className="thumb">
                                        <img src={process.env.PUBLIC_URL+bloginfo.image} alt="blog" />
                                    </div>
                                    <div className="single-blog-details riyaqas-nav">
                                        <ul className="post-meta">
                                            <li className="admin">{bloginfo.author}</li>
                                            <li>{bloginfo.date} /</li>
                                            <li><i className="ti-comments"></i>{bloginfo.comments}</li>
                                        </ul>
                                        <h5><Link to={ bloginfo.url }>{bloginfo.title}</Link></h5>
                                        <p>{bloginfo.content}</p>
                                        <Link to={ bloginfo.url }>Read More <span><i className="la la-long-arrow-right"></i></span></Link>
                                    </div>
                                </div>
                                </div>
                                )

                            } ) }

                            <div className="col-12">
                            <Pagination />
                            </div>

                        </div>
                    </div>
                    <Sidebar />
                </div>
            </div>
        </div>
        <FooterV2 />
    </div>
    }
}

export default Blog_Grid