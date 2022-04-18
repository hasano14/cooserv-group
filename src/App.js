import React from 'react'
import './index.css';

import Navbar from './components/Homepage/navigationcontent/Navbar'
import Body from './components/Homepage/Homepage'
import Footer from './components/footercontent/Footer'

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