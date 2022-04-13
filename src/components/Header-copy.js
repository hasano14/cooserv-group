import React from 'react'
import '../index.css';

const Header = () => {
  return (
    <div class="container flex flex-col items-center bg-inherit h-fit w-5/6">
      <div class="container flex flex-col items-center">
        <h1 class="items-center text-center font-bold text-6xl text-text1Light mt-6 md:mt-10 mb-5 2xl:text-8xl 2xl:mt-24">Cooserv Group</h1>
        <p class="mb-7 text-center text-xl text-text2Light">Cooserv Group Is Here</p>
        <button class="flex-row p-2 mb-5 border-2 rounded-md border-text1Light text-center text-xl w-fit fill-buttonColor hover:bg-buttonColor"> Contact Us Now </button>
        <img class="rounded-md mt-2 max-w-3xl" src="https://dummyimage.com/2500x1350/000000/ffffff" alt="Landing"></img>
      </div>
        
    </div>
    // <div class="flex flex-col h-fit w-full">
    //   <div class="mix-blend-normal bg-local bg-center bg-cover items-center md:p-15 shadow-lg rounded-sm md:mx-5 lg:mx-10 header-image">
    //     <div class="container mix-blend-normal border-2 rounded-md bg-primary/30 max-auto my-10 pb-7 md:max-w-xl lg:max-w-2xl xl:max-w-xl 2xl:max-w-3xl transition-all">
    //       <HeaderTitle words="Cooserv Group"/>
    //       <p class="items-center flex flex-col text-md text-justify m-2 md:px-20 lg:px-28 text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
    //       Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    //       <div class="flex flex-col md:flex-row items-center place-content-center">
    //         <button class="rounded-md bg-white px-4 py-2 mx-4 my-1 hover:text-white hover:bg-primary transition-all"> Contact Us Now1 </button>
    //         <button class="rounded-md bg-white px-4 py-2 mx-4 my-1 hover:text-white hover:bg-primary transition-all"> Contact Us Now2 </button>
    //       </div>
    //     </div>
    //   </div>  
    // </div>
  )
}

const HeaderTitle = (props) => {
  return(
    <span class="items-center text-center text-white flex flex-col text-5xl md:text-7xl py-5 md:py-7"> {props.words} </span>
  )
}

export default Header