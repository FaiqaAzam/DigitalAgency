import React from 'react';
import home from 'C:/Users/faiqa/OneDrive/Desktop/Projects/digitialagency/src/images/home.png';
import play from 'C:/Users/faiqa/OneDrive/Desktop/Projects/digitialagency/src/images/play.png';
import wave1 from 'C:/Users/faiqa/OneDrive/Desktop/Projects/digitialagency/src/images/wave1.png';

export default function Home() {
  return (
    <>
    <div className='container-fluid navbg'>
      <div className='row'>
        <div className='col-md-6 info'>
            <div className='container info'>
              <h1>DIGITAL AGENCY</h1>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus atque magnam hic placeat quis enim tenetur numquam perspiciatis, distinctio laudantium! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus atque magnam hic placeat quis enim tenetur numquam perspiciatis, distinctio laudantium!</p>
              <div className='container'>
              <div className='row'>
                <div className='col-md-4'>
                  <a href="/" className='nav-link'><img className='play' src={play} alt="play" /></a>
                </div>
                <div className='col-md-8'>
                  <a href="/" className='nav-link watch'>
                    <p className='tutor'>Watch Tutorials</p>
                  </a>
                </div>
              </div>
              </div>
            </div>
        </div>
        <div className='col-md-5'>
            <img className='homeimg' src={home} alt="home" />
        </div>
      </div>
      <img className='wave' src={wave1} alt="wave1" />
    </div>
    </>
  )
}
