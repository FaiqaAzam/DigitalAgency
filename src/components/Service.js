import React from 'react';
import service1 from 'C:/Users/faiqa/OneDrive/Desktop/Projects/digitialagency/src/images/service1.png';
import service2 from 'C:/Users/faiqa/OneDrive/Desktop/Projects/digitialagency/src/images/service2.png';
import service3 from 'C:/Users/faiqa/OneDrive/Desktop/Projects/digitialagency/src/images/service3.png';

export default function Service(props) {
  return (
    <div className='container-fluid'>
      <h1 className='text-center what'>WHAT WE DO?</h1>
      <div className='container'>
        <div className='row'>
            <div className='col-md-4'>
                <img className='service text-center' src={service1} alt="service1" />
                <h3 className='text-center'>Growth Marketing</h3>
                <p className='text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit et autem numquam sit harum, sequi itaque laboriosam molestiae tempora nihil.</p>
            </div>
            <div className='col-md-4'>
                <img className='service' src={service2} alt="service2" />
                <h3 className='text-center'>Online Branding</h3>
                <p className='text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit et autem numquam sit harum, sequi itaque laboriosam molestiae tempora nihil.</p>
            </div>
            <div className='col-md-4'>
                <img className='service' src={service3} alt="service3" />
                <h3 className='text-center'>Animated Ads</h3>
                <p className='text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit et autem numquam sit harum, sequi itaque laboriosam molestiae tempora nihil.</p>
            </div>
        </div>
      </div>
      <a className='nav-link text-center view' href="/">View all Services</a>
    </div>
  )
}
