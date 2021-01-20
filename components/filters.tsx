import { useEffect, useState } from "react";
import "twin.macro";
import { FiltersResponse } from "../types";
import MenuCard from "./menu-card";

type PropTypes = {};

const Filters = () => {
  const [filters, setFilters] = useState<Partial<FiltersResponse>>({});

  useEffect(() => {
    fetch("/api/filters")
      .then((resp) => resp.json())
      .then(setFilters);
  }, []);

  return (
    <div tw="space-y-4">
      <MenuCard id="jobType" title="JOB TYPE" items={filters?.job_type} />
      <MenuCard id="department" title="DEPARTMENT" items={filters?.department} />
      <MenuCard id="workSchedule" title="WORK SCHEDULE" items={filters?.work_schedule} />
      <MenuCard id="experience" title="EXPERIENCE" items={filters?.experience} />
    </div>
  );
};
export default Filters;
