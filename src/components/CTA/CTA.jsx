import React from 'react'

export const CTA = () => {
  return (   
    <section  className="overflow-hidden bg-[url(./assets/bg/cta-bg.png)] bg-cover bg-top bg-no-repeat">
        <div className="p-8 md:p-12 lg:px-16 lg:py-24">
            <div className="">
            <h2 className="text-2xl font-bold text-white sm:text-3xl md:text-5xl uppercase">Get News & Offers</h2>

            <p className="hidden max-w-lg text-white/90 md:mt-6 md:block md:text-lg md:leading-relaxed">
            Subscribe us
            </p>

            <div className="mt-4 sm:mt-8">
            <div className="mt-6">
        <div className="relative max-w-lg">
          <label className="sr-only" htmlFor="email"> Email </label>

          <input
            className="w-full rounded border-gray-200 bg-gray-100 p-4 pe-32 text-sm font-medium"
            id="email"
            type="email"
            placeholder="john@doe.com"
          />

          <button
            className="absolute end-1 top-1/2 -translate-y-1/2 rounded bg-red-600 px-5 py-3 text-sm font-medium text-white transition hover:bg-red-700"
          >
            Subscribe
          </button>
        </div>
      </div>
            </div>
            </div>
        </div>
    </section>
  )
}
