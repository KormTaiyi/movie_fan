import backgroundImage from '../../assets/background.png';

const HeroSection = () => {
  return (
    <div
      className="w-full h-[60vh] bg-cover bg-no-repeat bg-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="w-full h-full bg-black bg-opacity-70 flex items-center">
        <div className="sm:ml-[70px] pl-4">
          <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-800 to-teal-300 sm:text-6xl">
            That's a <br /> Wrap {new Date().getFullYear()}
          </h1>
          <p className="text-sm text-white mt-6 sm:text-xl">
            The best (and worst) of the year from Enjoy Movie
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
