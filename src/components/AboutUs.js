import React from 'react';
import network from 'C:/Users/faiqa/OneDrive/Desktop/Projects/digitialagency/src/images/network.png';
import PropTypes from 'prop-types'

export default function AboutUs(props) {
  return (
    <div className='container-fluid navbg'>
        <h1 className='text-center why'>{props.heading}</h1>
        <div className='container'>
            <div className='row'>
                <div className='col-md-5'>
                    <h3 className='diff'>{props.different}</h3>
                    <ul  className='mar'>
                        <li>Lorem ipsum dolor sit amet consectetur</li>
                        <li>Lorem ipsum dolor sit amet consectetur</li>
                        <li>Lorem ipsum dolor sit amet consectetur</li>
                        <li>Lorem ipsum dolor sit amet consectetur</li>
                        <li>Lorem ipsum dolor sit amet consectetur</li>
                        <li>Lorem ipsum dolor sit amet consectetur</li>
                        <li>Lorem ipsum dolor sit amet consectetur</li>
                        <li>Lorem ipsum dolor sit amet consectetur</li>
                        <li>Lorem ipsum dolor sit amet consectetur</li>
                    </ul>
                </div>
                <div className='col-md-7'>
                    <img className='network' src={network} alt="network" />
                </div>
            </div>
        </div>
    </div>
  )
}

AboutUs.propTypes = {
    heading: PropTypes.string,
    different: PropTypes.string,
}

AboutUs.defaultProps = {
    heading: 'WHY CHOOSE US?',
    different: 'Why we are Different?'
}