import React from 'react'

const aboutus = () => {
  return (
    <div class="container flex flex-col w-5/6 items-center mx-auto static 2xl:max-w-5xl">
        <h1 class="text-text1Light dark:text-text1Dark mt-5 text-center text-3xl md:text-5xl 2xl:text-7xl md:mt-10">About Us</h1>
        <div class="flex flex-col pt-2 md:pt-10 md:flex-row h-auto xl:h-48 transition-all">
          <img src="https://dummyimage.com/2500x1350/000000/ffffff" class="float-left object-scale-down h-auto md:h-48 xl:h-auto mt-2 md:mr-2" alt="About Us"></img>
          <p class="text-secondary text-justify mx-auto subpixel-antialiased">Cooserv is a group of companies that doing professional works and services in Malaysia. We work with clients from both the private and public sectors globally to identify their competitive advantage, supplying resources, address their challenges, managing projects and coordination. Our boutique relationships, customized and actionable insights and an entrepreneurial spirit approach ensure that our clients achieve highest-value opportunities, build more capable organizations and secure good and sustainable results. We seek to enhance the quality of life for all our stakeholders, our clients, our team and society. Cooserv is the consultancy that will raise up your business! </p>      
        </div>
    </div>
  )
}

export default aboutus