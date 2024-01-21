// import logo from './logo.svg';
import './App.css';
import Service from './components/Service';
import Home from './components/Home';
import NavBar from './components/NavBar';
import AboutUs from './components/AboutUs';
import Achievements from './components/Achievements';
import Testimonial from './components/Testimonial';
import Contact from './components/Contact';
import Footer from './components/Footer';
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { useState } from 'react';

function App() {

  // const[mode, setMode] = useState('white');

  // const changeMode = () =>{
  //   if(mode==='white'){
  //     setMode('#242222');
  //     document.body.style.backgroundColor='#242222';
  //     document.body.style.color="white";
  //   }
  //   else{
  //     setMode('white');
  //     document.body.style.backgroundColor='white';
  //     document.body.style.color="#242222";
  //   }
  // }

  return (
    <>
    <NavBar />
    <Home />
    <Service />
    <AboutUs heading="WHY CHOOSE US?" different="Why we're Different?" />
    <Achievements achieve="OUR ACHIEVEMENTS" team="Teams" client="Clients" projects="Projects" />
    <Testimonial />
    <Contact />
    <Footer contact="Contact" sub="Subscribe" />

    {/* <BrowserRouter>
      <NavBar />
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/service" element={<Service />} />
          <Route path="/about" element={<AboutUs heading="WHY CHOOSE US?" different="Why we're Different?" />} />
          <Route path="/achievements" element={<Achievements achieve="OUR ACHIEVEMENTS" team="Teams" client="Clients" projects="Projects" />} />
          <Route path="/testimonial" element={<Testimonial />} />
          <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer contact="Contact" sub="Subscribe" />
    </BrowserRouter> */}
    </>
  );
}

export default App;
