import { teamslist } from "./teamslist";

test("number of teams", () => {
  expect(teamslist.length).toBe(7);
});
