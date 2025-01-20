import backgroundImage from '../../assets/1.jpg';

const TrailerSection = () => {
  return (
    <div className="h-[380px] bg-cover bg-no-repeat bg-center" style={{ backgroundImage: `url(${backgroundImage})`}}>
      <div className="h-full pl-4 sm:pl-[40px] md:pl-[70px] content-center py-8 w-full bg-gray-600 bg-opacity-30">
        <h1 className="text-4xl pb-4 text-white">Trailler{}</h1>
        <div className="overflow-x-scroll">
          <div className="flex gap-4">  
            { 
              <div>
                <iframe 
                  width="300px" 
                  height="160px" 
                  src="https://www.youtube.com/embed/TFHCew8DnC0?list=RDql9VWZ3KfQg&index=4"> 
                </iframe>
                <div className="w-full text-center min-h-[50px] mt-3">
                  <h1 className="text-white text-xl">faed{}</h1>
                  <p className=" text-white text-sm">sf{}</p>
                </div>
              </div>
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default TrailerSection