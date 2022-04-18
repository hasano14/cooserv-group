import React from 'react'
import './index.css';

import Navbar from './components/navigationcontent/Navbar'
import Header from './components/Header-copy'
import Body from './components/Body'
import Footer from './components/Footer'

const App = () => {
  return (
    <div class="flex flex-col flex-auto bg-backgroundLight dark:bg-backgroundDark">
        <Navbar />
        <Header />
        <Body />
        <Footer />
    </div>
  )
}

export default App