import { tp } from "./alldetails";
import { allteams } from "./alldetails";

test("number of games lost", () => {
  expect(tp.length).toBe(7);
});

test("number of games lost by team at position 2", () => {
  let i = 1;
  let team = allteams[i-1].["Club"];
  expect(tp[i-1].[[team]]).toBe(10);
});