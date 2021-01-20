import "twin.macro";
import { FilterContextWrapper } from "./filter-context";
import Filters from "./filters";
import Hospitals from "./hospitals";
import Searchbar from "./searchbar";

type PropTypes = {};

const Layout = ({}: PropTypes) => {
  return (
    <FilterContextWrapper>
      <div tw="w-full h-full px-4">
        <div tw="my-4">
          <Searchbar />
        </div>
        <div tw="grid grid-cols-1 lg:grid-cols-6 gap-4 ">
          <div tw="max-w-max hidden lg:block">
            <Filters />
          </div>
          <div tw="col-span-5">
            <Hospitals />
          </div>
        </div>
      </div>
    </FilterContextWrapper>
  );
};

export default Layout;
