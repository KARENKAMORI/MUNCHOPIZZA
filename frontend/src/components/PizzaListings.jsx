import React from 'react'
import pizzas from "../pizzas.json"
import PizzaListing from './PizzaListing'

const PizzaListings = ({ isHome = false }) => {
    const pizzaListings = isHome ? pizzas.slice(0, 3) : pizzas;
  return (
    <section className='bg-blue-50 px-4 py-10'>
        <div className='container-xl lg:container m-auto'>
            <h2 className='text-3xl font-bold text-indigo-500 mb-6 text-center'>
                { isHome ? 'Porpular Pizzas' : 'Search Pizzas' }
            </h2>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
                {pizzaListings.map((pizza) => (
                    <PizzaListing key={pizza.id} pizza={ pizza } />
                ))}
            </div>
        </div>
    </section>
  )
}

export default PizzaListings