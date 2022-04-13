import React from 'react'

const aboutus = () => {
  return (
    <div class="container flex flex-col w-full h-auto mx-auto md:max-w-3xl items-center">
        <h1 class="text-text1Light dark:text-text1Dark mt-5 text-center text-3xl md:text-5xl 2xl:text-7xl md:mt-10">About Us</h1>
        <div class="flex flex-col pt-2 md:pt-6 md:flex-row h-fit transition-all">
          <img src="https://dummyimage.com/2500x1350/000000/ffffff" class="md:float-left object-scale-down h-full rounded-md mx-8 md:max-h-40 mt-2 md:my-5 md:mr-2" alt="About Us"></img>
          <p class="text-text2Light dark:text-text2Dark text-lg font-medium text-justify mt-2 md:mt-0 mx-8 md:mx-auto subpixel-antialiased">Cooserv is a group of companies that doing professional works and services in Malaysia. We work with clients from both the private and public sectors globally to identify their competitive advantage, supplying resources, address their challenges, managing projects and coordination. Our boutique relationships, customized and actionable insights and an entrepreneurial spirit approach ensure that our clients achieve highest-value opportunities, build more capable organizations and secure good and sustainable results. We seek to enhance the quality of life for all our stakeholders, our clients, our team and society. Cooserv is the consultancy that will raise up your business! </p>      
        </div>
    </div>
  )
}

export default aboutus