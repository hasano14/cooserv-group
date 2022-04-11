import React from 'react'
import './index.css';

import Navbar from './components/Navbar'
import Header from './components/Header'
import Body from './components/Body'
import Footer from './components/Footer'

const App = () => {
  return (
    <div class="bg-backgroundColor">
        <Navbar />
        <Header />
        <Body />
        <Footer />
    </div>
  )
}

export default App