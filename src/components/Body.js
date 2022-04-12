import React from 'react'
import Aboutus from './bodycontent/aboutus'
import OurTeam from './bodycontent/aboutus'

const Body = () => {
  return (
    <body class="grid grid-flow-row grid-rows-auto sm:mx-2 md:mx-5 lg:mx-10 xl:mx-16 2xl:mx-32">
      <Aboutus />
      <OurTeam />
      <Aboutus />
    </body>
  )
}

export default Body