import { FiPhoneCall } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
export const Tasty = () => {
  return (
    <section>
        <div className="mx-auto max-w-screen-2xl py-16 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:h-screen lg:grid-cols-2 ">
            <div className="relative z-10 lg:py-16">
                <div className="relative h-64 sm:h-80 lg:h-full">
                <img
                    alt=""
                    src="./assets/bg/chef.jpg"
                    className="absolute inset-0 h-full w-full object-cover"
                />
                </div>
            </div>

            <div className="relative flex items-center bg-black">
                <span
                className="hidden lg:absolute lg:inset-y-0 lg:-start-16 lg:block lg:w-16 bg-black"
                ></span>

                <div className="p-8 sm:p-16 lg:p-24">
                <h2 className="text-base font-bold uppercase sm:text-xl text-red-500">
                About Tasty
                </h2>

                <p className="mt-4 text-gray-100 font-bold text-xl sm:text-2xl">
                Our chef cooks the most delicious food for you
                </p>
                <p className="mt-4 text-gray-300 text-sm text-justify">
                    At Tasty, we take pride in serving mouth-watering dishes that are crafted with love and care.
                    Our talented chef carefully selects the finest ingredients to create unforgettable flavors.
                    Every plate is an experience, a journey into culinary excellence designed just for you.
                    We believe that good food is more than just sustenance; it's a source of joy and comfort.
                    Come and taste the difference in every bite, where passion meets skill in the kitchen.
                </p>
                <p className="mt-4 text-gray-300 text-sm text-justify">
                    Our chef's passion for food is evident in every dish, where flavors burst with freshness.
                    With years of experience and a flair for creativity, our chef brings innovation to the table.
                    From the first taste to the last, each dish is crafted to leave you craving for more.
                    We focus on offering a variety of meals, whether you're in the mood for something hearty or light.
                    At Tasty, our goal is simple: to provide you with the most delicious and memorable dining experience.
                </p>
                <div className="pt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                    <button type="button" className='btn btn-lg bg-red-500 border-red-500 text-white hover:bg-transparent hover:border-red-500 hover:text-red-500'><FiPhoneCall /> 09876543212</button>
                    <button type="button" className='btn btn-lg bg-green-500 border-green-500 text-white hover:bg-transparent hover:border-green-500 hover:text-green-500'><FaWhatsapp /> 09876543212</button>
                </div>
                
                </div>
            </div>
            </div>
        </div>
    </section>
  )
}
