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
    <div class="container flex flex-col w-full items-center mx-auto 2xl:max-w-5xl">
        <h1 class="text-primary mt-5 text-center text-3xl md:text-5xl 2xl:text-6xl md:mt-10">Our Services</h1>
        <div class="flex flex-col pt-2 h-min transition-all">
          {/* This will be a slideshow */}
          <img src="https://dummyimage.com/2500x1350/ffffff/000000" class="object-scale-down w-auto mt-2" alt="Services Provided"></img>
          <p class="mt-2 text-secondary text-justify mx-auto subpixel-antialiased">Cooserv is a group of companies that doing professional works and services in Malaysia. We work with clients from both the private and public sectors globally to identify their competitive advantage, supplying resources, address their challenges, managing projects and coordination. Our boutique relationships, customized and actionable insights and an entrepreneurial spirit approach ensure that our clients achieve highest-value opportunities, build more capable organizations and secure good and sustainable results. We seek to enhance the quality of life for all our stakeholders, our clients, our team and society. Cooserv is the consultancy that will raise up your business! </p>      
          <hr class="w-full text-black"/>
        </div>
        <div class="grid pt-2 h-auto grid-cols-1 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-3 transition-all">
            {/* This will be a grid of cards */}
            {
              servicesName.map(service => (
                <div class="flex flex-col border-2 border-black p-3 rounded-xl">
                  <img src={service.image} alt="services" class="max-h-40 md:max-h-fit"></img>
                  <p class="text-primary text-xl">{service.name}</p>
                  <p class="text-primary text-base">{service.description}</p>
                </div>
              ))
            }
        </div>
    </div>
  )
}
export default ourservices