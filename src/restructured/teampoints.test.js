import { tp } from "./alldetails";
import { allteams } from "./alldetails";

test("points of team at position i", () => {
  let i = 2;
  let team = allteams[i-1].["Club"];
  expect(tp[i-1].[[team]]).toBe(9);
});