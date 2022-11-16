import React, { useRef } from 'react'
import Header from '../Components/Home/Header'
import  { Pricing } from '../Components/Home/Pricing'
import { Stats } from '../Components/Home/Stats'
function Home(headerRef , statsRef , pricingRef) {
    // console.log(pricingRef);
  return (
    <>
    <Header />
    <Stats />
    <Pricing />
    </>
  )
}

export default Home