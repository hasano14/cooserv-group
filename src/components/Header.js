import React from 'react'
import header from '../images/header.jpg'

const Header = () => {
  return (
    <div class="h-screen w-full">
      <div class="bg-fixed p-15 w-full h-full bg-cover header-image">
        <HeaderTitle />
      </div>  
    </div>
    
  )
}

const HeaderTitle = () => {
  return(
    <span class="items-center title-font dark:text-primary text-white flex flex-col text-5xl md:text-7xl lg:text-8xl pt-7 md:pt-10">Cooserv Group</span>
  )
}

export default Header