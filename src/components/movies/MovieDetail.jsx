import { useState,useEffect } from "react"

const MovieDetail = () => {
  const [data,setData] = useState([]);
  async function fetchingDetailData(){
    try {
      const response = await fetch("https://api.themoviedb.org/3/discover/tv?api_key=aacdbe83dedab8fc913bd72adf3fdbad")
      const json = await response.json()
      setData(json.results || [])
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(()=>{
    fetchingDetailData();
  },[])
  return (
    <div className="w-full md:w-[90%] m-auto mt-6">
        {
          data.map((da)=>(
            <div className="w-full grid grid-cols-12 min-h-[400px] pl-2 shadow-lg mb-8" key={da.id}>
              <div className="col-span-6 h-[300px] sm:col-span-5 md:col-span-3 md:h-[350px] md:mb-0">
                <img
                  src={`https://image.tmdb.org/t/p/w500${da.poster_path}`}
                  className="h-full object-cover rounded-lg mt-3"
                  />
              </div>
              <div className="md:col-span-9 min-h-[350px] pl-2 col-span-12 py-8 sm:pt-8 md:content-center">
                  <h1 className="text-4xl font-bold mb-4">{da.original_name}</h1>
                  <p>jfdjodlkfjm{}<span>hour{}</span></p>
                  <h1 className="font-bold mt-4">Overview</h1>
                  <p>{da.overview}</p>
                  <div className="w-full grid grid-flow-col">
                    <div>
                      <h1 className="text-xl text-white">{}</h1>
                      <p className="text-sm text-white">{}</p>
                    </div>
                  </div>
              </div>
            </div>
          ))
        }
    </div>
  )
}

export default MovieDetail