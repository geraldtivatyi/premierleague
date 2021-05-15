import { positions } from "./teamposition";
import { allteams } from "./alldetails";

test("number of games lost", () => {
  expect(positions.length).toBe(7);
});

test("number of games lost by team at position i", () => {
  let i = 2;
  let team = allteams[i-1].["Club"];
  expect(positions[i-1].[[team]]).toBe(2);
});