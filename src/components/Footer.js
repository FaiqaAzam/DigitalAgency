import React from 'react';
import PropTypes from 'prop-types'
import demoLogo from 'C:/Users/faiqa/OneDrive/Desktop/Projects/digitialagency/src/images/demoLogo.png';
import wave2 from 'C:/Users/faiqa/OneDrive/Desktop/Projects/digitialagency/src/images/wave2.png';

export default function Footer(props) {
  return (
    <div className='container-fluid navbg'>
      <img className='wave2' src={wave2} alt="wave2" />
      <div className='container'>
        <div className='row'>
          <div className='col-md-4'>
            <img className='flogo' src={demoLogo} alt="logo" />
            <p className='text-center agency'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore sit corporis rem deleniti facilis iure illo nemo distinctio saepe qui temporibus aperiam, fuga earum officia dicta quos nobis ipsa commodi.</p>
          </div>

          <div className='col-md-4'>
            <h3 className='text-center contact'>{props.contact}</h3>
            <p><i className="fa-solid fa-envelope con"></i>digitialagency@gmail.com</p>
            <p><i className="fa-solid fa-phone con"></i>+92 300xxxxxxx</p>
            <p><i className="fa-solid fa-location-dot con"></i>719 Batala Colony, Faisalabad, Pakistan</p>
          </div>

          <div className='col-md-4'>
            <h3 className='text-center'>{props.sub}</h3>
            <input className='box' type="text" placeholder='Email:' />
            <a className='nav-link text-center sub' href="/">Subscribe</a>
          </div>
          <h5 className='text-center website'>WEBSITE DEVELOPED BY FAIQA AZAM</h5>
        </div>
      </div>
      <br />
    </div>
  )
}

Footer.propTypes = {
  contact: PropTypes.string,
  sub: PropTypes.string,
}

Footer.defaultProps = {
  contact: "Contact",
  sub: "Subscribe"
}