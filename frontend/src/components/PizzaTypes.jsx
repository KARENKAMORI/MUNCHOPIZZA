import React from 'react'
import { Link } from 'react-router-dom'
import Card from './Card'

const PizzaTypes = () => {
  return (
    <section className='py-4'>
        <div className='container-xl lg:container m-auto'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-lg'>
                <Card>
                    <h2 className='text-2xl font-bold'>For Customers</h2>
                    <p className='mt-2 mb-4'>
                        PIZZA TYPES
                    </p>
                    <Link
                        to='/pizzaTypes'
                        className='inline-block bg-black text-white rounded-lg px-4 py-2 hover:bg-gray-700'
                    >
                        Pizza Types
                    </Link>
                </Card>
            </div>
        </div>
    </section>
  )
}

export default PizzaTypes