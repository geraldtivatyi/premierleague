import { gamesdrew } from "./gamesdrew";
import { allteams } from "./alldetails";

test("number of games drawn by team at position i", () => {
  let i = 5; 
  let team = allteams[i-1].["Club"];
  expect(gamesdrew[i-1].[[team]]).toBe(3);
});