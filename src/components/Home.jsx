import { Link } from "react-router-dom";
import HomeCards from "../components/HomeCards";

const Home = () => {
  return (
    <div className="bg-[#1b1b1b] min-h-screen flex flex-col">
      {/* Heading Section */}
      <section className="text-center py-10">
        <h1 className="text-5xl sm:text-6xl tracking-wide font-bold text-[#e86b40] mb-2 uppercase font-anton">
          Chacha's World
        </h1>
      </section>

      {/* Fullscreen Cards Section */}
      {/* <HomeCards /> */}
      <div className="flex justify-center gap-1 mt-10">
        <Link to='/chacha' className="absolute left-80 -rotate-17 top-40">
        <h2 className="font-anton font-bold text-white uppercase text-4xl mt-50">Chacha Chatore</h2>
        </Link>
        
        <div className="w-1/3 ">
          <img src="/images/Srk.png" alt="" />
        </div>
        <Link to='/production' className="absolute right-80 rotate-17 top-40">
        <h2 className="font-anton font-bold text-white uppercase text-4xl mt-50">Chacha Chatore <br />Productions</h2>
        </Link>
      </div>
      
    </div>
  );
};

export default Home;
