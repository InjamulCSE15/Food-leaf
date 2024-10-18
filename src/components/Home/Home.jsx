
import Menus from "../Menus/Menus"
import Hero from "../Hero/Hero"
import { Tasty } from "../Tasty/Tasty"
import { CTA } from "../CTA/CTA"
import { Testimonial } from "../Testimonials/Testimonials"
import { Service } from "../Service/Service"

const Home = () => {
  return (
    <div className="md:px-6 px-3">       
        <Hero/>
        <Menus/>
        <Tasty/>
        <CTA/>
        <Service/>
        <Testimonial/>
    </div>
  )
}

export default Home