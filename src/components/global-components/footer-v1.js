import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import footerdata from '../../data/footerdata.json';

class Footer_v1 extends Component {

    componentDidMount() {
        let publicUrl = process.env.PUBLIC_URL+'/'

        const minscript = document.createElement("script");
        minscript.async = true;
        minscript.src = publicUrl + "assets/js/main.js";

        document.body.appendChild(minscript);
    }

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'
        let imgattr = "Footer logo"
        const inlineStyle = {
            backgroundImage: 'url('+publicUrl+footerdata.footerbg+')'
        }

        return (
            <div>
                <footer className="footer-area mg-top-120" style={inlineStyle}>
                    <div className="footer-top pd-top-120 padding-bottom-40">
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-xl-9 col-lg-11">
                                    <div className="footer-widget widget text-center">
                                        <div className="footer_top_widget">
                                            <a href="/" className="footer-logo"> 
                                                <img src={publicUrl+footerdata.footerlogo} alt={imgattr} />
                                            </a>
                                            <p>{footerdata.footertext}</p>
                                        </div>
                                    </div>
                                    <div className="footer-widget widget widget_nav_menu text-center">
                                        <ul className="riyaqas-nav">
                                        {footerdata.quicklink.links.map( ( item, i ) => 
                                            <li key={i} ><Link to={ item.url }>{item.title}</Link></li>
                                        )}
                                        </ul>
                                    </div>
                                    <div className="copyright-inner">
                                        <div className="row custom-gutters-16">
                                            <div className="col-lg-7">
                                                <div className="copyright-text" dangerouslySetInnerHTML={{__html: footerdata.copyrighttext}}></div>
                                            </div>
                                            <div className="col-lg-5">
                                                <ul className="social-icon text-right">
                                                {footerdata.socialicon.map( ( item, i ) => 
                                                    <li key={i}>
                                                        <a className="facebook" href={item.url} target="_blank" rel="noopener noreferrer"><i className={item.icon}></i></a>
                                                    </li>
                                                )}
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
                <div className="back-to-top">
                    <span className="back-top"><i className="fa fa-angle-up"></i></span>
                </div>
            </div>
        )
    }
}


export default Footer_v1