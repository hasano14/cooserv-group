import React from 'react'
// import headerImage from '../../images/header.jpg'

const ourservices = () => {
  const servicesName = [
    {
      id: 1,
      name : 'Company Name 1',
      image: 'https://dummyimage.com/1350x2000/ffffff/000000',
      description: "some description"
    },
    {
      id: 2,
      name : 'Company Name 2',
      image: 'https://dummyimage.com/1350x2000/ffffff/000000',
      description: "some description2"
    },
    {
      id: 3,
      name : 'Company Name 3',
      image: 'https://dummyimage.com/1350x2000/ffffff/000000',
      description: "some description3"
    },
    {
      id: 4,
      name : 'Company Name 4',
      image: 'https://dummyimage.com/1350x2000/ffffff/000000',
      description: "some description4"
    },
    {
      id: 5,
      name : 'Company Name 5',
      image: 'https://dummyimage.com/1350x2000/ffffff/000000',
      description: "some description5"
    }
  ]

  return (
    <div class="container flex flex-col h-auto items-center w-5/6 2xl:w-full">
        <h1 class="text-text1Light dark:text-text1Dark my-5 text-center text-4xl md:mt-10">Our Services</h1>
        <div class="flex flex-col pt-2 md:pt-6 transition-all h-fit xl:max-w-7xl">
          {/* This will be a slideshow */}
          <img src="https://dummyimage.com/2500x1350/000000/ffffff" class="rounded-md mt-2 xl:max-w-5xl 2xl:max-w-7xl items-center" alt="Services Provided"></img>
          <p class="mt-2 text-text2Light dark:text-text2Dark font-medium text-lg text-justify mx-auto subpixel-antialiased">Cooserv is a group of companies that doing professional works and services in Malaysia. We work with clients from both the private and public sectors globally to identify their competitive advantage, supplying resources, address their challenges, managing projects and coordination. Our boutique relationships, customized and actionable insights and an entrepreneurial spirit approach ensure that our clients achieve highest-value opportunities, build more capable organizations and secure good and sustainable results. We seek to enhance the quality of life for all our stakeholders, our clients, our team and society. Cooserv is the consultancy that will raise up your business! </p>      
        </div>
        <div class="pt-5 grid h-auto w-full xl:w-auto grid-row md:grid-cols-2 xl:grid-cols-4 2xl:grid-cols-5 gap-1 md:gap-3 transition-all mx-5 md:mx-0 overflow-auto max-h-96 md:max-h-fit">
            {/* This will be a grid of cards */}
            {
              servicesName.map(service => (
                <div class="flex flex-row xl:flex-col border-2 border-black dark:border-white p-3 rounded-xl">
                  <img src={service.image} alt="services" class="rounded-sm max-h-40 md:max-h-56 xl:max-h-fit"></img>
                  <div class="flex-col justify-items-center">
                    <p class="text-primary dark:text-text1Dark text-xl p-2">{service.name}</p>
                    <p class="text-primary dark:text-text2Dark text-base p-2">{service.description}</p>
                  </div>
                </div>
              ))
            }
        </div>
    </div>
  )
}
export default ourservices