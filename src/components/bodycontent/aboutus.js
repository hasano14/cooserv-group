import React from 'react'

const aboutus = () => {
  return (
    <div class="container flex flex-col h-fit w-5/6 2xl:w-full xl:max-w-5xl items-center">
        <h1 class="text-text1Light dark:text-text1Dark mt-10 text-center text-4xl">About Us</h1>
        <div class="flex flex-col pt-2 md:pt-6 xl:flex-row h-fit transition-all xl:max-w-5xl 2xl:max-w-7xl">
          <img src="https://dummyimage.com/2500x1350/000000/ffffff" class="xl:float-left h-fit rounded-md xl:mx-auto xl:max-w-sm mt-2 xl:mt-0 xl:mr-2" alt="About Us"></img>
          <p class="text-text2Light dark:text-text2Dark text-lg font-medium text-justify mt-2 md:mt-0 mx-8 md:mx-auto subpixel-antialiased items-center">Cooserv is a group of companies that doing professional works and services in Malaysia. We work with clients from both the private and public sectors globally to identify their competitive advantage, supplying resources, address their challenges, managing projects and coordination. Our boutique relationships, customized and actionable insights and an entrepreneurial spirit approach ensure that our clients achieve highest-value opportunities, build more capable organizations and secure good and sustainable results. We seek to enhance the quality of life for all our stakeholders, our clients, our team and society. Cooserv is the consultancy that will raise up your business! </p>      
        </div>
    </div>
  )
}

export default aboutus