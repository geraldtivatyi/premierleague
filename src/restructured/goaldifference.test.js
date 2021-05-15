import { gameGD } from "./goaldifference";
import { allteams } from "./alldetails";

test("number of game differences", () => {
  expect(gameGD.length).toBe(7);
});

test("game difference of team at position i", () => {
  let i = 4; 
  let team = allteams[i-1].["Club"];
  expect(gameGD[i-1].[[team]]).toBe(-1);
});