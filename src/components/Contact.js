import React from 'react';
import facebook from 'C:/Users/faiqa/OneDrive/Desktop/Projects/digitialagency/src/images/facebook.png';
import instagram from 'C:/Users/faiqa/OneDrive/Desktop/Projects/digitialagency/src/images/instagram.png';
import linkedin from 'C:/Users/faiqa/OneDrive/Desktop/Projects/digitialagency/src/images/linkedin.png';
import snapchat from 'C:/Users/faiqa/OneDrive/Desktop/Projects/digitialagency/src/images/snapchat.png';
import twitter from 'C:/Users/faiqa/OneDrive/Desktop/Projects/digitialagency/src/images/twitter.png';
import whatsapp from 'C:/Users/faiqa/OneDrive/Desktop/Projects/digitialagency/src/images/whatsapp.png';

export default function Contact() {
  return (
    <div className='container-fluid left'>
      <h1 className='text-center what our'>FIND US ON SOCIAL MEDIA</h1>
      <div className='container social-icon'>
        <a href="/"><img className='social' src={facebook} alt="facebook" /></a>
        <a href="/"><img className='social' src={instagram} alt="instagram" /></a>
        <a href="/"><img className='social' src={linkedin} alt="linkedin" /></a>
        <a href="/"><img className='social' src={snapchat} alt="snapchat" /></a>
        <a href="/"><img className='social' src={twitter} alt="twitter" /></a>
        <a href="/"><img className='social' src={whatsapp} alt="whatsapp" /></a>
      </div>
    </div>
  )
}
