import { useState } from "react";
import "twin.macro";
import { JobItem } from "../types";
import HospitalJob from "./hospital-job";

type PropTypes = {
  name: string;
  totalJobs: number;
  items: JobItem[];
};

const HospitalItem = ({ name, totalJobs, items }: PropTypes) => {
  const [shown, setShown] = useState(false);
  return (
    <>
      <div onClick={() => setShown(!shown)} key={name} tw="p-4 space-x-4 flex items-center">
        <span tw="bg-gray-400 w-10 h-10 text-white font-bold border-2 rounded-lg m-0 h-auto">
          <div tw="flex items-center justify-center">{name.slice(0, 2).toUpperCase()}</div>
        </span>
        <span>
          {totalJobs} jobs for {name}
        </span>
      </div>
      <ul>
        {items.map((job) => (
          <li key={job.job_id} css={[!shown && { display: "none" }]}>
            <HospitalJob job={job} />
          </li>
        ))}
      </ul>
    </>
  );
};

export default HospitalItem;
