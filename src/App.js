import React from 'react'
// import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './index.css';

import Navbar from './components/Navbar'
import Header from './components/Header-copy'
import Body from './components/Body'
import Footer from './components/Footer'


const App = () => {
  return (
    <div class="flex flex-col flex-auto bg-backgroundLight dark:bg-backgroundDark transition-all">
        <Navbar />
        <Body />
        <Footer />
    </div>
  )
}

export default App