import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './index.css';

import Navbar from './components/navigationcontent/Navbar'
import Homepage from './components/Homepage'
import Footer from './components/footercontent/Footer'

const App = () => {
  return (
    <div className="flex flex-col flex-auto bg-backgroundLight dark:bg-backgroundDark">
        <Navbar />
        <Homepage />
        <Footer />
    </div>
  )
}

export default App