import "twin.macro";
import { useFilter } from "./filter-context";

const SearhIcon = (): JSX.Element => (
  <svg width={20} height={19} viewBox="0 0 20 19" fill="none">
    <g clipPath="url(#prefix__clip0)">
      <path
        d="M13.839 13.868A7.521 7.521 0 101.562 5.176a7.52 7.52 0 009.964 10.822l5.545 5.512a1.574 1.574 0 102.226-2.225l-5.458-5.417zm-6.143.514a4.851 4.851 0 11-.01-9.703 4.851 4.851 0 01.013 9.703h-.003z"
        fill="#000"
      />
    </g>
    <defs>
      <clipPath id="prefix__clip0">
        <path fill="#fff" transform="translate(0 .49)" d="M0 0h20v18.113H0z" />
      </clipPath>
    </defs>
  </svg>
);

const Searchbar = (): JSX.Element => {
  const { state, dispatch } = useFilter();

  return (
    <div tw="relative">
      <input
        tw="h-12 w-full my-2 px-10"
        type="search"
        placeholder="Search for any job, title, keywords or company"
        onChange={(e) => dispatch({ type: "search", payload: e.target.value })}
        value={state.searchValue}
      />
      <button type="submit" tw="absolute inset-4">
        <SearhIcon />
      </button>
    </div>
  );
};

export default Searchbar;
