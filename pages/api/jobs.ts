import type { NextApiRequest, NextApiResponse } from "next";
import { State } from "../../components/filter-context";
import jobs from "../../data/jobs.json";
import { JobItem } from "../../types";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  res.statusCode = 200;
  // @todo: implement filters and search
  // @todo: implement automated tests

  const { jobType, workSchedule, experience, department } = req.body.filters;
  const { searchValue, direction, sortBy }: State = req.body;

  const filterJobs = (item: JobItem) => {
    const filters = [];
    if (searchValue) filters.push(item.job_title.toLowerCase().includes(searchValue.toLowerCase()));
    if (jobType.length > 0) filters.push(jobType.includes(item.job_type));
    if (department.length > 0)
      filters.push(item.department.some((item) => department.includes(item)));
    if (workSchedule.length > 0) filters.push(workSchedule.includes(item.work_schedule));
    if (experience.length > 0) filters.push(experience.includes(item.experience));

    return filters.every((i) => i);
  };

  const filteredJobs = jobs
    .map((hospital) => {
      const items = hospital.items.filter(filterJobs);

      if (sortBy && direction) {
        items.sort((a, b) => {
          let key: string = sortBy;
          if (key === "role") {
            key = "job_title";
          }
          if (key === "education") {
            key = "required_skills";
          }
          if (a[key] > b[key]) {
            return direction === "desc" ? -1 : 1;
          } else if (b[key] > a[key]) {
            return direction === "desc" ? 1 : -1;
          } else {
            return 0;
          }
        });
      }

      return { ...hospital, items, total_jobs_in_hospital: items.length };
    })
    .filter((item) => item.total_jobs_in_hospital > 0);

  // this timeout emulates unstable network connection, do not remove this one
  // you need to figure out how to guarantee that client side will render
  // correct results even if server-side can't finish replies in the right order
  await new Promise((resolve) => setTimeout(resolve, 1000 * Math.random()));

  res.json({ jobs: filteredJobs });
};
