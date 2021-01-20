import "twin.macro";

type PropTypes = {};

const Footer = (props: PropTypes) => {
  return (
    <div tw="flex flex-wrap overflow-hidden bg-white px-10 py-4 my-5">
      <div tw="w-full lg:w-1/2 overflow-hidden">
        <p tw="font-bold text-xl py-2">About Us</p>
        <p>
          We are a team of nurses, doctors, technologists and executives dedicated to help nurses
          find jobs that they love.
        </p>
      </div>

      <div tw="w-full lg:w-1/4 overflow-hidden">
        <p tw="font-bold text-xl py-2">Sitemap</p>
        <ul>
          <li>Nurses</li>
          <li>Employers</li>
          <li>Social networking</li>
          <li>Jobs</li>
        </ul>
      </div>

      <div tw="w-full lg:w-1/4 overflow-hidden">
        <p tw="font-bold text-xl py-2">Privacy</p>
        <ul>
          <li>Terms of use</li>
          <li>Privacy policy</li>
          <li>Cookie Policy</li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
