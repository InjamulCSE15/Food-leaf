import { Outlet } from "react-router-dom"
import Footer from "../Footer/Footer"
import { Header } from "../Header/Header"
export const Root = () => {
  return (
      <div className="container mx-auto md:px-6 px-3">
        <Header/>
        <Outlet/>
        <Footer/>
    </div>
  )
}