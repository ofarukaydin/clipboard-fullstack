export type Filter = {
  key: string;
  doc_count: number;
};

export type FiltersResponse = {
  department: Filter[];
  experience: Filter[];
  job_type: Filter[];
  work_schedule: Filter[];
};

export type Job = {
  total_jobs_in_hospital: number;
  name: string;
  job_title: string;
  items: JobItem[];
};

export type JobItem = {
  required_skills: string[];
  county: string;
  zip: number;
  location: string;
  nurse_patient_ratio: string;
  job_id: number;
  type: string;
  work_schedule: string;
  hospital_id: number;
  name: string;
  state: string;
  created: string;
  required_credentials: string[];
  department: string[];
  address: string;
  experience: string;
  city: string;
  description: string;
  job_title: string;
  hours: number[];
  salary_range: number[];
  job_type: string;
};
