import React from 'react'
import './index.css';

import Navbar from './components/navigationcontent/Navbar'
import Body from './components/Body'
import Footer from './components/Footer'

const App = () => {
  return (
    <div class="flex flex-col flex-auto bg-backgroundLight dark:bg-backgroundDark">
        <Navbar />
        <Body />
        <Footer />
    </div>
  )
}

export default App