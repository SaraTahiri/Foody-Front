import React from 'react'
import Welcome from './Components/Welcome'
import TrendMenu from './Components/TrendMenu'
import MostRestauLiked from './Components/MostRestauLiked'
import WhatWeServe from './Components/WhatWeServe'
import RiderOrPartner from './Components/RiderOrPartner'

const Home = () => {
  return (
    <div>
      <Welcome />
      <TrendMenu />
      <MostRestauLiked />
      <WhatWeServe />
      <RiderOrPartner />
    </div>
  )
}


export default Home
