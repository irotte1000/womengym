import Image from "next/image";
import Logo from "@/public/images/logo.png";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="top-0 px-8 h-12 md:w-[60%] text-white">
      <div className="flex justify-between items-center h-full">
        <div>
          <Image src={Logo} width={80} height={80} />
        </div>
        <div>
          <ul className="flex justify-between gap-x-16 text-sm font-extralight uppercase">
            <il className="hover:text-[#e9e664]">
              <Link href="#">Home</Link>
            </il>
            <il className="hover:text-[#e9e664]">
              <Link href="#">Price</Link>
            </il>
            <il className="hover:text-[#e9e664]">
              <Link href="#">Blog</Link>
            </il>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
