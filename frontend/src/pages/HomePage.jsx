import React from 'react'
import Hero from '../components/Hero'
import HomeCards from '../components/HomeCards'
import PizzaListings from '../components/PizzaListings'
import ViewAllPizzas from '../components/ViewAllPizzas'

const HomePage = () => {
  return (
    <>
        <Hero />
        <HomeCards />
        <PizzaListings isHome={true} />
        <ViewAllPizzas />
    </>
  )
}

export default HomePage