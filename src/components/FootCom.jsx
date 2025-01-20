import { Link } from "react-router"
import logo from '../assets/logo.jpg'

const FootCom = () => {
  return (
    <footer className="w-full bg-gray-200">
      <div className="w-[90%] m-auto">
        <div className=" grid grid-cols-12 py-8">
          <div className="col-span-12 place-items-center sm:place-items-start sm:col-span-4">
            <img src={logo} alt="" className="w-24 mix-blend-multiply"/>
            <p className="text-center text-sm sm:text-left mt-3">Lorem ipsum dolor s! Neque mollitia deserunt veniam similique exercitationem accusamus dolore. Labore quo similique at recusandae debitis ipsa harum nulla eveniet reiciendis optio.</p>
          </div>
          <div className="col-span-12 place-content-end sm:col-span-8 flex flex-col sm:flex-row mt-4 justify-evenly text-center sm:text-left">
            <ul type="none" className="">
              <h1 className="mb-4 text-xl">movies</h1>
              <li className="mb-2"><Link to="" className=" hover:underline">Popularity</Link></li>
              <li className="mb-2"><Link to="" className=" hover:underline">a4</Link></li>
              <li className="mb-2"><Link to="" className=" hover:underline">q4rq</Link></li>
            </ul>
            <ul type="none">
              <h1 className="mb-4 text-xl">Up comming</h1>
              <li className="mb-2"><Link to="" className=" hover:underline">dc</Link></li>
              <li className="mb-2"><Link to="" className=" hover:underline">awed</Link></li>
              <li className="mb-2"><Link to="" className=" hover:underline">dca</Link></li>
            </ul>
            <ul type="none">
              <h1 className="mb-4 text-xl">Address</h1>
              <p>2011st, Kok Kleang,<br /> Sen Sok, Phnom Penh</p>
            </ul>
          </div>
        </div>
      </div>
      <div className="w-full bg-gray-300">
        <div className="w-[90%] m-auto flex h-[80px] justify-center flex-col items-center sm:flex-row sm:justify-between">
          <p>{new Date().getFullYear()}@Moviefan</p>
          <p>jdofd</p>
        </div>
      </div>
    </footer>
  )
}

export default FootCom