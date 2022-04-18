import React from 'react'
// import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './index.css';

import Navbar from './components/navigationcontent/Navbar'
import Body from './components/Body'
import Footer from './components/Footer'


const App = () => {
  return (
    <div className="flex flex-col flex-auto bg-backgroundLight dark:bg-backgroundDark">
        <Navbar />
        <Body />
        <Footer />
    </div>
  )
}

export default App