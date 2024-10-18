
const Hero = () => {
    return (
        <div className="">
            <div className="flex items-center flex-wrap px-2 md:px-0">
                <div className="relative lg:w-6/12 lg:py-24 xl:py-32">
                    <h1 className="text-2xl text-gray-300 md:text-3xl lg:w-10/12">Your favorite BayLeaf Restaurant, is now in NORWOOD</h1>
                    <div className="w-full mt-12">
                        <p className="text-white font-bold lg:w-10/12 md:text-5xl text-xl">We do Corporate Events, Birthday Functions, Year Ending Functions & Outdoor Catering.</p>
                        <button className="btn btn-ghost btn-lg md:mt-16 mt-6 bg-red-500 text-white px-12 text-xl hover: border hover:border-red-500 hover:bg-transparent hover:text-red-500">Get Started</button>
                    </div>
                </div>
                <div className="ml-auto -mb-24 lg:w-6/12 lg:block hidden animate-shake animate-infinite animate-duration-[1500ms] animate-ease-linear">
                    <img src="./assets/bg/food-13642.png" className="" alt="food illustration" loading="lazy" width="4500" height="4500" />
                </div>
            </div>
        </div>
    )
}

export default Hero