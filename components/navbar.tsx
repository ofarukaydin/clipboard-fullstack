import Image from "next/image";
import "twin.macro";

type PropTypes = {};

const Navbar = (props: PropTypes) => {
  return (
    <div tw="flex justify-between items-center px-4 font-semibold bg-white">
      <Image src="/logo.png" alt="Logo" width={150} height={50} />
      <ul tw="flex space-x-10">
        <li>Profile</li>
        <li>Jobs</li>
        <li>Professional Network</li>
        <li>Lounge</li>
        <li>Salary</li>
      </ul>
      <div tw="flex items-center space-x-8">
        <button tw="rounded-lg border border-blue-400 py-2 px-4 font-semibold text-blue-400">
          Create Job
        </button>
        <div>
          <Image src="/avatar.png" alt="Avatar" width={50} height={50} />
        </div>
        <p>LOGOUT</p>
      </div>
    </div>
  );
};

export default Navbar;
