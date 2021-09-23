import React from 'react';

const Header = () => {
    let publicUrl = process.env.PUBLIC_URL+'/'
    return (
        <div className="navbar-body" style={{zIndex:"5",position:"sticky"}}>
            <img src={publicUrl+ 'assets/bankImage/axisLogo.png' } />
        </div>
    );
};

export default Header;