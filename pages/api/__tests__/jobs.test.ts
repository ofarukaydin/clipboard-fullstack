import { createMocks } from "node-mocks-http";
import jobs from "../jobs";

describe("/api/jobs", () => {
  test("returns all jobs", async () => {
    const { req, res } = createMocks({
      method: "POST",
      body: {
        searchValue: "",
        sortBy: "",
        direction: "",
        filters: {
          department: [],
          experience: [],
          jobType: [],
          workSchedule: [],
        },
      },
    });

    await jobs(req, res);

    expect(res._getStatusCode()).toBe(200);
    expect(JSON.parse(res._getData()).jobs.length).toBe(20);
  });
});
