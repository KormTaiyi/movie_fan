import backgroundImage from '../../assets/1.jpg';
import { useState,useEffect } from 'react';

const TrailerSection = () => {

  const [value,setValue]=useState([])
  async function callData(){
    try {
      const resp = await fetch("https://api.themoviedb.org/3/discover/tv?api_key=aacdbe83dedab8fc913bd72adf3fdbad");
      const json = await resp.json();
      setValue(json.results)
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(()=>{
    callData();
  },[])

  return (
    <div className="h-[380px] bg-cover bg-no-repeat bg-center" style={{ backgroundImage: `url(${backgroundImage})`}}>
      <div className="h-full pl-4 sm:pl-[40px] md:pl-[70px] content-center py-8 w-full bg-gray-600 bg-opacity-30">
        <h1 className="text-4xl pb-4 text-white">Trailler{}</h1>
        <div className="overflow-x-scroll">
          <div className="flex gap-4">  
            { 
              value.map((v)=>(
                <div key={v.id}>
                  <iframe 
                    width="300px" 
                    height="160px" 
                    src={`${v.backdrop_path}`}> 
                  </iframe>
                  <div className="w-full text-center min-h-[50px] mt-3">
                    <h1 className="text-white text-xl">{v.name}</h1>
                    <p className=" text-white text-sm">{}</p>
                  </div>
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default TrailerSection