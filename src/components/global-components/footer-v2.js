import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import footerdata from '../../data/footerdata.json';

class Footer_V2 extends Component {

    componentDidMount() {
        let publicUrl = process.env.PUBLIC_URL+'/'

        const minscript = document.createElement("script");
        minscript.async = true;
        minscript.src = publicUrl + "assets/js/main.js";

        document.body.appendChild(minscript);
    }

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'
        let imgAlt = 'footer logo'

        return (
            <div>
                <footer className="footer-area footer-area-2">
                    {/* <div className="container"> */}
                        
                    <div className="copyright-inner" >
                        <div className="copyright-text" style={{color:"#861f41"}} >
                            Powered by Spocto solutions pvt ltd
                        </div>
                    </div>
                </footer>
                
            </div>
        )
    }
}


export default Footer_V2