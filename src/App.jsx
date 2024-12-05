// import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import Service from './components/Service.jsx'
import LogoSection from './components/LogoSection.jsx'
import Stats from './components/Stats.jsx'


function App() {
  return (
    <div>
      <Navbar />
      <Hero/>
      <Service/>
      <LogoSection/>
      <Stats/>
    </div>
  );
}

export default App;