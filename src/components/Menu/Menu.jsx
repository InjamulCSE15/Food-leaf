import { useNavigate } from "react-router-dom";

const Menu = ({menu}) => {
  const navigate = useNavigate();
  const {id, name, pic, items} = menu;
  const handleNavigate = () => {
    navigate('/menu');
  }
    return (
      <div className="h-44 md:w-36 w-full bg-gray-100 rounded-xl flex flex-col justify-center shadow duration-300 hover:scale-95 hover:bg-red-500 hover:shadow-xl cursor-pointer group" onClick={handleNavigate}>
        <img className="h-14 w-auto mx-auto" src={pic} />
        <div className="mt-4 text-sm ?leading-5 text-center text-red-500 group-hover:text-white">
          <span className="font-semibold">{name}</span><br />
          <small className="text-gray-950 text-sm mt-4">View {items} items</small>
        </div>      
      </div>
    )
}

export default Menu