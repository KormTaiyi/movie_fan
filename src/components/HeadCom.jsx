import { FaBars } from "react-icons/fa"
import { Link } from "react-router"
import { useEffect, useState } from 'react'
import logo from "../assets/logo.jpg"

const HeadCom = () => {
  const [state, setState] = useState(false)
    const navigation = [
        { title: "Home", path: "/" },
        { title: "Movie", path: "/movie/tv" },
        { title: "TV Show", path: "#" },
    ]
    useEffect(() => {
        document.onclick = (e) => {
            const target = e.target;
            if (!target.closest(".menu-btn")) setState(false);
        };
    }, [])
    return (
      <nav className={`w-full md:text-lg ${state ? " md:border-none md:mt-0" : ""}`} style={{
        boxShadow: "#212121 5px 5px 10px -10px",
      }}>
          <div className="w-[90%] m-auto gap-x-14 items-center max-w-screen-xl md:flex">
              <div className="flex items-center justify-between py-5 md:block">
                  <Link to="/">
                      <img
                          src={logo}
                          width={100} 
                          height={50}
                      />
                  </Link>
                  <div className="md:hidden">
                      <button className="menu-btn text-xl text-gray-500 hover:text-gray-800"
                          onClick={() => setState(!state)}
                      >
                          <FaBars/>
                      </button>
                  </div>
              </div>
              <div className={`flex-1 items-center pb-4 md:pb-0  md:mt-0 md:flex ${state ? 'block' : 'hidden'} `}>
                  <ul className="justify-center items-center space-y-2 md:flex md:space-x-6 md:space-y-0">
                      {
                          navigation.map((item, idx) => {
                              return (
                                  <li key={idx} className="text-gray-600 hover:text-black">
                                      <Link to={item.path} className="block">
                                          {item.title}
                                      </Link>
                                      <hr className="md:hidden"/>
                                  </li>
                              )
                          })
                      }
                  </ul>
              </div>
          </div>
      </nav>
  )
}

export default HeadCom