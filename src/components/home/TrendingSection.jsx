import { useEffect, useState } from "react";

import { Link } from "react-router"

const TrendingSection = () => {
  const [data, setData] = useState([]);

  async function fetchingHomeData() {
    try {
      const response = await fetch(
        "https://api.themoviedb.org/3/discover/tv?api_key=aacdbe83dedab8fc913bd72adf3fdbad"
      );
      const json = await response.json();
      setData(json.results || []);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }
  useEffect(() => {
    fetchingHomeData();
  }, []);

  return (
    <div className="pl-4 md:pl-[70px] sm:pl-[40px] py-8">
        <h1 className="text-3xl pb-4">Trending{}</h1>
        <div className="overflow-x-scroll">
            <div className="flex gap-5">
              {
                data.map((d)=>(
                  <Link to="detail_movie" key={d.id} className=" border rounded-md">
                    <img src={`https://image.tmdb.org/t/p/w500${d.poster_path}`} alt="" className="w-[150px] h-[200px] object-cover rounded-md"/>
                    <div className="p-2 w-[150px] min-h-[50px]">
                        <h1 className="font-bold">{d.name}</h1>
                        <p className="text-gray-500">{d.first_air_date}</p>
                    </div>
                  </Link>
                ))
              }
            </div>
        </div>
    </div>
  )
}

export default TrendingSection