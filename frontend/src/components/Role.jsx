import React from 'react'
import { Link } from 'react-router-dom'
import Card from './Card'

const Role = () => {
  return (
    <section className='py-4'>
        <div className='container-xl lg:container m-auto'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-lg'>
                <Card>
                    <h2 className='text-2xl font-bold'>For Customers</h2>
                    <p className='mt-2 mb-4'>
                        Registration for only Customers
                    </p>
                    <Link
                        to='/customerform'
                        className='inline-block bg-black text-white rounded-lg px-4 py-2 hover:bg-gray-700'
                    >
                        Customer
                    </Link>
                </Card>
                <Card bg='bg-indigo-100'>
                <h2 className='text-2xl font-bold'>For Restaurant Owner</h2>
                    <p className='mt-2 mb-4'>
                        Owner Registration
                    </p>
                    <Link
                        to='/ownerform'
                        className='inline-block bg-indigo-500 text-white rounded-lg px-4 py-2 hover:bg-indigo-600'
                    >
                        Owner
                    </Link>
                </Card>
            </div>
        </div>
    </section>
  )
}

export default Role