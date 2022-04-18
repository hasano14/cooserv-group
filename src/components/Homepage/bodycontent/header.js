import React from 'react'

const Header = () => {
  return (
    <div class="container flex flex-col items-center bg-inherit h-fit w-full px-2">
      <h1 class="items-center text-center font-bold text-6xl text-text1Light dark:text-text1Dark mt-6 md:mt-10 mb-5 2xl:text-8xl 2xl:mt-24">Cooserv Group</h1>
      <p class="mb-7 text-center text-xl text-text2Light dark:text-text2Dark">Cooserv Group Is Here</p>
      <button class="flex-row p-2 mb-5 border-2 rounded-md border-text1Light dark:border-text2Dark dark:text-text2Dark text-center text-xl w-fit fill-buttonColor hover:bg-buttonColor dark:hover:text-text1Light"> Contact Us Now </button>
      <img class="rounded-md mt-2 mx-5 xl:max-w-5xl 2xl:max-w-7xl" src="https://dummyimage.com/2500x1350/000000/ffffff" alt="Landing"></img>
    </div>
  )
}

export default Header