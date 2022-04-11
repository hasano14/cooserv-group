import React from 'react'

const Header = () => {
  return (
    <div class="flex flex-col h-screen w-full">
      <div class="mix-blend-normal bg-fixed bg-center bg-cover items-center md:p-15 shadow-lg rounded-sm md:mx-5 lg:mx-10 max-h-screen header-image">
        <div class="mix-blend-normal border-2 rounded-md bg-primary/30 my-10 mx-5 pb-7 md:my-10 md:mx-32 lg:my-12 lg:mx-32 xl:mx-80 2xl:mx-96 transition-all">
          <HeaderTitle words="Cooserv Group"/>
          <p class="items-center flex flex-col text-md text-justify m-2 md:px-20 lg:px-28 text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          <div class="flex flex-col md:flex-row items-center place-content-center">
            <button class="rounded-md bg-white px-4 py-2 mx-4 my-1 hover:text-white hover:bg-primary transition-all">
              Contact Us Now1
            </button>
            <button class="rounded-md bg-white px-4 py-2 mx-4 my-1 hover:text-white hover:bg-primary transition-all">
              Contact Us Now2
            </button>
          </div>
        </div>
      </div>  
    </div>
    
  )
}

const HeaderTitle = (props) => {
  return(
    <span class="items-center text-center text-white flex flex-col text-5xl md:text-7xl py-5 md:py-7"> {props.words} </span>
  )
}

export default Header