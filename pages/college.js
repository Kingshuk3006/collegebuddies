import Navbar from "../components/Navbar";
import styles from "../styles/Home.module.css";

export default function College() {
  return (
    <div className="bg-[#000000] h-full">
      <Navbar />
      <div className="h-screen space-y-4 my-8">
        <h1 className="font-Audiowide text-4xl text-center w-3/4 mx-auto text-white">
          College Name
        </h1>
        <div className="flex justify-center space-x-5 py-8">
        <button className="font-Audiowide text-white bg-violet px-6 py-2 rounded-xl ">
          Discover
        </button>
        <button className="font-Audiowide text-white bg-transparent outline outline-violet px-6 py-2 rounded-xl hover:bg-violet">
          Discover
        </button>
        <button className="font-Audiowide text-white bg-transparent outline outline-violet px-6 py-2 rounded-xl hover:bg-violet">
          Discover
        </button>
        </div>
      </div>
      
    </div>
  );
}
