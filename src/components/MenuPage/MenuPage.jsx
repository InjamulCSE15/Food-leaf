import { useState, useEffect } from "react";
import { MenuDetails } from "../MenuDetails/MenuDetails";

export const MenuPage = () => {
    const [menuData, setMenuData] = useState([])
    useEffect(() => {
        const fetchMenuData = async () => {
          try {
            const response = await fetch("menulist.json"); // Fetch the JSON from the file or API
            const data = await response.json(); // Convert response to JSON
            setMenuData(data); // Update state with fetched data
          } catch (error) {
            console.error("Error fetching the menu data:", error);
          }
        };
    
        fetchMenuData();
      }, []); 

  return (
    <div>
        <div className="hero xl:h-[36rem] lg:h-[32rem] md:h-[26rem] sm:h-[20rem] xs:h-[16rem] mt-6" style={{ backgroundImage: "url(./assets/bg/menubg.jpg)"}}>
        <div className="hero-overlay bg-opacity-25"></div>
        <div className="hero-content text-neutral-content text-center">
            <div className='  mx-auto text-white'>
                <h1 className="mb-5 text-5xl font-bold">Our Exclusive Menu</h1>
                <p className="mb-5 text-xl">
                    Indulge in a variety of mouth-watering dishes crafted with the finest ingredients and a touch of culinary mastery. From appetizers to desserts, our menu offers something for everyone, ensuring a delightful dining experience for all tastes and preferences.
                </p>            
            </div>
        </div>
        </div>
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-8 my-8 place-content-baseline">        
          {
            menuData.map((data, i)=> <MenuDetails key={i} food={ data }/>)            
            }           
            
        </div>
    </div>
  )
}
