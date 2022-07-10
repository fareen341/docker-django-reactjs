import React from 'react'
import { HomeProduct } from './HomeChildrens/HomeProduct'
import { Carousel } from './HomeChildrens/Carousel'
import { FeatureProducts } from './HomeChildrens/FeatureProducts'
import { Video } from './HomeChildrens/Video'



export const Home = () => {
  return (
    <div>
        
        <Carousel />
        <HomeProduct />
        <FeatureProducts />
        <Video />
    </div>
  )
}
