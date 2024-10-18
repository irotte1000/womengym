import Navbar from "./Navbar";
import Img1 from "@/public/images/girl1.png";
import Image from "next/image";
import { BsFacebook, BsYoutube } from "react-icons/bs";
import { AiFillTwitterCircle } from "react-icons/ai";

const Hero = () => {
  return (
    <div className=" rounded-xl border-4 shadow-md border-[#e9e664] w-[600px] h-[1200px] md:w-[1200px] md:h-[600px] container mx-auto bg-gradient-to-r from-[#23231b] to-[#3c3731]">
      <Navbar />
      <div className=" mt-60 flex flex-col md:flex-row justify-between px-10 md:mt-8">
        <div className="md:w-1/2 flex flex-col gap-y-5 text-white mt-10">
          <h1 className="text-3xl md:text-7xl font-bold tracking-widest">
            <span className="text-[#e9e664]">Women's</span> <br />
            <span className="ml-40 md:ml-80">GYM</span>
          </h1>
          <p className="mt-10 text-sm tracking-widest leading-7 text-gray-300">
            Here are eight apparatus that are competed on <br /> during a
            gymnastics competition
          </p>
          <div className="flex gap-x-8 mt-10 ml-5">
            <button className=" uppercase border-[1px] border-[#e9e664] px-8 py-1 tracking-widest font-light hover:bg-[#e9e664] hover:text-black">
              log in
            </button>
            <button className="uppercase hover:border-[1px] border-[#e9e664] px-8 py-1 tracking-widest font-light bg-[#e9e664] text-black hover:bg-transparent hover:text-white">
              Register
            </button>
          </div>
        </div>
        <div>
          <div className="w-[400px] max-h-[600px] flex justify-center mt-5">
            <Image src={Img1} />
          </div>
        </div>
        <div className="flex md:flex-col gap-5 items-center mt-10">
          <div className="bg-[#e9e664] md:h-40 md:w-[0.75px] w-40 h-[0.75px]"></div>
          <div>
            <BsFacebook className="text-[#e9e664] hover:-translate-x-1 hover:scale-110 duration-300 transition-all" />
          </div>
          <div>
            <AiFillTwitterCircle className="text-[#e9e664] hover:-translate-x-1 hover:scale-110 duration-300 transition-all " />
          </div>
          <div>
            <BsYoutube className="text-[#e9e664] hover:-translate-x-1 hover:scale-110 duration-300 transition-all" />
          </div>
          <div className="bg-[#e9e664] md:h-20 md:w-[0.75px] w-20 h-[0.75px]"></div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
