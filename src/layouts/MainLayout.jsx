import { Outlet } from "react-router"
import HeadCom from "../components/HeadCom"
import FootCom from "../components/FootCom"

const MainLayout = () => {
  return (
    <div>
        <HeadCom/>
        <Outlet/>
        <FootCom/>
    </div>
  )
}

export default MainLayout