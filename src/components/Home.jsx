import { Link } from "react-router-dom";
import HomeCards from "../components/HomeCards";

const Home = () => {
  return (
    <div className="bg-[#1b1b1b] min-h-screen flex flex-col justify-between">
      {/* Heading Section */}
      <section className="py-10">
        <h1 className="text-4xl text-center sm:text-5xl tracking-wide font-bold text-[#e86b40] uppercase font-anton">
          Chacha's World
        </h1>
      </section>

      {/* Fullscreen Cards Section */}
      {/* <HomeCards /> */}
      <div className="flex justify-center gap-1 mt-10">
        <div className="md:w-1/3 relative ">
        <Link to='/chacha' className="absolute -left-38 -rotate-90 -top-15 md:-rotate-17 md:-top-15 md:-left-25">
        <h2 className="font-anton font-bold text-white uppercase text-2xl md:text-4xl mt-50">Chacha Chatore</h2>
        </Link>
          <img src="/images/Srk.png" alt="" />
          <Link to='/production' className="absolute right-15 rotate-270 -top-15 md:-right-40 md:rotate-17 md:-top-15">
        <h2 className="font-anton font-bold text-white uppercase text-2xl md:text-4xl mt-50">Chacha Chatore <br />Productions</h2>
        </Link>
        </div>
        
      </div>
      
    </div>
  );
};

export default Home;
