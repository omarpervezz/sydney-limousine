import { FaHeadphones, FaMapMarker, FaUserCircle } from "react-icons/fa";
import Link from "next/link";
function Topheader() {
  return (
    <div className="hidden md:block bg-black text-white py-2 text-[12px]">
      <div className="container px-5 py-2 mx-auto flex justify-between items-center">
        <div className="flex space-x-6">
          <div className="flex items-center space-x-2">
            <FaHeadphones />
            <a
              href="tel:+61439853700"
              target="_blank"
              rel="noopener noreferrer"
              className=" hover:underline"
            >
              +61 439 853700
            </a>
          </div>
          <div className="flex items-center space-x-2">
            <FaMapMarker />
            <span>275 Alfred Street, North Sydney NSW 2060, Australia</span>
          </div>
        </div>
        <div className="flex items-center space-x-2 text-[14px] ">
          <FaUserCircle />
          <Link href="/login" className="font-semibold">
            Login
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Topheader;
