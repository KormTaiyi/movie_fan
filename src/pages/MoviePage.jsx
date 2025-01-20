import { useState,useEffect } from "react"
import { Link } from "react-router"

const MoviePage = () => {
  const [data,setData] = useState([])
  async function fetchMovieData(){
    try {
      const resp = await fetch("https://api.themoviedb.org/3/discover/tv?api_key=aacdbe83dedab8fc913bd72adf3fdbad")
      const json = await resp.json()
      setData(json.results)
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(()=>{
    fetchMovieData();
  },[])
  return (
    <div className="w-full flex flex-wrap gap-2 mt-10 justify-evenly">
      { 
        data.map((d)=>(
            <Link to="/detail_movie" className="w-[160px] min-h-[200px] md:min-h-[300px] sm:w-[190px] sm:min-h-[250px] border shadow-md rounded-md overflow-hidden mb-6">
              <div key={d.id}>
                  <img src={`https://image.tmdb.org/t/p/w500${d.poster_path}`} className="w-full h-[180px] sm:h-[200px] md:h-[230px] object-cover"/>
                  <div className="p-2">
                      <h1 className="text-xl">{d.name}</h1>
                      <p className=" text-gray-600">{d.first_air_date}</p>
                  </div>
              </div> 
            </Link>
        )) 
      }
    </div>
  )
}

export default MoviePage