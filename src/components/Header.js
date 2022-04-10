import React from 'react'
import header from '../images/header.jpg'

const Header = () => {
  return (
    <div>
        <span class="text-white flex flex-col text-2xl inset-x-10 align-middle w-full">Testing</span>
        <img src={header} alt="Header" class="opacity-20">
        </img>
    </div>
  )
}

export default Header