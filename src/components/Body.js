import React from 'react'
import Aboutus from './bodycontent/aboutus'
import OurTeam from './bodycontent/ourteam'
import OurServices from './bodycontent/ourservices'

const Body = () => {
  return (
    <body class="grid grid-flow-row grid-rows-auto sm:mx-2 md:mx-5 lg:mx-10 xl:mx-16 2xl:mx-32">
      <Aboutus />
      <OurServices />
      <OurTeam />
    </body>
  )
}

export default Body