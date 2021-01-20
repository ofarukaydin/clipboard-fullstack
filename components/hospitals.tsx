import { useEffect, useState } from "react";
import "twin.macro";
import { Job } from "../types";
import type { Ordering } from "./filter-context";
import { useFilter } from "./filter-context";
import HospitalItem from "./hospital-item";
import { Icons } from "./icons";

const getIcon = (order: Ordering) => {
  if (order === "asc") return <Icons.UpSquare />;
  else if (order === "desc") return <Icons.DownSquare />;
  else return null;
};

const Hospitals = () => {
  const { state, dispatch } = useFilter();
  const [jobs, setJobs] = useState<Job[]>([]);

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    fetch("/api/jobs", {
      method: "POST",
      body: JSON.stringify(state),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      signal,
    })
      .then((data) => data.json())
      .then((response) => setJobs(response.jobs))
      .catch((error) => {
        if (error.name == "AbortError") {
          console.log("request was cancelled");
        }
      });
    return () => controller.abort();
  }, [state]);

  const totalJobs = jobs.map((job) => job.items.length).reduce((a, b) => a + b, 0);

  const hospitals = jobs.map((job) => (
    <HospitalItem
      items={job.items}
      totalJobs={job.total_jobs_in_hospital}
      name={job.name}
      key={job.name}
    />
  ));

  return (
    <div tw="bg-white">
      <div tw="flex justify-between p-4">
        <p>
          <span tw="font-semibold">{totalJobs} </span>
          job postings
        </p>
        <ul tw="flex space-x-4">
          <p tw="text-gray-400">Sort by</p>
          <li
            tw="flex items-center space-x-2"
            onClick={() => dispatch({ type: "sortBy", payload: "location" })}
          >
            <p>Location</p> <span>{state.sortBy === "location" && getIcon(state.direction)}</span>
          </li>
          <li
            tw="flex items-center space-x-2"
            onClick={() => dispatch({ type: "sortBy", payload: "role" })}
          >
            <p>Role</p> <span>{state.sortBy === "role" && getIcon(state.direction)}</span>
          </li>
          <li
            tw="flex items-center space-x-2"
            onClick={() => dispatch({ type: "sortBy", payload: "department" })}
          >
            <p>Department</p>
            <span>{state.sortBy === "department" && getIcon(state.direction)}</span>
          </li>
          <li
            tw="flex items-center space-x-2"
            onClick={() => dispatch({ type: "sortBy", payload: "education" })}
          >
            <p>Education</p> <span>{state.sortBy === "education" && getIcon(state.direction)}</span>
          </li>
          <li
            tw="flex items-center space-x-2"
            onClick={() => dispatch({ type: "sortBy", payload: "experience" })}
          >
            <p>Experience</p>
            <span>{state.sortBy === "experience" && getIcon(state.direction)}</span>
          </li>
        </ul>
      </div>
      {hospitals}
    </div>
  );
};

export default Hospitals;
