import React from 'react';
import './HeaderMain.css'
import Frame from '../../../../images/logos/Frame.png'
const HeaderMain = () => {
    return (
        <main style={{textAlign: 'left',height: '684px'}} className="row d-flex align-items-center">
          <div className="col-md-4 offset-md-1">
            <h1 className="header-home font-weight-bold mb-4">Lets Grow Your <br></br> Brand to the <br></br>Next Level </h1>
            <p className="mb-4"> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero amet ducimus, omnis similique dolorum officiis. </p>
            <button className="hire-btn">Hire Us</button>
          </div>
          <div className="col-md-6">
            <img className="img-fluid frame" src={Frame} alt="frame" />
          </div>
        </main>
    );
};

export default HeaderMain;