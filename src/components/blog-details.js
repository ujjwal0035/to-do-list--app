import React, { Component } from 'react';
import Navbar from './global-components/navbar';
import FooterV2 from './global-components/footer-v2';
import PageHeader from './global-components/page-header';
import Sidebar from './blog-components/sidebar';
import Shareicons from './blog-components/share-icon';
import Comments from './blog-components/comments';

class Blog_Details extends Component {

    render() {

    let imgattr = 'image'
    let publicUrl = process.env.PUBLIC_URL+'/'
    let propsData = this.props.data
    let blogsdata = propsData.singlepostdata
    let headerPageTitle = propsData.pagetitle.singleblogtitle

        return(
        <div>
        <Navbar />
        <PageHeader headertitle={headerPageTitle} />
        <div className="blog-details-page pd-top-120">
            <div className="container">
                <div className="row custom-gutters-60">
                    <div className="col-lg-8">
                        <div className="single-blog-content">
                            <div className="thumb">
                                <img src={publicUrl+blogsdata.image} alt={imgattr} />
                            </div>
                            <div className="single-blog-details">
                                <ul className="post-meta">
                                    <li className="admin">{blogsdata.author}</li>
                                    <li>{blogsdata.date} /</li>
                                    <li><i className="ti-comments"></i>{blogsdata.comments}</li>
                                </ul>
                                <h5>{blogsdata.title}</h5>
                                <p>Why I say old chap that is, spiffing jolly good a load of old tosh spend a penny tosser arse over tit, excuse my French owt to do with me up the kyver matie boy at public school. Cuppa argy-bargy young delinquent spend a penny James Bond skive off lurgy, tosser fanny around dropped a Why I say old chap that is, spiffing jolly good a load of old tosh spend a penny tosser arse over tit, excuse my French owt to do with me up the kyver matie boy at public school. Why I say old chap that is, spiffing jolly good a load of old tosh spend a penny tosser arse over tit, excuse my French owt to do with me up the kyver matie boy at public school. Cuppa argy-bargy young delinquent spend a penny James Bond skive off lurgy, tosser fanny around dropped a Why I say old chap that is, spiffing jolly good a load of old tosh spend a penny tosser arse over tit, excuse my French owt to do with me up the kyver matie boy at public school. spend a penny tosser arse over tit, excuse my French owt to do with me up the kyver matie boy at public school.</p>
                                <div className="row mb-4 mt-5 justify-content-center">
                                    <div className="col-lg-4 col-md-6">
                                        <img className="mb-2" src={publicUrl+'assets/img/blog/11.png'} alt={imgattr} />
                                        <p>Product Showcase Meating</p>
                                    </div>
                                    <div className="col-lg-4 col-md-6">
                                        <img className="mb-2" src={publicUrl+'assets/img/blog/12.png'} alt={imgattr} />
                                        <p>Product Showcase Meating</p>
                                    </div>
                                    <div className="col-lg-4 col-md-6">
                                        <img className="mb-2" src={publicUrl+'assets/img/blog/13.png'} alt={imgattr} />
                                        <p>Product Showcase Meating</p>
                                    </div>
                                </div>
                                <p>Why I say old chap that is, spiffing jolly good a load of old tosh spend a penny tosser arse over tit, excuse my French owt to do with me up the kyver matie boy at public school. Cuppa argy-bargy young delinquent spend a penny James Bond skive off lurgy, tosser fanny around dropped a Why I say old chap that is, spiffing jolly good a load of old tosh spend a penny tosser arse over tit, excuse my French owt to do with me up the kyver matie boy at public school. skive off lurgy, tosser fanny around dropped a Why I say old chap that is, spiffing jolly good a load of old tosh spend a penny tosser arse over tit, excuse my French owt to do with me up the kyver matie boy at public school.</p>
                                <blockquote className="blockquote rq-blockquote bg-dark-blue mt-5 mb-5">
                                    <p className="mb-0">Why I say old chap that is, spiffing jolly good a load of old tosh spend a penny tosser arse over tit, excuse my French owt to do with me up the kyver matie boy at public school. Cuppa argy-bargy young delinquent spend a penny James Bond skive off lurgy.</p>
                                </blockquote>
                                <p>Why I say old chap that is, spiffing jolly good a load of old tosh spend a penny tosser arse over tit, excuse my French owt to do with me up the kyver matie boy at public school. Cuppa argy-bargy young delinquent spend a penny James Bond skive off lurgy, tosser fanny around dropped a Why I say old chap that is, spiffing jolly good a load of old tosh spend a penny tosser arse over tit, excuse my French owt to do with me up the kyver matie boy at public school. skive off lurgy, tosser fanny around dropped a Why I say old chap that is, spiffing jolly good a load of old tosh spend a penny tosser arse over tit, excuse my French owt to do with me up the kyver matie boy at public school.</p>
                                <p>Why I say old chap that is, spiffing jolly good a load of old tosh spend a penny tosser arse over tit, excuse my French owt to do with me up the kyver matie boy at public school. Cuppa argy-bargy young delinquent spend a penny James Bond skive off lurgy, tosser fanny around dropped a Why I say old chap that is, spiffing jolly good a load of old tosh spend a penny tosser arse over tit, excuse my French owt to do with me up the kyver matie boy at public school.</p>
                            </div>
                        </div>
                        <div className="row post-share-area">
                            <div className="col-xl-6 mb-3 mb-xl-0">
                                <Shareicons />
                            </div>
                            <div className="col-xl-6">
                                <h2 className="mb-3 sb-inner-title d-sm-inline-block">Tag : </h2>
                                <div className="social-icon tagcloud d-sm-inline-block">
                                {propsData.tags.items.map( ( value, index ) => {
                                    return <a key={index} href={value.url}>{value.item}</a>
                                } )}
                                </div>
                            </div>
                        </div>
                        <Comments />
                    </div>
                    <Sidebar />
                </div>
            </div>
        </div>
        <FooterV2 />
        </div>
        )
    }

}

export default Blog_Details;