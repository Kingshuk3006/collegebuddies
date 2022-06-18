import Navbar from "../components/Navbar";
import Button1 from "../components/college page/Button1";
import Button2 from "../components/college page/Button2";
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
          <Button1 />
          <Button2 />
          <Button2 />
        </div>
      </div>
      
    </div>
  );
}
