import React from 'react'
import { Link } from 'react-router-dom'
import Card from './Card'

const Category = () => {
  return (
    <section className='py-4'>
        <div className='container-xl lg:container m-auto'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-lg'>
                <Card>
                    <h2 className='text-2xl font-bold'>PIZZA CATEGORIES</h2>
                    <p className='mt-2 mb-4'>
                        ADD a pizza category
                    </p>
                    <Link
                        to='/category'
                        className='inline-block bg-black text-white rounded-lg px-4 py-2 hover:bg-gray-700'
                    >
                        Category
                    </Link>
                </Card>
            </div>
        </div>
    </section>
  )
}

export default Category