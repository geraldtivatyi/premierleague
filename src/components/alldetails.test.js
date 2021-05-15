import { allteams } from "./alldetails";

test("number of teams", () => {
  expect(allteams.length).toBe(7);
});
