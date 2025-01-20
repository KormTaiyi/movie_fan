import { Outlet } from "react-router"
import MovieLeftSide from "../components/movies/MovieLeftSide"
import HeadCom from "../components/HeadCom"
import FootCom from "../components/FootCom"

const MainLayoutMovie = () => {
  return (
   <div>
        <HeadCom/>
        <div className="grid gap-8 w-[90%] m-auto">
            <Outlet/>
        </div>
        <FootCom/>
   </div>
  )
}

export default MainLayoutMovie