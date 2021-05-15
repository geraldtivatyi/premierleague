import { gameslost } from "./gameslost";
import { allteams } from "./alldetails";

test("number of games lost", () => {
  expect(gameslost.length).toBe(7);
});

test("number of games lost by team at position i", () => {
  let i = 4; 
  let team = allteams[i-1].["Club"];
  expect(gameslost[i-1].[[team]]).toBe(2);
});