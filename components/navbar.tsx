import Image from "next/image";
import "twin.macro";
import { Icons } from "./icons";

type PropTypes = {};

const Navbar = (props: PropTypes) => {
  return (
    <div tw="flex justify-between items-center px-4 font-semibold bg-white">
      <div tw="flex items-center">
        <div tw="block lg:hidden">
          <Icons.HamburgerMenu />
        </div>
        <Image src="/logo.png" alt="Logo" width={150} height={50} />
      </div>
      <ul tw="hidden lg:flex space-x-10">
        <li>Profile</li>
        <li>Jobs</li>
        <li>Professional Network</li>
        <li>Lounge</li>
        <li>Salary</li>
      </ul>
      <div tw="flex items-center space-x-8">
        <button tw="hidden lg:block rounded-lg border border-blue-400 py-2 px-4 font-semibold text-blue-400">
          Create Job
        </button>
        <div tw="rounded-full bg-blue-400 text-white p-2 relative">
          <span
            tw="absolute w-4 h-4 rounded-full bg-red-500 border border-2 border-white"
            css={{ top: 0, right: -5 }}
          />
          JO
        </div>
        <p tw="hidden lg:block">LOGOUT</p>
      </div>
    </div>
  );
};

export default Navbar;
