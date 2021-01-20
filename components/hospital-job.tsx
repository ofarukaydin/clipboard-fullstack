import { useState } from "react";
import "twin.macro";
import { JobItem } from "../types";

type PropTypes = {
  job: JobItem;
};

const getDiffAsWeek = (date: string) => {
  const today = new Date();
  const createdOn = new Date(date);
  const msInDay = 24 * 60 * 60 * 1000;

  createdOn.setHours(0, 0, 0, 0);
  today.setHours(0, 0, 0, 0);

  const diff = Math.ceil((+today - +createdOn) / msInDay / 7);

  return diff;
};

const HospitalJob = ({ job }: PropTypes) => {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div tw="px-6">
      <div tw="flex justify-between items-center mb-4" onClick={() => setShowDetails(!showDetails)}>
        <div>
          <p tw="font-semibold">{job.job_title}</p>
          <p>
            {job.job_type} | ${job.salary_range[0]} - ${job.salary_range[1]} an hour | {job.city}
          </p>
        </div>
        <p>{getDiffAsWeek(job.created)} weeks ago</p>
      </div>
      <div tw="flex" css={[!showDetails && { display: "none" }]}>
        <div tw="w-1/3 font-semibold space-y-4">
          <p>Department:</p> <p>Hours / shifts:</p> <p>Summary</p>
        </div>
        <div tw="w-1/3 space-y-4">
          <p>{job.department.join(", ")}</p>
          <p>
            {job.hours.toString()} hours / {job.work_schedule}
          </p>
          <p>{job.description}</p>
        </div>
        <div tw="w-1/3 items-center justify-center flex flex-col space-y-4">
          <button tw="rounded-lg border bg-blue-400 py-2 px-4 font-semibold text-white">
            Job details
          </button>
          <button tw="rounded-lg border border-blue-400 py-2 px-4 font-semibold text-blue-400">
            Save job
          </button>
        </div>
      </div>
    </div>
  );
};

export default HospitalJob;
