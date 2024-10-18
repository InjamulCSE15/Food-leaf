import React from 'react'
import { BsCake } from 'react-icons/bs'
import { FiUsers } from 'react-icons/fi'
import { GiPartyFlags } from 'react-icons/gi'

export const Service = () => {
  return (
    <section className="text-white lg:py-8 py-5">
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
            <div className="mx-auto  text-center">
            <h2 className="text-red-500 font-bold text-center uppercase text-xl lg:text-5xl">Our Catering Services</h2>

            <p className="mt-4 text-gray-300">
            We offer personalized catering services, delivering fresh, delicious meals tailored to your event needs.

            </p>
            </div>

            <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="block rounded-xl border border-gray-400 p-8 shadow-xl transition hover:border-red-500/30 hover:shadow-red-500/30">
                <BsCake size={'2rem'} className='text-red-500'/>

                <h2 className="mt-4 text-xl text-white ">Birthday Party</h2>

                <p className="mt-1 text-sm text-gray-300 text-justify">
                Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.
                </p>
            </div>
            <div className="block rounded-xl border border-gray-400 p-8 shadow-xl transition hover:border-red-500/30 hover:shadow-red-500/30">
                <FiUsers size={'2rem'} className='text-red-500'/>

                <h2 className="mt-4 text-xl text-white ">Business Meetings</h2>

                <p className="mt-1 text-sm text-gray-300 text-justify">
                Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.
                </p>
            </div>
            <div className="block rounded-xl border border-gray-400 p-8 shadow-xl transition hover:border-red-500/30 hover:shadow-red-500/30">
                <GiPartyFlags size={'2rem'} className='text-red-500'/>

                <h2 className="mt-4 text-xl text-white ">Wedding Party</h2>

                <p className="mt-1 text-sm text-gray-300 text-justify">
                Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.
                </p>
            </div>

            
            </div>

        </div>
    </section>
  )
}
